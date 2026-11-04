import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "Hi! I'm Ashutosh's portfolio assistant. Ask me about his skills, experience, education, or projects like CopiaCom, Aivis, and SaferWatch Developer Portal." }
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
      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: messages.slice(1).map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            text: m.text,
          })),
        }),
      });

      const data = await response.json() as { text?: unknown; error?: unknown };
      if (!response.ok) {
        throw new Error(typeof data.error === 'string' ? data.error : 'The AI assistant could not connect. Please try again later.');
      }
      const responseText = data.text;
      if (typeof responseText !== 'string' || !responseText.trim()) {
        throw new Error('The AI assistant returned an empty response. Please try again.');
      }

      setMessages(prev => [...prev, { role: 'ai', text: responseText }]);
    } catch (error: unknown) {
      console.error('Chat function error:', error);
      const text = error instanceof Error
        ? error.message
        : 'Sorry, the AI assistant could not connect. Please try again later.';
      setMessages(prev => [...prev, { role: 'ai', text }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-6 p-4 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 text-white shadow-xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
        style={{ bottom: 'calc(3.5rem + env(safe-area-inset-bottom))' }}
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
            className="fixed left-4 right-4 sm:left-auto sm:right-6 sm:w-80 md:w-96 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
            style={{
              bottom: 'calc(8rem + env(safe-area-inset-bottom))',
              height: 'min(500px, calc(100dvh - 9rem - env(safe-area-inset-bottom)))',
              maxHeight: 'calc(100dvh - 9rem - env(safe-area-inset-bottom))',
            }}
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
                  } whitespace-pre-wrap break-words`}>
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
