/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { TrendingUp, Users, DollarSign, Zap, BarChart2, Calendar } from "lucide-react";

type MetricCategory = "scale" | "business" | "experience";

export default function InteractiveMetrics() {
  const [activeCategory, setActiveCategory] = useState<MetricCategory>("scale");
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  // Core Metrics dataset designed for interactive display
  const scaleData = [
    { label: "Wipro Platforms", year: "2018", value: 10, unit: "M Users", text: "+10 Million regional tech consumer nodes" },
    { label: "Tata Elxsi iCX", year: "2021", value: 25, unit: "M Users", text: "+25 Million enterprise & IoT device linkages" },
    { label: "Walmart VMS & AI Assistant", year: "2024", value: 40, unit: "M Users", text: "Over 40 Million combined global corporate users & visitor checks" }
  ];

  const businessData = [
    { label: "Wipro Operations", metric: "Cost Saved", percent: 20, description: "Delivered 20% operational savings for supply chains" },
    { label: "Wipro Merchant Systems", metric: "Tracking Accuracy", percent: 15, description: "Boosted dealer shipment audit accuracy by 15%" },
    { label: "Tata Elxsi iCX", metric: "Sales Productivity", percent: 40, description: "Drove 40% sales velocity increase in EMEA enterprise corridors" },
    { label: "Walmart Teams", metric: "Agile Velocity", percent: 25, description: "Increased cross-functional squad sprint completion rate by 25%" }
  ];

  const careerData = [
    { period: "2014 - 2021", company: "Wipro", focus: "APM & Tech Lead", detail: "Formulate technical structures and dealer prioritization mechanisms. Set baseline standards for regional rollout pipelines.", portfolioSize: "$100M+ supported portfolio" },
    { period: "2021 - 2022", company: "Tata Elxsi", focus: "Product Manager", detail: "Champion B2B IoT platform lifecycle and strategic product-market pricing matrix. Close EMEA agreements.", portfolioSize: "IoT Expansion" },
    { period: "2022 - Present", company: "Walmart Global Tech", focus: "Senior PM", detail: "Spearhead global automated visitor systems and client OpenAI-driven triage conversational models.", portfolioSize: "1M+ Annual Users" }
  ];

  return (
    <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 md:p-8 text-[#e5e5e5] shadow-xl flex flex-col justify-between">
      <div>
        {/* Module Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2 font-serif">
              <TrendingUp className="w-5 h-5 text-[#c5a059]" /> Executive PM Impact Metrics
            </h2>
            <p className="text-xs text-white/50 mt-1">
              Data-backed verification of Sanjay Rawat's product interventions over his career
            </p>
          </div>

          {/* Toggle Pills */}
          <div className="inline-flex p-1 bg-black rounded-md border border-white/10 text-xs self-start md:self-auto">
            <button
              onClick={() => setActiveCategory("scale")}
              className={`px-3.5 py-1.5 rounded transition font-medium cursor-pointer ${
                activeCategory === "scale" ? "bg-gradient-to-br from-[#c5a059] to-[#8e6d31] text-black font-semibold" : "text-white/50 hover:text-white"
              }`}
            >
              User Reach Scale
            </button>
            <button
              onClick={() => setActiveCategory("business")}
              className={`px-3.5 py-1.5 rounded transition font-medium cursor-pointer ${
                activeCategory === "business" ? "bg-gradient-to-br from-[#c5a059] to-[#8e6d31] text-black font-semibold" : "text-white/50 hover:text-white"
              }`}
            >
              Efficiency gains (%)
            </button>
            <button
              onClick={() => setActiveCategory("experience")}
              className={`px-3.5 py-1.5 rounded transition font-medium cursor-pointer ${
                activeCategory === "experience" ? "bg-gradient-to-br from-[#c5a059] to-[#8e6d31] text-black font-semibold" : "text-white/50 hover:text-white"
              }`}
            >
              Career Focus Timeline
            </button>
          </div>
        </div>

        {/* Content Screens */}
        <div className="min-h-[250px] flex items-center justify-center">
          {activeCategory === "scale" && (
            <div className="w-full space-y-6">
              <p className="text-sm text-white/75">
                Sanjay has architected backend architectures and visual products that scaled progressively over a decade.
              </p>

              {/* Custom SVG line/area indicator */}
              <div className="relative pt-4 pb-2 bg-black/40 p-4 rounded-lg border border-white/5">
                <div className="flex justify-between text-[10px] text-white/40 tracking-wider mb-2">
                  <span>Start (Android / Wipro)</span>
                  <span>Expansion (IoT / Tata)</span>
                  <span>Enterprise (Conversational AI / Walmart)</span>
                </div>

                <div className="h-16 w-full relative flex items-center justify-between px-6">
                  {/* Backdrop line */}
                  <div className="absolute left-6 right-6 h-[1px] bg-white/10 top-1/2 -translate-y-1/2 z-0"></div>
                  {/* Gold progress line */}
                  <div className="absolute left-6 h-[1px] bg-gradient-to-r from-[#c5a059] to-[#8e6d31] top-1/2 -translate-y-1/2 z-0" style={{ width: "80%" }}></div>

                  {scaleData.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative z-10 flex flex-col items-center group cursor-pointer"
                      onMouseEnter={() => setHoveredPoint(item.label)}
                      onMouseLeave={() => setHoveredPoint(null)}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center ${
                        hoveredPoint === item.label 
                          ? "bg-[#c5a059] border-white scale-125 shadow-lg shadow-[#c5a059]/50" 
                          : "bg-black border-[#c5a059]"
                      }`}>
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                      <span className="text-sm font-extrabold mt-1.5 text-[#c5a059] font-serif">{item.value}{item.unit}</span>
                      <span className="text-[10px] text-white/40 tracking-wider uppercase font-medium">{item.year}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Explanatory Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {scaleData.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`p-4 rounded border transition ${
                      hoveredPoint === item.label 
                        ? "bg-[#c5a059]/10 border-[#c5a059]/30 text-white" 
                        : "bg-white/2 border-white/5 text-white/70"
                    }`}
                  >
                    <p className="text-xs text-white/50 font-bold flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#c5a059]" /> {item.label}
                    </p>
                    <p className="text-2xl font-serif text-[#c5a059] mt-2 mb-1">{item.value}{item.unit}</p>
                    <p className="text-[11px] text-white/60 leading-normal">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCategory === "business" && (
            <div className="w-full space-y-6">
              <p className="text-sm text-white/75">
                True PM mastery lies in commercial efficiency. Below are the quantitative business optimizations scored on each portfolio anchor.
              </p>

              {/* Custom Bar Graphs with SVG columns */}
              <div className="space-y-4">
                {businessData.map((item, idx) => (
                  <div key={idx} className="space-y-2 group cursor-pointer p-3 hover:bg-white/5 rounded transition border border-transparent hover:border-white/5">
                    <div className="flex justify-between text-xs">
                      <span className="font-bold text-white/80 group-hover:text-[#c5a059] transition">{item.label} — <span className="text-white/40 font-normal">{item.metric}</span></span>
                      <span className="font-extrabold text-[#c5a059] font-serif">+{item.percent}%</span>
                    </div>
                    {/* Bar Tracker */}
                    <div className="w-full h-2.5 bg-black rounded-none overflow-hidden border border-white/5">
                      <div 
                        className="h-full bg-gradient-to-r from-[#c5a059] to-[#8e6d31] transition-all duration-1000 ease-out"
                        style={{ width: `${item.percent * 2}%` }} // Scale nicely
                      ></div>
                    </div>
                    <p className="text-[11px] text-white/50 pl-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCategory === "experience" && (
            <div className="w-full space-y-4">
              <p className="text-sm text-white/75 mb-2">
                Over 12 years of progression from technical execution (Wipro developer) to strategic global execution (Walmart lead).
              </p>

              <div className="relative border-l border-white/10 pl-5 space-y-6">
                {careerData.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Node Dot */}
                    <div className="absolute -left-[25px] top-1.5 w-2 h-2 rounded bg-[#c5a059] ring-4 ring-[#0a0a0a] group-hover:scale-125 transition"></div>
                    
                    <div className="flex justify-between items-baseline gap-2">
                      <h4 className="text-sm font-bold text-white group-hover:text-[#c5a059] transition font-serif">
                        {item.focus} <span className="text-xs text-white/40 font-normal font-mono">@ {item.company}</span>
                      </h4>
                      <span className="text-xs text-[#c5a059] font-mono font-medium shrink-0">{item.period}</span>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed mt-1">{item.detail}</p>
                    <div className="inline-block mt-2 text-[9px] tracking-wider text-[#c5a059] bg-[#c5a059]/10 px-2 py-0.5 rounded-sm border border-[#c5a059]/20 font-semibold uppercase">
                      {item.portfolioSize}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Trust Quote */}
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-white/50 italic leading-relaxed">
        <Zap className="w-4 h-4 text-[#c5a059] shrink-0" />
        "Sanjay's unique PM formula couples high-scale analytical GTM launches with close developer partnerships to optimize core operations."
      </div>
    </div>
  );
}
