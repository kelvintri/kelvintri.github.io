"use client";

import Section from "./ui/Section";
import { portfolioData } from "@/data/portfolio";
import { Code, Smartphone, Target, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  bullseye: Target,
  code: Code,
  smartphone: Smartphone,
};

export default function Services() {
  return (
    <Section id="services" title="SERVICES">
      <div className="grid md:grid-cols-3 gap-6">
        {portfolioData.services.map((service, index) => {
          const Icon = iconMap[service.icon] || Code;
          return (
            <div
              key={index}
              className="group p-6 border border-dark-border bg-dark-bg hover:border-neon-cyan transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-neon-cyan/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

              <div className="relative z-10">
                <Icon className="w-10 h-10 text-neon-purple mb-4 group-hover:text-neon-cyan transition-colors" />
                <h3 className="text-xl font-orbitron font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
