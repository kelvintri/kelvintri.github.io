"use client";

import Section from "./ui/Section";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <Section id="skills" title="SKILLS">
      <div className="grid md:grid-cols-2 gap-12">

        {/* Technical Skills - Bars */}
        <div className="space-y-6">
          <h3 className="text-2xl font-orbitron text-neon-cyan mb-6 border-b border-dark-border pb-2">
            TECHNICAL_DATA
          </h3>
          <div className="space-y-6">
            {portfolioData.skills.technical.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1 font-mono">
                  <span>{skill.name}</span>
                  <span className="text-neon-cyan">{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-dark-border w-full relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan relative"
                  >
                    <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_white]" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Skills - Circular */}
        <div className="space-y-6">
          <h3 className="text-2xl font-orbitron text-neon-purple mb-6 border-b border-dark-border pb-2">
            PROFESSIONAL_STATS
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {portfolioData.skills.professional.map((skill, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-4 border border-dark-border bg-dark-bg/30 aspect-square rounded-full relative group hover:border-neon-cyan transition-colors">
                 {/* Circular Progress Mockup */}
                 <svg className="w-24 h-24 -rotate-90 transform">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="transparent"
                      className="text-dark-border"
                    />
                    <motion.circle
                      initial={{ strokeDasharray: "0 251" }}
                      whileInView={{ strokeDasharray: `${(skill.percentage / 100) * 251} 251` }}
                      transition={{ duration: 1.5 }}
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="transparent"
                      className="text-neon-purple group-hover:text-neon-cyan transition-colors"
                    />
                 </svg>
                 <div className="absolute text-center">
                    <span className="block text-2xl font-bold text-white">{skill.percentage}%</span>
                    <span className="text-xs text-gray-400 uppercase">{skill.name}</span>
                 </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
