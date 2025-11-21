"use client";

import Section from "./ui/Section";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";

export default function Awards() {
  return (
    <Section id="awards" title="AWARDS">
      <div className="grid md:grid-cols-3 gap-6">
        {portfolioData.awards.map((award, index) => (
          <div
            key={index}
            className="bg-dark-card border border-dark-border p-6 flex flex-col items-center text-center relative overflow-hidden group"
          >
            {/* Decorative Background Number */}
            <span className="absolute top-0 right-2 text-6xl font-bold text-white/5 font-orbitron z-0">
              0{index + 1}
            </span>

            <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-neon-cyan z-10 group-hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] transition-shadow">
               <Image
                src={award.image}
                alt={award.presenter}
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-neon-cyan mb-2">{award.title}</h3>
              <p className="text-sm text-gray-400 italic mb-4">&quot;{award.description}&quot;</p>
              <div className="mt-auto">
                <h4 className="text-white font-bold">{award.presenter}</h4>
                <span className="text-xs text-neon-purple">{award.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
