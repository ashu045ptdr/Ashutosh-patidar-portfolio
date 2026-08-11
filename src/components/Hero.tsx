import { ArrowRight, Mail } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden" id="home">
      <ParticlesBackground />
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-30 bg-sky-500/40 animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-30 bg-purple-600/30 animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start space-y-6">
          <div className="flex gap-3">
            <span className="bg-zinc-800/50 border border-white/5 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium text-zinc-300 flex items-center gap-2">
              💼 Full Time
            </span>
            {/* <span className="bg-zinc-800/50 border border-white/5 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium text-zinc-300 flex items-center gap-2">
              ✨ Freelance
            </span> */}
          </div>

          <h1 className="text-5xl lg:text-8xl font-black text-zinc-50 leading-[1.1] tracking-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-white via-sky-400 to-purple-400 bg-clip-text text-transparent bg-[length:300%] animate-gradient">Ashutosh</span>
          </h1>

          <p className="text-lg lg:text-xl text-zinc-400 max-w-xl leading-relaxed">
            I build scalable web applications using Node.js, Express.js, NestJS, and React.js.
            Passionate about delivering efficient, secure, and high-quality software solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="group relative px-6 py-3 rounded-full font-medium text-white shadow-lg overflow-hidden flex items-center gap-2">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-purple-500 transition-transform group-hover:scale-105"></div>
              <span className="relative z-10">View Portfolio</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a href="mailto:ashupatidar1432@gmail.com" className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:border-sky-500/50 hover:bg-white/10 hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <Mail size={18} /> Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end items-center relative mt-12 lg:mt-0">
          <div className="relative w-64 h-[320px] sm:w-80 sm:h-[400px] bg-zinc-900/40 backdrop-blur-3xl border border-white/10 shadow-2xl rounded-[40px] flex flex-col justify-end overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <img src="/profile.jpg" alt="Ashutosh Patidar" className="w-full h-full object-cover opacity-80 transition-all duration-500" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/90 z-10"></div>

            <div className="relative z-20 p-8">
              <h3 className="text-2xl font-bold text-white mb-1">Ashutosh Patidar</h3>
              <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 uppercase tracking-widest mb-6">Software Developer</p>

              <div className="flex gap-3">
                <a href="https://share.google/TPEW6DT78VEmbAFan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-300 hover:bg-white/20 hover:text-white hover:-translate-y-1 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
                <a href="https://www.linkedin.com/in/ashutosh-patidar-540783242?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-300 hover:bg-white/20 hover:text-white hover:-translate-y-1 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 right-0 sm:bottom-auto sm:right-auto sm:top-10 sm:-left-10 bg-zinc-900/80 backdrop-blur-xl border border-white/10 px-4 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-2xl animate-float z-30">
            <p className="text-zinc-400 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-1">Deliver</p>
            <p className="text-lg sm:text-2xl font-black text-white whitespace-nowrap">2+ Years Exp.</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce pointer-events-none">
        <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400">SCROLL</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-zinc-400 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
