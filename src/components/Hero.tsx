import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouse({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 🔥 SPOTLIGHT EFFECT */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(
            600px circle at ${mouse.x}px ${mouse.y}px,
            rgba(59,130,246,0.15),
            transparent 40%
          )`,
        }}
      />

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[40vw] h-[40vw] bg-accent-cyan/10 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-4xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles size={16} className="text-accent-light animate-pulse" />
            <span className="text-sm font-medium text-gray-300">
              UI/UX Designer • Visual Designer • Frontend Enthusiast
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4"
          >
            <span className="text-gray-400 text-lg md:text-xl block mb-2">
              Hi, I'm Nayani
            </span>

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-light to-accent-cyan">
              Designing intuitive digital products that enhance user experience
            </span>
          </motion.h1>

          {/* Credibility */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-gray-500 text-sm block mb-4 tracking-wide"
          >
            Based in Sri Lanka • Available for freelance & full-time roles
          </motion.span>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-xl mb-6"
          >
            UI/UX Designer crafting user-centered web and mobile experiences 
            with a focus on usability, visual clarity, and real-world impact.
          </motion.p>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-6 mb-10 text-sm text-gray-400"
          >
            <span>🎯 UX Research</span>
            <span>🎨 UI & Visual Design</span>
            <span>💻 Figma • Frontend</span>
          </motion.div>

          {/* Buttons (ONLY ONE NOW) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 rounded-full font-semibold flex items-center gap-2 text-white 
              bg-gradient-to-r from-blue-500 to-purple-500 
              hover:from-blue-600 hover:to-purple-600 
              shadow-lg shadow-blue-500/20 
              hover:shadow-purple-500/30 
              transition-all duration-300"
            >
              View My Work
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}