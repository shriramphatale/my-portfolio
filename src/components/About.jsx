import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, MapPin, Briefcase, Sparkles, Code2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 relative bg-white text-black border-b-8 border-black py-12 lg:py-16 px-4 sm:px-6 lg:px-12">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-black text-white font-mono text-xs font-bold px-3 py-1 uppercase border-2 border-black rotate-[-2deg]">
            SECTION // 02
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
            PROFILE
          </div>
          <h2 className="font-ranchers text-5xl sm:text-7xl lg:text-8xl uppercase tracking-wide text-black drop-shadow-[4px_4px_0px_#CCFF00]">
            ABOUT ME
          </h2>
        </motion.div>

        {/* Main Bio Grid — Equal Height Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Developer Biography Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7 bg-gray-50 border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000000] flex flex-col justify-between h-full"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b-3 border-black pb-3">
                <span className="font-mono text-sm font-extrabold uppercase text-black flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-black" />
                  DEVELOPER BIOGRAPHY
                </span>
                <span className="font-mono text-xs font-bold bg-volt px-2 py-0.5 border border-black uppercase">
                  FULL-STACK
                </span>
              </div>

              {/* Exact User Bio Text */}
              <p className="font-sans text-base sm:text-lg text-black leading-relaxed font-medium">
                I build web applications that are clean, functional, and enjoyable to use. My focus is on creating seamless user experiences with React and developing reliable backend systems using Node.js, Express, and MongoDB. When I'm not coding, you'll usually find me exploring new technologies, improving my skills, or working on projects that push me beyond my comfort zone.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="bg-white border-2 border-black px-3 py-1.5 font-mono text-xs font-bold uppercase flex items-center gap-2 shadow-[2px_2px_0px_0px_#000000]">
                  <MapPin className="w-4 h-4 text-black" />
                  <span>PUNE, MAHARASHTRA, INDIA</span>
                </div>
              </div>
            </div>

            {/* Resume Download CTA */}
            <div className="pt-6 border-t-3 border-black mt-6">
              <a
                href="mailto:shriramphatale833@gmail.com?subject=Request%20Resume%20-%20Shriram%20Phatale"
                className="brutalist-btn inline-flex items-center gap-3 bg-black text-white font-mono font-extrabold text-sm sm:text-base uppercase px-7 py-4 border-4 border-black shadow-[6px_6px_0px_0px_#CCFF00] hover:bg-volt hover:text-black transition-colors w-full sm:w-auto justify-center"
              >
                <Download className="w-5 h-5" />
                <span>REQUEST / DOWNLOAD RESUME</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: 3 Containers Matching Left Column Height */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-4 h-full"
          >
            {/* Container 1: Certification */}
            <div className="bg-volt border-4 border-black p-5 shadow-[6px_6px_0px_0px_#000000] space-y-2 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 border-b-2 border-black pb-1.5">
                <Award className="w-4 h-4 text-black" />
                <span className="font-mono text-xs font-extrabold uppercase">CERTIFICATION</span>
              </div>
              <h4 className="font-mono text-base font-extrabold uppercase text-black">
                MERN Full Stack Web Development
              </h4>
              <p className="font-sans text-xs font-bold text-black uppercase leading-relaxed">
                Apna College — Full-Stack Web Development certification covering MongoDB, Express, React, and Node.js.
              </p>
            </div>

            {/* Container 2: Core Stack & Focus */}
            <div className="bg-white text-black border-4 border-black p-5 shadow-[6px_6px_0px_0px_#000000] space-y-2 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 border-b-2 border-black pb-1.5">
                <Code2 className="w-4 h-4 text-black" />
                <span className="font-mono text-xs font-extrabold uppercase">CORE STACK & FOCUS</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['REACT.JS', 'NODE.JS', 'EXPRESS', 'MONGODB', 'SOCKET.IO'].map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[10px] sm:text-xs font-bold uppercase bg-gray-100 text-black px-2 py-0.5 border border-black shadow-[1.5px_1.5px_0px_0px_#000000]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Container 3: My Philosophy */}
            <div className="bg-dark text-white border-4 border-black p-5 shadow-[6px_6px_0px_0px_#CCFF00] space-y-2 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-volt font-mono text-xs font-bold uppercase border-b-2 border-white/20 pb-1.5">
                <Sparkles className="w-4 h-4 text-volt" />
                MY PHILOSOPHY
              </div>
              <p className="font-mono text-xs text-gray-300 font-semibold uppercase leading-relaxed">
                Clean code, fast performance, reactive UI, and seamless real-time user experiences.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
