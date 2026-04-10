import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  design: [
    'Figma',
    'Photoshop',
    'Illustrator',
    'Prototyping',
    'Wireframing',
    'User Research'
  ],

  development: [
    'HTML',
    'CSS',
    'Basic JavaScript',
    'Basic React',
    'C'
  ]
};

export function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Tools & Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The software and technologies I use to design and build digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24 max-w-5xl mx-auto">
          
          {/* Design Skills */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-accent-light"></span>
              Design
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.design.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 rounded-full glass border-white/5 text-gray-300 hover:text-white hover:border-accent/50 hover:bg-white/10 transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Development Skills */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-purple-400"></span>
              Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.development.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 rounded-full glass border-white/5 text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}