/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { CASE_STUDIES } from "../data";
import { Briefcase, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Star, HelpCircle, Layers } from "lucide-react";

export default function CaseStudies() {
  const [expandedId, setExpandedId] = useState<string | null>("walmart-vms");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 md:p-8 text-[#e5e5e5] shadow-xl">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2 font-serif">
          <Layers className="w-5 h-5 text-[#c5a059]" /> Executive PM Case Studies
        </h2>
        <p className="text-xs text-white/50 mt-1">
          Deep-dive analysis of product challenges, strategic formulations, and measured key results
        </p>
      </div>

      <div className="space-y-6">
        {CASE_STUDIES.map((study) => {
          const isExpanded = expandedId === study.id;

          return (
            <div 
              key={study.id} 
              className={`border transition-all overflow-hidden ${
                isExpanded 
                  ? "border-[#c5a059]/40 bg-black/40 rounded-lg" 
                  : "border-white/5 bg-white/2 hover:border-[#c5a059]/30 hover:bg-white/5 rounded-lg"
              }`}
            >
              {/* Header section (click to toggle) */}
              <button
                onClick={() => toggleExpand(study.id)}
                className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4 font-sans select-none cursor-pointer"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] text-[#c5a059] font-bold tracking-[0.1em] uppercase bg-[#c5a059]/10 px-2.5 py-0.5 rounded-sm border border-[#c5a059]/20 font-mono">
                      {study.company}
                    </span>
                    <span className="text-xs text-white/40">
                      • {study.period}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-serif text-white italic">
                    {study.title}
                  </h3>
                  <p className="text-xs text-white/60 line-clamp-2 md:line-clamp-none leading-relaxed">
                    {study.summary}
                  </p>
                </div>

                <div className="p-1.5 rounded bg-white/5 text-[#c5a059] border border-white/10 shrink-0 self-center">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {/* Collapsible content with sliding visual transitions */}
              {isExpanded && (
                <div className="px-5 pb-6 md:px-6 md:pb-8 border-t border-white/5 pt-6 space-y-6 animate-fade-in">
                  
                  {/* Stats Ribbon */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-black/50 p-4 rounded border border-white/5 text-center">
                    {study.impact.map((metric, idx) => (
                      <div key={idx} className="space-y-1">
                        <p className="text-xl md:text-2xl font-bold font-serif text-[#c5a059] tracking-tight">
                          {metric.stat}
                        </p>
                        <p className="text-[9px] text-white/40 uppercase font-bold tracking-[0.15em]">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Challenge & Strategy split */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="bg-white/2 p-4 rounded border border-white/5">
                      <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 flex items-center gap-1.5 font-mono">
                        <HelpCircle className="w-3.5 h-3.5 text-white/30" /> The Challenge
                      </h4>
                      <p className="text-white/80 text-sm leading-relaxed font-sans">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="bg-white/2 p-4 rounded border border-white/5">
                      <h4 className="text-[10px] font-bold text-[#c5a059] uppercase tracking-widest mb-2 flex items-center gap-1.5 font-mono">
                        <Star className="w-3.5 h-3.5 text-[#c5a059]" /> Strategic Formulation
                      </h4>
                      <p className="text-white/80 text-sm leading-relaxed font-sans">
                        {study.strategy}
                      </p>
                    </div>
                  </div>

                  {/* Execution Timeline */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest flex items-center gap-1.5 font-mono">
                      <Briefcase className="w-3.5 h-3.5 text-[#c5a059]" /> Key Execution Benchmarks
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {study.execution.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-white/70 bg-black/20 p-3 rounded border border-white/5">
                          <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                          <p className="leading-relaxed font-sans">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {study.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 rounded-sm bg-white/5 text-white/40 text-[9px] font-mono uppercase tracking-wider border border-white/5">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-white/5" />

      {/* Career Portfolio Integrations Section */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-serif text-white italic flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-[#c5a059]" /> Career Portfolio Integrations
          </h3>
          <p className="text-[11px] text-white/50 mt-1 font-sans">
            Comprehensive productized solutions and technical deliveries spanning key global corporate roles
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Walmart Card */}
          <div className="bg-black/30 border border-white/5 rounded-lg p-5 md:p-6 hover:border-[#c5a059]/20 transition-all space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs text-white uppercase tracking-wider font-semibold">Walmart Global Tech</span>
                <span className="text-[10px] text-white/40 font-mono">• Senior Product Manager</span>
              </div>
              <span className="text-[10px] text-[#c5a059] font-mono font-bold uppercase tracking-wider bg-[#c5a059]/5 px-2 py-0.5 rounded border border-[#c5a059]/15">
                Enterprise & GenAI Era
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-black/40 border border-white/5 p-3.5 rounded space-y-1.5">
                <h5 className="font-serif italic text-white text-[13px] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></span>
                  OpenAI Chat Assistant
                </h5>
                <p className="text-white/60 leading-relaxed font-sans text-[11px]">
                  Streamlined natural language product query tooling and catalog conversational workflows.
                </p>
              </div>

              <div className="bg-black/40 border border-white/5 p-3.5 rounded space-y-1.5">
                <h5 className="font-serif italic text-white text-[13px] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></span>
                  Associate Digital Layer
                </h5>
                <p className="text-white/60 leading-relaxed font-sans text-[11px]">
                  Engineered an all-in-one corporate portal housing indoor navigations, interactive facility maps, Microsoft Graph room scheduling, real-time ticket reporting, payroll interfaces, and Workday systems.
                </p>
              </div>

              <div className="bg-black/40 border border-white/5 p-3.5 rounded space-y-1.5">
                <h5 className="font-serif italic text-white text-[13px] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></span>
                  International Visitor System
                </h5>
                <p className="text-white/60 leading-relaxed font-sans text-[11px]">
                  Rolled out GDPR/PII-compliant check-in controls across USA, Canada, Costa Rica, and India.
                </p>
              </div>

              <div className="bg-black/40 border border-white/5 p-3.5 rounded space-y-1.5">
                <h5 className="font-serif italic text-white text-[13px] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></span>
                  Post-COVID Back-to-Office
                </h5>
                <p className="text-white/60 leading-relaxed font-sans text-[11px]">
                  Built safe screening workflows and automated health checkpoints.
                </p>
              </div>

              <div className="bg-black/40 border border-white/5 p-3.5 rounded space-y-1.5 md:col-span-2">
                <h5 className="font-serif italic text-white text-[13px] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></span>
                  Material Movement Logistics
                </h5>
                <p className="text-white/60 leading-relaxed font-sans text-[11px]">
                  Designed barrier-free terminal routing mechanisms within physical facilities.
                </p>
              </div>
            </div>
          </div>

          {/* Tata Elxsi Card */}
          <div className="bg-black/30 border border-white/5 rounded-lg p-5 md:p-6 hover:border-[#c5a059]/20 transition-all space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs text-white uppercase tracking-wider font-semibold">Tata Elxsi</span>
                <span className="text-[10px] text-white/40 font-mono">• Product Manager</span>
              </div>
              <span className="text-[10px] text-[#c5a059] font-mono font-bold uppercase tracking-wider bg-[#c5a059]/5 px-2 py-0.5 rounded border border-[#c5a059]/15">
                IoT & Streaming Scale
              </span>
            </div>

            <div className="bg-black/40 border border-white/5 p-4 rounded space-y-2 text-xs">
              <h5 className="font-serif italic text-white text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></span>
                iCX Intelligent Customer Experience Platform
              </h5>
              <p className="text-white/70 leading-relaxed font-sans text-[11px]">
                Productized a high-throughput enterprise IoT analytics manager processing over 100+ stream attributes per second via Apache Kafka lines to track Set-Top Box performance globally (USA, Europe, Middle East, Asia).
              </p>
            </div>
          </div>

          {/* Wipro Card */}
          <div className="bg-black/30 border border-white/5 rounded-lg p-5 md:p-6 hover:border-[#c5a059]/20 transition-all space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs text-white uppercase tracking-wider font-semibold">Wipro</span>
                <span className="text-[10px] text-white/40 font-mono">• Associate PM / Presales / Android Dev</span>
              </div>
              <span className="text-[10px] text-[#c5a059] font-mono font-bold uppercase tracking-wider bg-[#c5a059]/5 px-2 py-0.5 rounded border border-[#c5a059]/15">
                Mobile & Telecom Foundations
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-black/40 border border-white/5 p-3.5 rounded space-y-1.5">
                <h5 className="font-serif italic text-white text-[13px] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></span>
                  Telco E-Commerce Platform
                </h5>
                <p className="text-white/60 leading-relaxed font-sans text-[11px]">
                  Deployed Distribution Management and e-commerce models across Europe and Asia.
                </p>
              </div>

              <div className="bg-black/40 border border-white/5 p-3.5 rounded space-y-1.5">
                <h5 className="font-serif italic text-white text-[13px] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></span>
                  DRIVE Logistics Hub
                </h5>
                <p className="text-white/60 leading-relaxed font-sans text-[11px]">
                  Productized real-time shipment/delivery logistics trackers for a core USA client.
                </p>
              </div>

              <div className="bg-black/40 border border-white/5 p-3.5 rounded space-y-1.5">
                <h5 className="font-serif italic text-white text-[13px] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></span>
                  US Healthcare MDM
                </h5>
                <p className="text-white/60 leading-relaxed font-sans text-[11px]">
                  Authored Mobile Device Management safety rules for device compliance.
                </p>
              </div>

              <div className="bg-black/40 border border-white/5 p-3.5 rounded space-y-1.5">
                <h5 className="font-serif italic text-white text-[13px] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></span>
                  Annual Presales Growth
                </h5>
                <p className="text-white/60 leading-relaxed font-sans text-[11px]">
                  Led mobile-design system pitches, securing $100M+ in yearly enterprise contract wins.
                </p>
              </div>

              <div className="bg-black/40 border border-white/5 p-3.5 rounded space-y-1.5 md:col-span-2">
                <h5 className="font-serif italic text-white text-[13px] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></span>
                  Android Mobile Development
                </h5>
                <p className="text-white/60 leading-relaxed font-sans text-[11px]">
                  Grounded career beginnings with solid system-level development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
