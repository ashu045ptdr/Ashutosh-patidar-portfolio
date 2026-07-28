import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'Swap Infotech Pvt. Ltd, Indore',
      duration: 'Nov 2025 - Present',
      responsibilities: [
        'Develop backend services using Node.js, Express.js, and Nest Js.',
        'Design and implement REST APIs for web and mobile applications.',
        'Manage database operations using MongoDB, MySQL, and PostgreSQL.',
        'Integrate third-party APIs and support backend system integrations.',
        'Improve backend performance and application scalability.',
        'Collaborate with frontend teams to deliver stable and efficient application features.'
      ]
    },
    {
      role: 'Junior Software Developer',
      company: 'Swapac Infotech Pvt. Ltd, Indore',
      duration: 'Dec 2024 - Oct 2025',
      responsibilities: [
        'Developed backend modules using Node.js and Express.js.',
        'Built REST APIs and handled server-side business logic.',
        'Implemented database operations using MongoDB and MySQL.',
        'Assisted in debugging and optimizing backend systems.',
        'Supported API integration and application functionality improvements.'
      ]
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden" id="experience">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 bg-sky-500/40 animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 bg-purple-600/30"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px)] bg-[size:40px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400 inline-block">Experience Journey</h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`} key={index}>
                
                {/* Center dot for desktop */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-zinc-900 border-4 border-sky-500 items-center justify-center z-10 shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} pl-12 relative`}>
                  {/* Left dot for mobile */}
                  <div className="md:hidden absolute left-3 top-4 w-4 h-4 rounded-full bg-sky-500 z-10 shadow-[0_0_10px_rgba(14,165,233,0.8)]"></div>
                  
                  <div className="bg-zinc-800/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-blue-500/30 group-hover:border-blue-400/80 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4">
                      <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        {exp.duration}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <h4 className="text-sky-400 font-medium mb-6 flex items-center gap-2">
                      <Briefcase size={16} /> {exp.company}
                    </h4>
                    
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start text-zinc-300 text-sm leading-relaxed">
                          <span className="text-purple-400 mr-2 mt-0.5">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
