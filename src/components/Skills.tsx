const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Nest.js', 'RESTful APIs']
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'HTML/CSS', 'Javascript', 'Responsive Design']
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis']
    },
    {
      title: 'Tools & Other',
      skills: ['Websocket', 'Socket.io', 'Firebase', 'Docker', 'Git']
    }
  ];

  return (
    <section className="relative py-24" id="skills">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 inline-block mb-4">Technical Arsenal</h2>
          <p className="text-zinc-400">Tools and technologies I use to build digital solutions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div className="group relative" key={index}>
              {/* Outer hover glow wrapper */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              
              <div className="relative bg-zinc-800/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-white/5 h-full flex flex-col">
                <h3 className="text-xl font-bold text-white mb-6 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent inline-block">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3 mt-auto">
                  {category.skills.map((skill, idx) => (
                    <span 
                      className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/50 text-zinc-300 hover:text-sky-400 text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_0_10px_rgba(14,165,233,0.3)] animate-float-icon" 
                      style={{ animationDelay: `${idx * 0.2}s` }}
                      key={idx}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
