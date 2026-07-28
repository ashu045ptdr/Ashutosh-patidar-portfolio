import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section className="relative py-24 bg-zinc-950" id="education">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white">Education & Certifications</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="flex items-center gap-3 text-2xl font-bold text-sky-400 mb-8">
              <GraduationCap size={28} /> Academic Background
            </h3>
            <div className="space-y-6">
              <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/5 p-6 rounded-2xl border-l-4 border-l-sky-500 hover:-translate-y-1 transition-transform shadow-xl">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-white">Master of Computer Application</h4>
                  <span className="bg-sky-500/20 text-sky-400 text-xs font-bold px-3 py-1 rounded-full">2023</span>
                </div>
                <p className="text-zinc-400">Maharaja Ranjit Singh Group of Institute, Indore</p>
              </div>
              
              <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/5 p-6 rounded-2xl border-l-4 border-l-sky-500 hover:-translate-y-1 transition-transform shadow-xl">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-white">BSc (Computer Science)</h4>
                  <span className="bg-sky-500/20 text-sky-400 text-xs font-bold px-3 py-1 rounded-full">2021</span>
                </div>
                <p className="text-zinc-400">ILVA Commerce and Science College, Indore</p>
              </div>
              
              <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/5 p-6 rounded-2xl border-l-4 border-l-sky-500 hover:-translate-y-1 transition-transform shadow-xl">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-white">Higher Secondary Education</h4>
                  <span className="bg-sky-500/20 text-sky-400 text-xs font-bold px-3 py-1 rounded-full">2018</span>
                </div>
                <p className="text-zinc-400">Excellence School No 1, Khargone</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="flex items-center gap-3 text-2xl font-bold text-purple-400 mb-8">
              <Award size={28} /> Certifications
            </h3>
            <div className="space-y-6">
              <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/5 p-6 rounded-2xl border-l-4 border-l-purple-500 hover:-translate-y-1 transition-transform shadow-xl">
                <h4 className="text-xl font-bold text-white mb-2">Master Database Management</h4>
                <p className="text-zinc-400">TCS iON (Beginners)</p>
              </div>
              
              <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/5 p-6 rounded-2xl border-l-4 border-l-purple-500 hover:-translate-y-1 transition-transform shadow-xl">
                <h4 className="text-xl font-bold text-white mb-2">MYSQL Basics</h4>
                <p className="text-zinc-400">Great Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
