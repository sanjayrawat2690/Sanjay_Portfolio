/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MASTER_BIO, MASTER_SKILLS } from "../data";
import { Briefcase, Mail, Phone, MapPin, Linkedin, Copy, Check, Award, FileText } from "lucide-react";

export default function ExecutiveBio() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(MASTER_BIO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 md:p-8 text-[#e5e5e5] shadow-xl">
      {/* Intro row */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c5a059]/10 text-[#c5a059] rounded-sm text-xs font-bold tracking-[0.2em] uppercase border border-[#c5a059]/20">
            <Award className="w-3.5 h-3.5" /> 12+ Years Tech Senior Leadership
          </div>
          <h1 className="text-3xl md:text-5xl font-serif leading-[1.1] text-white">
            {MASTER_BIO.name}
          </h1>
          <p className="text-lg md:text-xl font-medium text-[#c5a059] tracking-tight italic font-serif">
            {MASTER_BIO.tagline}
          </p>
        </div>

        {/* Big Initials Emblem */}
        <div className="hidden md:flex items-center justify-center w-24 h-24 rounded-md bg-gradient-to-br from-[#c5a059] to-[#8e6d31] text-black font-semibold text-3xl shadow-lg shadow-gold-500/15 border border-gold-400/20 select-none font-serif italic">
          SR
        </div>
      </div>

      {/* Narrative Panel */}
      <div className="py-6 space-y-4">
        <h3 className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Executive Summary</h3>
        <p className="text-white/80 text-base leading-relaxed font-sans">
          {MASTER_BIO.elevator}
        </p>
        <p className="text-white/60 text-sm leading-relaxed italic">
          "{MASTER_BIO.summary}"
        </p>
      </div>

      {/* Meta Grid (Location, Email, Phone, Social) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-6 border-t border-b border-white/10 text-sm text-[#e5e5e5]">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-white/5 rounded-sm text-[#c5a059] border border-white/10">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] tracking-widest text-white/40 uppercase font-semibold">Location</p>
            <p className="font-semibold text-white mt-0.5">{MASTER_BIO.location}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 cursor-pointer group" onClick={copyEmailToClipboard} title="Click to copy email">
          <div className="p-2.5 bg-white/5 rounded-sm text-[#c5a059] border border-white/10 group-hover:bg-white/10 transition">
            <Mail className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] tracking-widest text-white/40 uppercase font-semibold flex items-center justify-between">
              Email 
              <span className="text-white/40 group-hover:text-[#c5a059] transition ml-2">
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </span>
            </p>
            <p className="font-semibold text-white truncate mt-0.5">{MASTER_BIO.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-white/5 rounded-sm text-[#c5a059] border border-white/10">
            <Phone className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] tracking-widest text-white/40 uppercase font-semibold">Phone</p>
            <p className="font-semibold text-white mt-0.5">{MASTER_BIO.phone}</p>
          </div>
        </div>

        <a 
          href={MASTER_BIO.linkedIn} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 group p-1.5 hover:bg-white/5 rounded-md transition-all border border-transparent hover:border-white/10"
        >
          <div className="p-2.5 bg-white/5 rounded-sm text-[#c5a059] border border-white/10 group-hover:text-black group-hover:bg-[#c5a059] transition">
            <Linkedin className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] tracking-widest text-white/40 uppercase font-semibold">Professional</p>
            <p className="font-semibold text-white group-hover:text-[#c5a059] transition flex items-center gap-1 mt-0.5">
              LinkedIn <span>↗</span>
            </p>
          </div>
        </a>
      </div>

      {/* Skill Matrix Grid */}
      <div className="pt-8 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Core Expertise Domain</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MASTER_SKILLS.map((cat, idx) => (
            <div key={idx} className="bg-white/2 p-4 rounded border border-white/5 hover:border-[#c5a059]/30 transition-all flex flex-col justify-between">
              <div>
                <h4 className="text-[#c5a059] font-serif font-bold text-sm mb-3 border-b border-white/5 pb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#c5a059] rounded-none rotate-45"></span>
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item, idy) => (
                    <span key={idy} className="px-2 py-1 bg-white/5 text-white/70 rounded-xs text-xs border border-white/5 hover:bg-white/10 hover:text-white transition">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
