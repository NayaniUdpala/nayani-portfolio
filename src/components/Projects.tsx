import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import unibankImg from '../assets/Unibank.png';
import freshpressImg from '../assets/Watermelon2.png';
import velouraImg from '../assets/Veloura.png';

const projects = [
  {
    id: 1,
    title: 'FreshPress',
    tag: '3D Motion',
    impact: 'Higher engagement',
    description:
      'Interactive juice ordering with depth, motion, and playful UI.',
    image: freshpressImg,
    gradient: 'from-[#ff4d6d] via-[#ff758f] to-[#ffb347]',
    glow: 'bg-pink-400/30',
    link: 'https://www.figma.com/design/82q1QQKYfEBESJ37d0XCBG/FreshPress'
  },
  {
    id: 2,
    title: 'UniBank',
    tag: 'Banking UX',
    impact: 'Simplified tracking',
    description:
      'Smart banking experience for students to manage finances easily.',
    image: unibankImg,
    gradient: 'from-purple-600 via-blue-500 to-indigo-700',
    glow: 'bg-blue-400/30',
    link: 'https://www.behance.net/gallery/246458291/-UniBank-Student-Banking-App'
  },
  {
    id: 3,
    title: 'Veloura',
    tag: 'Luxury Web',
    impact: 'Premium feel',
    description:
      'Luxury hotel website with elegant visuals and refined experience.',
    image: velouraImg,
    gradient: 'from-[#1a1f16] via-[#2d3b2f] to-[#d6b25e]',
    glow: 'bg-[#d6b25e]/30',
    link: 'https://www.figma.com/design/v8yp98L659IfRqNmeUrJfQ/Veloura'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="mb-20 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">
            Featured Work
          </h2>
          <p className="text-gray-400 text-base max-w-xl">
            Selected projects showcasing UX thinking and visual execution.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}

              whileHover={{ scale: 1.03 }}

              className="group relative rounded-3xl overflow-hidden border border-white/10 
              bg-[#0b0f19] hover:border-white/30 transition-all duration-300
              shadow-[0_8px_25px_rgba(0,0,0,0.35)] 
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              backdrop-blur-xl"
            >

              {/* IMAGE SECTION */}
              <div className="relative h-[260px] flex items-center justify-center overflow-hidden">

                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Glow */}
                <div className={`absolute bottom-6 w-40 h-8 ${project.glow} blur-xl rounded-full opacity-60 group-hover:opacity-90 transition`} />

                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative max-h-[85%] max-w-[90%] object-contain transition-all duration-500 group-hover:scale-105"
                />

              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {project.tag}
                  </p>
                </div>

                <p className="text-xs text-blue-400">
                  {project.impact}
                </p>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-center pt-2">
                  <span className="text-sm text-white flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Case Study
                    <ArrowUpRight size={14} className="group-hover:rotate-45 transition" />
                  </span>
                </div>

              </div>

            </motion.a>
          ))}

        </div>
      </div>
    </section>
  );
}
