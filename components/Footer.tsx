"use client";

import { portfolioData } from "@/data/portfolio";
import { Github, Instagram, Twitter, Facebook, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  instagram: Instagram,
  twitter: Twitter,
  facebook: Facebook,
};

export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-bg py-10 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50" />

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-orbitron font-bold text-white">KELVIN TRIANSYAH</h3>
          <p className="text-sm text-gray-500 mt-1">
            &copy; {new Date().getFullYear()} All Systems Operational.
          </p>
        </div>

        <div className="flex gap-4">
          {Object.entries(portfolioData.personal.socials).map(([key, url]) => {
            const Icon = iconMap[key] || Github;
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-dark-border flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan transition-all duration-300 rounded-sm"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
