import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Wrench, Cloud } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      id: '01',
      title: 'LANGUAGES',
      icon: Code2,
      skills: ['JavaScript', 'C++', 'SQL', 'HTML5', 'CSS3'],
    },
    {
      id: '02',
      title: 'FRONTEND',
      icon: Layout,
      skills: ['React.js', 'Tailwind CSS', 'Bootstrap', 'Zustand'],
    },
    {
      id: '03',
      title: 'BACKEND',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'REST APIs (CRUD)', 'JWT Auth', 'Socket.IO'],
    },
    {
      id: '04',
      title: 'DATABASES',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'SQLite'],
    },
    {
      id: '05',
      title: 'TOOLS',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
    },
    {
      id: '06',
      title: 'DEPLOYMENT',
      icon: Cloud,
      skills: ['Vercel', 'Render', 'Railway'],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-20 relative bg-dark text-white border-b-8 border-black py-12 lg:py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-volt text-black font-mono text-xs font-bold px-3 py-1 uppercase border-2 border-black rotate-[-1deg]">
            SECTION // 03
          </div>
          <div className="h-1 bg-white/20 flex-1" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h2 className="font-ranchers text-5xl sm:text-7xl lg:text-8xl uppercase tracking-wide text-white drop-shadow-[5px_5px_0px_#000000]">
            TECHNICAL SKILLS
          </h2>
          <p className="font-mono text-xs sm:text-sm uppercase text-gray-400 mt-1 tracking-wider">
            // FULL STACK MERN & SOFTWARE ENGINEERING COMPETENCIES
          </p>
        </motion.div>

        {/* Skill Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative bg-white text-black border-4 border-black p-5 shadow-[6px_6px_0px_0px_#CCFF00] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#FFFFFF] transition-all group overflow-hidden flex flex-col justify-between"
              >
                
                {/* Number Watermark in Ranchers font */}
                <span className="absolute -bottom-6 -right-2 font-ranchers text-9xl text-black/[0.06] select-none pointer-events-none group-hover:text-black/[0.12] transition-colors">
                  {category.id}
                </span>

                <div>
                  {/* Top Step Tag */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-volt text-black font-mono font-extrabold text-xs uppercase px-2.5 py-0.5 border-2 border-black rotate-[-2deg] shadow-[2px_2px_0px_0px_#000000]">
                      SKILL_SET_{category.id}
                    </span>
                    <IconComponent className="w-5 h-5 text-black" />
                  </div>

                  {/* Skill Category Title */}
                  <h3 className="font-mono text-xl font-extrabold uppercase tracking-tight text-black border-b-2 border-black pb-2 mb-3">
                    {category.title}
                  </h3>

                  {/* Badges of Specific Skills */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {category.skills.map((skillName, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-xs font-bold uppercase bg-gray-100 text-black px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000000] hover:bg-volt transition-colors"
                      >
                        {skillName}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer status */}
                <div className="mt-5 pt-3 border-t-2 border-dashed border-gray-300 flex items-center justify-between font-mono text-[10px] font-bold text-gray-600 uppercase">
                  <span>PRODUCTION READY</span>
                  <span>VERIFIED</span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
