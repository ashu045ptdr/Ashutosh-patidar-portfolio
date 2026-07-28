import { FolderGit2, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'CopiaCom',
      role: 'Software Developer (Backend)',
      description: 'Pharmaceutical management system used to manage medicine formulations, specification data, and product approval workflows.',
      points: [
        'Designed and implemented scalable RESTful APIs using Node.js and Express.js.',
        'Integrated MongoDB for secure and efficient storage of product and specification data.',
        'Implemented authentication, authorization, and role-based access control.'
      ],
      tags: ['Node.js', 'Express.js', 'MongoDB', 'React.js']
    },
    {
      title: 'Aivis',
      role: 'Software Developer (Backend)',
      description: 'Pharmaceutical data export and management on remote system.',
      points: [
        'Developed secure data synchronization mechanisms to transfer pharmaceutical data.',
        'Built backend modules for managing medicine, formulation, and product information.',
        'Implemented data validation to maintain data integrity and security.'
      ],
      tags: ['Node.js', 'Express.js', 'MongoDB']
    },
    {
      title: 'SaferWatch Developer Portal',
      role: 'Software Developer (Backend)',
      description: 'A U.S.-based security platform that enables developers to access and integrate security APIs.',
      points: [
        'Built APIs for API key lifecycle management (generation, regeneration, revocation).',
        'Integrated PostgreSQL for secure storage of developer accounts and API credentials.',
        'Implemented API usage monitoring and rate-limiting mechanisms.'
      ],
      tags: ['Node.js', 'NestJS', 'PostgreSQL']
    },
    {
      title: 'Naufumi',
      role: 'Software Developer (Backend)',
      description: 'Business listing and management platform with live location and geolocation services.',
      points: [
        'Built APIs for job posting and job listing, allowing businesses to publish vacancies.',
        'Integrated MongoDB for efficient management of business, user, and job data.',
        'Implemented notifications, location services, and media management.'
      ],
      tags: ['Node.js', 'Express.js', 'MongoDB', 'Geolocation']
    },
    {
      title: 'Labcompute',
      role: 'Software Developer (Backend)',
      description: 'Pharmaceutical management system to manage drug formulations records and calculations.',
      points: [
        'Developed backend functionalities for drug formulations records.',
        'Integrated MongoDB for secure data management.',
        'Implemented role-based access control to ensure data security.'
      ],
      tags: ['Node.js', 'Express.js', 'MongoDB']
    }
  ];

  return (
    <section className="relative py-24" id="projects">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Featured Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div className="group relative bg-zinc-800/50 backdrop-blur-sm rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all duration-500 overflow-hidden" key={index}>
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500 z-0"></div>
              
              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <FolderGit2 size={24} />
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-zinc-400 hover:text-sky-400 transition-colors" aria-label="GitHub Repo"><Code size={22} /></a>
                    <a href="#" className="text-zinc-400 hover:text-sky-400 transition-colors" aria-label="External Link"><ExternalLink size={22} /></a>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                
                <div className="mb-4">
                  <span className="inline-block bg-purple-600/20 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full border border-purple-500/20">
                    {project.role}
                  </span>
                </div>
                
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <ul className="space-y-2 mb-8 flex-grow">
                  {project.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-xs text-zinc-400 leading-relaxed">
                      <span className="text-sky-500 mr-2">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span className="bg-gray-700/30 text-zinc-300 text-xs px-3 py-1.5 rounded-full border border-gray-600/50 group-hover:border-purple-500/50 transition-colors" key={idx}>
                      {tag}
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

export default Projects;
