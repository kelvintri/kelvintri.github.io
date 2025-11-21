"use client";

import Section from "./ui/Section";
import { portfolioData } from "@/data/portfolio";
import { Camera, Mountain, Users, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  camera: Camera,
  mountain: Mountain,
  users: Users,
};

export default function Interests() {
  return (
    <Section id="interests" title="INTERESTS">
      <div className="grid md:grid-cols-3 gap-6">
        {portfolioData.interests.map((interest, index) => {
          const Icon = iconMap[interest.icon] || Camera;
          return (
            <div
              key={index}
              className="bg-dark-card border border-dark-border p-8 text-center hover:border-neon-green transition-colors group"
            >
              <div className="w-16 h-16 mx-auto border-2 border-gray-700 rounded-full flex items-center justify-center mb-4 group-hover:border-neon-green group-hover:bg-neon-green/10 transition-all">
                <Icon className="w-8 h-8 text-gray-400 group-hover:text-neon-green transition-colors" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-white">{interest.title}</h4>
              <p className="text-sm text-gray-500">{interest.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
