"use client";

import Section from "./ui/Section";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="EXPERIENCE & EDU">
      <div className="grid md:grid-cols-2 gap-12">

        {/* Education */}
        <div>
           <h3 className="text-xl font-orbitron text-white mb-8 flex items-center gap-2">
             <span className="w-2 h-2 bg-neon-cyan rounded-full" /> EDUCATION
           </h3>
           <div className="relative border-l border-dark-border ml-3 pl-8 space-y-8">
             {portfolioData.education.map((edu, idx) => (
               <div key={idx} className="relative group">
                 <span className="absolute -left-[37px] top-1 w-4 h-4 bg-dark-bg border-2 border-neon-purple group-hover:bg-neon-purple rounded-full transition-colors" />
                 <div className="bg-dark-bg border border-dark-border p-4 group-hover:border-neon-cyan transition-all">
                    <h4 className="text-lg font-bold text-white">{edu.school}</h4>
                    <span className="text-neon-cyan text-sm font-mono block mb-2">{edu.year}</span>
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* Experience */}
        <div>
           <h3 className="text-xl font-orbitron text-white mb-8 flex items-center gap-2">
             <span className="w-2 h-2 bg-neon-purple rounded-full" /> WORK HISTORY
           </h3>
           <div className="relative border-l border-dark-border ml-3 pl-8 space-y-10">
             {portfolioData.experience.map((exp, idx) => (
               <div key={idx} className="relative group">
                 <span className="absolute -left-[37px] top-1 w-4 h-4 bg-dark-bg border-2 border-neon-cyan group-hover:bg-neon-cyan rounded-full transition-colors" />
                 <div className="bg-dark-bg border border-dark-border p-6 group-hover:border-neon-purple transition-all">
                    <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                    <div className="flex justify-between items-center mb-4">
                       <span className="text-neon-purple font-bold">{exp.company}</span>
                       <span className="text-gray-500 text-xs font-mono border border-gray-700 px-2 py-1">{exp.year}</span>
                    </div>
                    <ul className="list-disc list-inside text-sm text-gray-400 space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                 </div>
               </div>
             ))}
           </div>
        </div>

      </div>
    </Section>
  );
}
