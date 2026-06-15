/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { INITIAL_PRIORITIZATION_FEATURES } from "../data";
import { PrioritizationItem } from "../types";
import { Sliders, HelpCircle, AlertCircle, ArrowUpRight, CheckSquare } from "lucide-react";

export default function PriorityMatrix() {
  const [features, setFeatures] = useState<PrioritizationItem[]>(INITIAL_PRIORITIZATION_FEATURES);
  const [selectedId, setSelectedId] = useState<string>("feat-1");

  const selectedFeature = features.find((f) => f.id === selectedId) || features[0];

  const handleSliderChange = (
    field: "reach" | "impact" | "confidence" | "effort",
    value: number
  ) => {
    setFeatures((prev) =>
      prev.map((f) => {
        if (f.id === selectedId) {
          const updated = { ...f, [field]: value };
          // Calculate RICE score
          // Reach (1-10) * Impact (1-10) * Confidence (0.5 to 1.0) / Effort (1-10)
          const confMultiplier = updated.confidence / 10; // e.g. confidence slider 5-10 scales to 0.5-1.0
          const impactValue = updated.impact; // raw scale
          const reachValue = updated.reach * 1000; // scale reach to look high-impact
          
          // Custom scaled score for visual effect
          const rawScore = (reachValue * impactValue * confMultiplier) / updated.effort;
          updated.score = Math.round(rawScore / 10); // scale score for nice integer display
          return updated;
        }
        return f;
      })
    );
  };

  // Advice dynamically derived from active settings
  const getSanjayPMPerspective = () => {
    const { reach, impact, confidence, effort } = selectedFeature;
    if (effort > 7) {
      return "Sanjay's Perspective: This initiative has extremely high dev cost. Before initiating engineering, I recommend running a 2-week dual-track discovery sprint to build design mockups and validate demand patterns.";
    }
    if (confidence < 6) {
      return "Sanjay's Perspective: Our confidence metrics are shallow. Let's design structured feedback loops through survey samples or customer advisory interviews (similar to the 50+ discovery sprints done at Walmart) to raise precision.";
    }
    if (reach >= 8 && impact >= 8) {
      return "Sanjay's Perspective: A clear high-tier lever! This has high breadth of impact and deep customer depth. I would prioritize this for immediate launch inside the upcoming roadmap cycle.";
    }
    return "Sanjay's Perspective: A steady operational feature. We should execute this incrementally, using pre-validated modular widgets to limit overall technical debt.";
  };

  return (
    <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 md:p-8 text-[#e5e5e5] shadow-xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-white/5 pb-5">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2 font-serif">
            <Sliders className="w-5 h-5 text-[#c5a059]" /> Interactive Prioritization Sandbox
          </h2>
          <p className="text-xs text-white/50 mt-1">
            See how a Senior PM balances Reach, Impact, Confidence, and Effort using the RICE framework
          </p>
        </div>
        <div className="text-[10px] tracking-widest text-[#c5a059] uppercase font-mono font-bold">
          RICE Priority Framework
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Select Feature */}
        <div className="lg:col-span-5 space-y-3.5">
          <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40 font-mono">
            Select Feature Candidate
          </label>
          <div className="space-y-2.5">
            {features.map((feat) => {
              const isSelected = feat.id === selectedId;
              return (
                <button
                  key={feat.id}
                  onClick={() => setSelectedId(feat.id)}
                  className={`w-full text-left p-4 rounded border transition-all text-xs flex justify-between items-center cursor-pointer ${
                    isSelected
                      ? "bg-[#c5a059]/10 border-[#c5a059]/40 text-white shadow-md shadow-gold-500/5"
                      : "bg-black/40 border-white/5 text-white/50 hover:border-white/10 hover:bg-[#121212]"
                  }`}
                >
                  <div className="space-y-1">
                    <p className={`font-bold font-serif ${isSelected ? "text-[#c5a059]" : "text-white/80"}`}>
                      {feat.name}
                    </p>
                    <p className="text-[10px] text-white/40 truncate max-w-[200px]">
                      {feat.category} • {feat.description}
                    </p>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <p className="text-[9px] text-white/30 uppercase font-semibold">RICE Score</p>
                    <p className="text-base font-bold text-[#c5a059] font-serif">{feat.score}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Adjust parameters */}
        <div className="lg:col-span-7 bg-black/40 p-5 md:p-6 rounded border border-white/5 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex justify-between items-center pb-2 border-b border-white/5">
              <h4 className="text-[11px] uppercase tracking-wider font-extrabold text-white flex items-center gap-1.5 font-mono">
                <CheckSquare className="w-4 h-4 text-[#c5a059]" /> Adjust Parameters
              </h4>
              <span className="text-xs text-white/40 italic">Adjust sliders to recalculate score</span>
            </div>

            {/* Slider Rows */}
            <div className="space-y-5">
              {/* Reach */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-white/80 font-medium flex items-center gap-1">
                    Reach <span className="text-white/40 text-[10px]">(Total potential reach)</span>
                  </span>
                  <span className="font-serif text-[#c5a059] font-bold">{selectedFeature.reach}/10</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={selectedFeature.reach}
                  onChange={(e) => handleSliderChange("reach", parseInt(e.target.value))}
                  className="w-full accent-[#c5a059] cursor-pointer h-1 bg-white/10 rounded-sm outline-none"
                />
              </div>

              {/* Impact */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-white/80 font-medium flex items-center gap-1">
                    Impact <span className="text-white/40 text-[10px]">(User value multiplier)</span>
                  </span>
                  <span className="font-serif text-[#c5a059] font-bold">{selectedFeature.impact}/10</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={selectedFeature.impact}
                  onChange={(e) => handleSliderChange("impact", parseInt(e.target.value))}
                  className="w-full accent-[#c5a059] cursor-pointer h-1 bg-white/10 rounded-sm outline-none"
                />
              </div>

              {/* Confidence */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-white/80 font-medium flex items-center gap-1">
                    Confidence <span className="text-white/40 text-[10px]">(Data reliability %)</span>
                  </span>
                  <span className="font-serif text-[#c5a059] font-bold">{selectedFeature.confidence * 10}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="10"
                  value={selectedFeature.confidence}
                  onChange={(e) => handleSliderChange("confidence", parseInt(e.target.value))}
                  className="w-full accent-[#c5a059] cursor-pointer h-1 bg-white/10 rounded-sm outline-none"
                />
              </div>

              {/* Effort */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-white/80 font-medium flex items-center gap-1">
                    Effort <span className="text-white/40 text-[10px]">(Engineering resource time)</span>
                  </span>
                  <span className="font-serif text-[#c5a059] font-bold">{selectedFeature.effort} sprints</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={selectedFeature.effort}
                  onChange={(e) => handleSliderChange("effort", parseInt(e.target.value))}
                  className="w-full accent-[#8e6d31] cursor-pointer h-1 bg-white/10 rounded-sm outline-none"
                />
              </div>
            </div>
          </div>

          {/* Dynamic Advisory Board */}
          <div className="mt-6 pt-4 border-t border-white/5 bg-black/20 p-4 rounded flex gap-2.5 items-start">
            <AlertCircle className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-wider font-extrabold text-[#c5a059] font-mono">Expert PM Advisory Tip</p>
              <p className="text-xs text-white/70 leading-relaxed italic">{getSanjayPMPerspective()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
