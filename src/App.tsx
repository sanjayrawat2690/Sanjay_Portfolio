/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import ExecutiveBio from "./components/ExecutiveBio";
import InteractiveMetrics from "./components/InteractiveMetrics";
import CaseStudies from "./components/CaseStudies";
import PriorityMatrix from "./components/PriorityMatrix";
import SanjayChat from "./components/SanjayChat";
import ContactForm from "./components/ContactForm";
import { CERTIFICATIONS, EDUCATION } from "./data";
import { 
  Terminal, 
  Layers, 
  Sliders, 
  MessageSquare, 
  Mail, 
  LayoutDashboard, 
  Award, 
  Brain, 
  Briefcase, 
  Activity,
  Menu,
  X,
  Zap,
  ArrowRight
} from "lucide-react";

type ActiveTab = "overview" | "case-studies" | "sandbox" | "chat";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateToTab = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-dark-brand-950 text-[#e5e5e5] flex flex-col font-sans">
      
      {/* Premium Header/Nav */}
      <header className="sticky top-0 z-40 bg-dark-brand-900/90 backdrop-blur-md border-b border-white/10 px-4 md:px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Portfolio Label */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-[#c5a059] to-[#8e6d31] flex items-center justify-center shadow-lg shadow-gold-500/15 border border-gold-400/20">
              <Brain className="w-4.5 h-4.5 text-black" />
            </div>
            <div>
              <p className="font-bold text-white tracking-widest text-xs uppercase font-serif-luxury">Sanjay Rawat</p>
              <p className="text-[9px] text-[#c5a059] font-semibold tracking-[0.2em] uppercase">Senior PM Executive</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 bg-dark-brand-850/80 p-1 rounded-lg border border-white/10">
            <button
              onClick={() => navigateToTab("overview")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded text-xs tracking-widest uppercase font-semibold transition cursor-pointer select-none ${
                activeTab === "overview" 
                  ? "bg-gradient-to-br from-[#c5a059] to-[#8e6d31] text-black font-bold shadow-md shadow-gold-600/20" 
                  : "text-white/60 hover:text-white"
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" /> Overview
            </button>
            <button
              onClick={() => navigateToTab("case-studies")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded text-xs tracking-widest uppercase font-semibold transition cursor-pointer select-none ${
                activeTab === "case-studies" 
                  ? "bg-gradient-to-br from-[#c5a059] to-[#8e6d31] text-black font-bold shadow-md shadow-gold-600/20" 
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" /> Case Studies
            </button>
            <button
              onClick={() => navigateToTab("sandbox")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded text-xs tracking-widest uppercase font-semibold transition cursor-pointer select-none ${
                activeTab === "sandbox" 
                  ? "bg-gradient-to-br from-[#c5a059] to-[#8e6d31] text-black font-bold shadow-md shadow-gold-600/20" 
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Sliders className="w-3.5 h-3.5" /> PM Sandbox
            </button>
            <button
              onClick={() => navigateToTab("chat")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded text-xs tracking-widest uppercase font-semibold transition cursor-pointer select-none relative ${
                activeTab === "chat" 
                  ? "bg-gradient-to-br from-[#c5a059] to-[#8e6d31] text-black font-bold shadow-md shadow-gold-600/20" 
                  : "text-white/60 hover:text-white"
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" /> Ask Sanjay AI
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping"></span>
            </button>
          </nav>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-dark-brand-900 border-t border-white/10 mt-4 py-4 space-y-2 animate-fade-in px-2">
            <button
              onClick={() => navigateToTab("overview")}
              className={`flex items-center gap-3 w-full px-4 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition ${
                activeTab === "overview" ? "bg-[#c5a059]/10 text-[#c5a059] font-bold" : "text-white/60 hover:text-white"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" /> Portfolio Overview
            </button>
            <button
              onClick={() => navigateToTab("case-studies")}
              className={`flex items-center gap-3 w-full px-4 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition ${
                activeTab === "case-studies" ? "bg-[#c5a059]/10 text-[#c5a059] font-bold" : "text-white/60 hover:text-white"
              }`}
            >
              <Layers className="w-4 h-4" /> PM Case Studies
            </button>
            <button
              onClick={() => navigateToTab("sandbox")}
              className={`flex items-center gap-3 w-full px-4 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition ${
                activeTab === "sandbox" ? "bg-[#c5a059]/10 text-[#c5a059] font-bold" : "text-white/60 hover:text-white"
              }`}
            >
              <Sliders className="w-4 h-4" /> Interactive PM Sandbox
            </button>
            <button
              onClick={() => navigateToTab("chat")}
              className={`flex items-center gap-3 w-full px-4 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition ${
                activeTab === "chat" ? "bg-[#c5a059]/10 text-[#c5a059] font-bold" : "text-white/60 hover:text-white"
              }`}
            >
              <MessageSquare className="w-4 h-4" /> Chat with Sanjay's AI
            </button>
          </div>
        )}
      </header>

      {/* Main Core View Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-8">
        
        {/* Dynamic active screen router with rendering transitions */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-fade-in">
            {/* Executive Bio Segment */}
            <ExecutiveBio />

            {/* Middle Grid: Interactive Metrics & Dynamic Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                <InteractiveMetrics />
              </div>

              {/* Sidebar stats/credentials */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Certifications Card */}
                <div className="bg-dark-brand-900 border border-white/10 rounded-xl p-5 md:p-6 text-[#e5e5e5] shadow-xl">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white border-b border-white/5 pb-3 mb-4 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#c5a059]" /> Executive Credentials
                  </h3>
                  <div className="space-y-4">
                    {CERTIFICATIONS.map((cert, idx) => (
                      <div key={idx} className="flex gap-3.5 items-start">
                        <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-[#c5a059]/20 to-[#8e6d31]/20 flex items-center justify-center shrink-0 border border-[#c5a059]/30 text-[#c5a059] font-bold text-xs select-none">
                          ✓
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white font-serif">{cert.name}</p>
                          <p className="text-[10px] text-white/50">{cert.issuer} {cert.credentialId ? `| ID: ${cert.credentialId}` : ""}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Foundations */}
                <div className="bg-dark-brand-900 border border-white/10 rounded-xl p-5 md:p-6 text-[#e5e5e5] shadow-xl">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white border-b border-white/5 pb-3 mb-4 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#c5a059]" /> Academic Foundations
                  </h3>
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-white font-serif leading-snug">{EDUCATION.institution}</p>
                    <div className="text-[11px] text-white/60 space-y-0.5">
                      <p className="text-[#c5a059] font-medium">{EDUCATION.degree}</p>
                      <p>{EDUCATION.specialization}</p>
                      <p className="text-white/40 font-mono text-[10px]">{EDUCATION.period}</p>
                    </div>
                  </div>
                </div>

                {/* AI Interactive CTA Card */}
                <div className="bg-gradient-to-br from-dark-brand-900 via-dark-brand-900 to-gold-950 border border-white/10 rounded-xl p-5 md:p-6 text-[#e5e5e5] shadow-xl flex flex-col justify-between h-[170px] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/5 rounded-full blur-3xl group-hover:bg-[#c5a059]/10 transition"></div>
                  <div>
                    <h3 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#c5a059] flex items-center gap-1.5 font-mono">
                      <Brain className="w-3.5 h-3.5" /> Interactive Agent
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed mt-2">
                      Discuss strategic priorities, framework formulations, or team operations with Sanjay's fully grounded AI proxy.
                    </p>
                  </div>
                  <button
                    onClick={() => navigateToTab("chat")}
                    className="text-[10px] font-bold uppercase tracking-widest bg-gradient-to-br from-[#c5a059] to-[#8e6d31] text-black px-4 py-2 rounded transition self-start flex items-center gap-1.5 mt-3 shadow-md shadow-gold-500/10 cursor-pointer"
                  >
                    Initiate Chat Session <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

        {activeTab === "case-studies" && (
          <div className="space-y-8 animate-fade-in">
            <CaseStudies />
          </div>
        )}

        {activeTab === "sandbox" && (
          <div className="space-y-8 animate-fade-in">
            <PriorityMatrix />
          </div>
        )}

        {activeTab === "chat" && (
          <div className="space-y-8 animate-fade-in">
            <SanjayChat />
          </div>
        )}

      </main>

      {/* Footer copyright banner */}
      <footer className="bg-dark-brand-950 border-t border-white/10 py-10 px-4 text-center text-white/40 text-[11px] tracking-wider">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-sans select-none">
          <p>© 2026 Sanjay Rawat Portfolio. Handcrafted under Sophisticated Dark design guidelines.</p>
          <div className="flex items-center gap-6 text-[9px] uppercase tracking-[0.2em] font-semibold">
            <button onClick={() => navigateToTab("overview")} className="hover:text-[#c5a059] transition cursor-pointer">Overview</button>
            <button onClick={() => navigateToTab("case-studies")} className="hover:text-[#c5a059] transition cursor-pointer">Case Studies</button>
            <button onClick={() => navigateToTab("sandbox")} className="hover:text-[#c5a059] transition cursor-pointer">PM Sandbox</button>
            <button onClick={() => navigateToTab("chat")} className="hover:text-[#c5a059] transition cursor-pointer">AI Chat</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
