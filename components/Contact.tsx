"use client";

import Section from "./ui/Section";
import { portfolioData } from "@/data/portfolio";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" title="CONTACT ME">
      <div className="grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="space-y-8">
          <p className="text-gray-400">
            Ready to start a new project or just want to say hello? Initialize a communication channel below.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="p-3 border border-dark-border bg-dark-bg group-hover:border-neon-cyan transition-colors">
                <MapPin className="text-neon-purple group-hover:text-neon-cyan" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-500 font-orbitron">LOCATION_DATA</h4>
                <p className="text-white">{portfolioData.personal.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 border border-dark-border bg-dark-bg group-hover:border-neon-cyan transition-colors">
                <Mail className="text-neon-purple group-hover:text-neon-cyan" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-500 font-orbitron">EMAIL_UPLINK</h4>
                <a href={`mailto:${portfolioData.personal.email}`} className="text-white hover:text-neon-cyan transition-colors">
                  {portfolioData.personal.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 border border-dark-border bg-dark-bg group-hover:border-neon-cyan transition-colors">
                <Phone className="text-neon-purple group-hover:text-neon-cyan" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-500 font-orbitron">VOICE_Comms</h4>
                <a href={`tel:${portfolioData.personal.phone}`} className="text-white hover:text-neon-cyan transition-colors">
                  {portfolioData.personal.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs text-neon-cyan font-mono ml-1">FIRST_NAME</label>
              <input
                type="text"
                className="w-full bg-dark-bg border border-dark-border p-3 text-white focus:border-neon-cyan focus:outline-none focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all"
                placeholder="Enter data..."
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-neon-cyan font-mono ml-1">LAST_NAME</label>
              <input
                type="text"
                className="w-full bg-dark-bg border border-dark-border p-3 text-white focus:border-neon-cyan focus:outline-none focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all"
                placeholder="Enter data..."
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-neon-cyan font-mono ml-1">EMAIL_ADDRESS</label>
            <input
              type="email"
              className="w-full bg-dark-bg border border-dark-border p-3 text-white focus:border-neon-cyan focus:outline-none focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all"
              placeholder="name@example.com"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-neon-cyan font-mono ml-1">MESSAGE_CONTENT</label>
            <textarea
              rows={5}
              className="w-full bg-dark-bg border border-dark-border p-3 text-white focus:border-neon-cyan focus:outline-none focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all"
              placeholder="Transmit your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-neon-purple/20 border border-neon-purple text-white font-bold tracking-widest hover:bg-neon-purple hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Send size={18} /> TRANSMIT_DATA
          </button>
        </form>

      </div>
    </Section>
  );
}
