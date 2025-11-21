"use client";

import Section from "./ui/Section";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";

export default function About() {
  return (
    <Section id="about" title="ABOUT ME">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative h-80 w-full border border-neon-purple/30 bg-black/50 p-2">
           <div className="absolute inset-0 grid-bg opacity-50" />
           <Image
            src={portfolioData.personal.aboutImage}
            alt="About"
            fill
            className="object-contain p-4"
           />
           {/* HUD Elements */}
           <div className="absolute top-2 left-2 text-[10px] text-neon-cyan">IMG_SRC: 0x4A2B</div>
           <div className="absolute bottom-2 right-2 text-[10px] text-neon-cyan">STATUS: ONLINE</div>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            {portfolioData.about.text}
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div>
               <h4 className="text-neon-purple mb-2 font-bold">TECH STACK</h4>
               <ul className="space-y-1 text-sm text-gray-400 font-mono">
                 {portfolioData.about.skills.slice(0, 4).map((skill, i) => (
                   <li key={i} className="flex items-center gap-2">
                     <span className="w-1 h-1 bg-neon-cyan" /> {skill}
                   </li>
                 ))}
               </ul>
            </div>
            <div>
               <h4 className="text-neon-purple mb-2 font-bold">&nbsp;</h4>
               <ul className="space-y-1 text-sm text-gray-400 font-mono">
                 {portfolioData.about.skills.slice(4).map((skill, i) => (
                   <li key={i} className="flex items-center gap-2">
                     <span className="w-1 h-1 bg-neon-cyan" /> {skill}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
