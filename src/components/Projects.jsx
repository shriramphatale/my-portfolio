import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, MessageSquare, Layout, Server } from 'lucide-react';

export default function Projects() {
  const projectList = [
    {
      id: 'PROJ_01',
      name: 'Let’s Talk – Real-Time Chat Application',
      icon: MessageSquare,
      explanation: 'Developed a full-stack real-time chat application enabling users to communicate instantly through one-to-one messaging with a modern, responsive interface.',
      techStack: 'React.js • Node.js • Express.js • MongoDB • Socket.IO • Zustand',
      github: 'https://github.com/shriramphatale',
      live: 'https://letstalk-chat.vercel.app',
    },
    {
      id: 'PROJ_02',
      name: 'Personal Portfolio Website',
      icon: Layout,
      explanation: 'Built a modern, responsive personal portfolio website showcasing projects, skills, and experience using React + Vite and custom Neo-Brutalist design principles.',
      techStack: 'React • Vite • Tailwind CSS • Framer Motion',
      github: 'https://github.com/shriramphatale',
      live: '#hero',
    },
    {
      id: 'PROJ_03',
      name: 'RESTful API & Auth Service',
      icon: Server,
      explanation: 'Designed a scalable backend service featuring CRUD operations, secure JWT authentication, session management, and database integrations.',
      techStack: 'Node.js • Express.js • MongoDB • JWT • REST API',
      github: 'https://github.com/shriramphatale',
      live: 'https://github.com/shriramphatale',
    },
  ];

  return (
    <section id="projects" className="scroll-mt-20 relative bg-white text-black border-b-8 border-black py-12 lg:py-16 px-4 sm:px-6 lg:px-12">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-black text-white font-mono text-xs font-bold px-3 py-1 uppercase border-2 border-black rotate-[1deg]">
            SECTION // 04
          </div>
          <div className="h-1 bg-black flex-1" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <div className="inline-block bg-volt text-black font-mono font-extrabold text-xs uppercase px-3 py-1 border-2 border-black mb-2 shadow-[3px_3px_0px_0px_#000000] rotate-[-1deg]">
            FEATURED ENGINEERING PROJECTS
          </div>
          <h2 className="font-ranchers text-5xl sm:text-7xl lg:text-8xl uppercase tracking-wide text-black drop-shadow-[4px_4px_0px_#CCFF00]">
            PROJECTS
          </h2>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {projectList.map((project, index) => {
            const IconComp = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                className="bg-gray-50 border-4 border-black p-6 shadow-[6px_6px_0px_0px_#000000] hover:shadow-[10px_10px_0px_0px_#CCFF00] hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header Tag */}
                  <div className="flex items-center justify-between border-b-3 border-black pb-3 mb-4">
                    <span className="bg-volt text-black font-mono font-extrabold text-xs uppercase px-2.5 py-0.5 border-2 border-black shadow-[2px_2px_0px_0px_#000000]">
                      {project.id}
                    </span>
                    <IconComp className="w-6 h-6 text-black" />
                  </div>

                  {/* Project Title */}
                  <h3 className="font-mono text-xl font-extrabold uppercase text-black mb-3 leading-snug">
                    {project.name}
                  </h3>

                  {/* Explanation */}
                  <p className="font-sans text-sm text-gray-800 leading-relaxed font-medium mb-6">
                    {project.explanation}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="font-mono text-[11px] font-bold uppercase text-gray-600 mb-1">
                      TECH STACK:
                    </div>
                    <div className="bg-black text-white border-2 border-black p-2.5 font-mono text-xs font-bold uppercase">
                      {project.techStack}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t-3 border-black">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="brutalist-btn bg-black text-white font-mono text-xs font-bold uppercase px-3 py-2.5 border-2 border-black shadow-[3px_3px_0px_0px_#CCFF00] hover:bg-volt hover:text-black flex items-center justify-center gap-1.5"
                  >
                    <Github className="w-4 h-4" />
                    <span>GITHUB</span>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="brutalist-btn bg-volt text-black font-mono text-xs font-bold uppercase px-3 py-2.5 border-2 border-black shadow-[3px_3px_0px_0px_#000000] hover:bg-white flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>LIVE DEMO</span>
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
