
import React from "react";
import { motion } from "framer-motion";
import { PenTool, Palette, ArrowRight, Download } from "lucide-react";
import profilePic from "../assets/profile.png";

export function About() {
  return (
    <section id="about" className="py-28 md:py-36 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* ===== TOP SECTION ===== */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* LEFT - PROFILE IMAGE */}
          <motion.div className="flex justify-center md:justify-start">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05 }}
              className="relative w-52 h-52 md:w-64 md:h-64"
            >
              {/* Soft Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl" />

              {/* Profile Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={profilePic}
                  alt="Nayani Wickramaarachchi"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT - ABOUT TEXT */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Nayani Wickramaarachchi
            </h2>

            <p className="text-blue-400 text-lg font-medium mb-6">
              UI/UX Designer &amp; Graphic Designer
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
              Passionate UI/UX and graphic designer focused on crafting
              user-centered digital experiences. I combine creativity with
              problem-solving skills to design intuitive interfaces and
              impactful visuals that engage and delight users.
            </p>

            {/* ===== DOWNLOAD CV BUTTON ===== */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="/Nayani-CV.pdf"
                download="Nayani Wickramaarachchi-UIUX Designer.pdf"
                className="px-6 py-3 rounded-full font-semibold flex items-center gap-2 text-white
                bg-gradient-to-r from-blue-500 to-purple-500
                hover:from-blue-600 hover:to-purple-600
                shadow-lg shadow-blue-500/20
                hover:scale-105 hover:shadow-purple-500/30
                hover:gap-3
                transition-all duration-300"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* ===== BOTTOM CARDS ===== */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* UI/UX DESIGN CARD */}
          <motion.a
            href="#projects"
            whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group relative rounded-3xl p-[1px] bg-gradient-to-r from-blue-500/40 to-purple-500/40"
            style={{ perspective: 1000 }}
          >
            <div className="rounded-3xl bg-[#0b0f19] p-8 md:p-10 h-full shadow-xl border border-white/10">
              <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                <PenTool className="text-blue-400" size={26} />
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                UI/UX Design
              </h3>

              <p className="text-gray-400 mb-6">
                Designing intuitive, accessible, and engaging digital
                experiences. From wireframes to high-fidelity modern interfaces.
              </p>

              <div className="flex items-center gap-2 text-blue-400 font-medium group-hover:gap-4 transition-all">
                View Projects <ArrowRight size={18} />
              </div>
            </div>
          </motion.a>

          {/* GRAPHIC DESIGN CARD */}
          <motion.a
            href="#design"
            whileHover={{ y: -6, rotateX: 4, rotateY: 4 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group relative rounded-3xl p-[1px] bg-gradient-to-r from-purple-500/40 to-blue-500/40"
            style={{ perspective: 1000 }}
          >
            <div className="rounded-3xl bg-[#0b0f19] p-8 md:p-10 h-full shadow-xl border border-white/10">
              <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                <Palette className="text-purple-400" size={26} />
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Graphic Design
              </h3>

              <p className="text-gray-400 mb-6">
                Creating branding, posters, and visual identities that
                communicate strong and memorable brand stories.
              </p>

              <div className="flex items-center gap-2 text-purple-400 font-medium group-hover:gap-4 transition-all">
                View Gallery <ArrowRight size={18} />
              </div>
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
}
