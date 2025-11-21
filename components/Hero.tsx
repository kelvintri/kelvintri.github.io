"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Particle/Grid Effect Mockup */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-purple/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 border border-neon-cyan text-neon-cyan text-sm font-mono mb-4">
              SYSTEM ONLINE
            </span>
            <h1 className="text-5xl md:text-7xl font-orbitron font-bold leading-tight">
              HELLO I&apos;M <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple animate-pulse-slow">
                KELVIN
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 font-rajdhani mt-2">
              &lt; {portfolioData.personal.title} /&gt;
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-400 max-w-lg text-lg"
          >
            Building futuristic web experiences with modern technologies. Based in {portfolioData.personal.address}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 font-bold clip-path-polygon"
            >
              INITIATE CONTACT
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-neon-purple hover:text-neon-purple transition-all duration-300"
            >
              VIEW PROJECTS
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Spinning border rings */}
            <div className="absolute inset-0 border-2 border-neon-cyan/30 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border-2 border-neon-purple/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-dark-card shadow-[0_0_30px_rgba(0,243,255,0.3)]">
               <Image
                src={portfolioData.personal.image}
                alt="Kelvin"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
