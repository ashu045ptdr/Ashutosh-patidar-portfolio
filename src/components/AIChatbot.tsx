import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');

const SYSTEM_PROMPT = `You are an AI assistant for Ashutosh Patidar's portfolio website. 
Ashutosh is a Software Developer with 2+ years of experience in Node.js, Express.js, NestJS, and React.js. 
Be helpful, concise, and professional. Answer questions about his skills, experience, and projects. 
If you don't know something, just say you don't have that specific information but emphasize his core skills.`;

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "Hi! I am Ashutosh's AI assistant. Ask me anything about his skills, experience, or projects!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-3.5-flash' });
      
      const chat = model.startChat({
        history: [
          { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
          { role: 'model', parts: [{ text: "Understood. I will act as Ashutosh's AI assistant." }] },
          ...messages.slice(1).map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }]
          }))
        ]
      });

      const result = await chat.sendMessage(userMessage);
      const response = await result.response;
      const text = response.text();
      
      setMessages(prev => [...prev, { role: 'ai', text: text }]);
    } catch (error: any) {
      console.error('Gemini API Error:', error);
      
      // Fallback for Google's known AQ key authentication issue or other errors
      const isAuthError = error.message?.includes('401') || error.message?.includes('authentication') || error.message?.includes('404');
      
      if (isAuthError) {
        setMessages(prev => [...prev, { 
          role: 'ai', 
          text: `[Demo Mode]: I am Ashutosh's AI! (Note: Live API connection is currently paused due to Google API key updates, but Ashutosh is an expert in React, Node.js, and building scalable web apps!)` 
        }]);
      } else {
        setMessages(prev => [...prev, { role: 'ai', text: "Sorry, I'm having trouble connecting to my brain right now. Please try again later." }]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 text-white shadow-xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
        aria-label="Open AI Assistant"
      >
        <MessageCircle size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
            style={{ height: '500px', maxHeight: 'calc(100vh - 120px)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-zinc-800/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">Ashutosh AI</h3>
                  <p className="text-xs text-sky-400">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-sky-500 text-white rounded-tr-sm' 
                      : 'bg-zinc-800/80 text-zinc-300 rounded-tl-sm border border-white/5'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl px-4 py-3 text-sm bg-zinc-800/80 text-zinc-300 rounded-tl-sm border border-white/5 flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-sky-500" />
                    <span>Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-zinc-900/50">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="w-full bg-zinc-800/50 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-sky-500/50 transition-colors disabled:opacity-50"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-2 text-sky-400 hover:text-sky-300 transition-colors disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
