/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { RecruiterInquiry } from "../types";
import { Send, CheckCircle, Clock, Trash2, Calendar, Mail, Building, User, FileText, CheckSquare } from "lucide-react";

export default function ContactForm() {
  const [inquiries, setInquiries] = useState<RecruiterInquiry[]>(() => {
    const saved = localStorage.getItem("sanjay_portfolio_inquiries");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback
      }
    }
    return [];
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    type: "Schedule Interview",
    message: ""
  });

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem("sanjay_portfolio_inquiries", JSON.stringify(inquiries));
  }, [inquiries]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const newInquiry: RecruiterInquiry = {
      id: `inq-${Date.now()}`,
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim() || "Independent",
      type: formData.type,
      message: formData.message.trim(),
      timestamp: new Date().toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    setInquiries((prev) => [newInquiry, ...prev]);
    setFormData({
      name: "",
      email: "",
      company: "",
      type: "Schedule Interview",
      message: ""
    });

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const removeInquiry = (id: string) => {
    setInquiries((prev) => prev.filter((inq) => inq.id !== id));
  };

  const INQUIRY_TYPES = [
    "Schedule Interview",
    "Request PDF Resume",
    "B2B Consulting Discussion",
    "General Discussion / Project Sync"
  ];

  return (
    <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 md:p-8 text-[#e5e5e5] shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Form Container (Left) */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2 font-serif">
              <Mail className="w-5 h-5 text-[#c5a059]" /> Executive Inquiry Portal
            </h2>
            <p className="text-xs text-white/50 mt-1">
              Submit your inquiry below. Requests are maintained securely in your browser's local sandbox storage
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
            {/* Name */}
            <div className="space-y-1">
              <label className="text-white/50 font-bold uppercase tracking-wider flex items-center gap-1.5 font-mono text-[10px]">
                <User className="w-3.5 h-3.5" /> Your Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Sarah Jenkins"
                className="w-full bg-black/40 border border-white/5 rounded-md px-4 py-3 text-white placeholder-white/20 outline-none focus:border-[#c5a059]/40 transition"
              />
            </div>

            {/* Email & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-white/50 font-bold uppercase tracking-wider flex items-center gap-1.5 font-mono text-[10px]">
                  <Mail className="w-3.5 h-3.5" /> Work Email <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. sjenkins@corporation.com"
                  className="w-full bg-black/40 border border-white/5 rounded-md px-4 py-3 text-white placeholder-white/20 outline-none focus:border-[#c5a059]/40 transition"
                />
              </div>

              <div className="space-y-1">
                <label className="text-white/50 font-bold uppercase tracking-wider flex items-center gap-1.5 font-mono text-[10px]">
                  <Building className="w-3.5 h-3.5" /> Company / Organization
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Walmart, Tata, Google"
                  className="w-full bg-black/40 border border-white/5 rounded-md px-4 py-3 text-white placeholder-white/20 outline-none focus:border-[#c5a059]/40 transition"
                />
              </div>
            </div>

            {/* Inquiry Reason */}
            <div className="space-y-1">
              <label className="text-white/50 font-bold uppercase tracking-wider flex items-center gap-1.5 font-mono text-[10px]">
                <CheckSquare className="w-3.5 h-3.5" /> Inquiry Objective
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full bg-black/40 border border-white/5 rounded-md px-4 py-3 text-white outline-none focus:border-[#c5a059]/40 transition cursor-pointer"
              >
                {INQUIRY_TYPES.map((type, idx) => (
                  <option key={idx} value={type} className="bg-neutral-950 text-white">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Custom Notes */}
            <div className="space-y-1">
              <label className="text-white/50 font-bold uppercase tracking-wider flex items-center gap-1.5 font-mono text-[10px]">
                <FileText className="w-3.5 h-3.5" /> Inquiry Specifications <span className="text-rose-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Give details about your team objectives, target role scope, or consulting challenges..."
                className="w-full bg-black/40 border border-white/5 rounded-md px-4 py-3 text-white placeholder-white/20 outline-none focus:border-[#c5a059]/40 transition resize-none"
              />
            </div>

            {/* Success Prompt */}
            {showSuccess && (
              <div className="bg-[#c5a059]/10 border border-[#c5a059]/20 text-[#c5a059] p-3 rounded-md text-xs flex items-center gap-2 animate-fade-in">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Inquiry saved successfully! Sanjay Rawat's representative has logged this request in browser local sandbox.</span>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={!formData.name || !formData.email || !formData.message}
              className="w-full bg-gradient-to-br from-[#c5a059] to-[#8e6d31] hover:opacity-90 text-black font-semibold py-3 px-4 rounded transition cursor-pointer disabled:opacity-40 flex items-center justify-center gap-2 text-sm uppercase tracking-wider font-serif"
            >
              <Send className="w-4 h-4" /> Transit Inquiry Securely
            </button>
          </form>
        </div>

        {/* Saved Session Triggers (Right) */}
        <div className="lg:col-span-5 bg-black/40 p-5 md:p-6 rounded border border-white/5 flex flex-col">
          <div className="flex items-center gap-2 border-b border-white/5 pb-3 mb-4 select-none">
            <Clock className="w-4 h-4 text-[#c5a059]" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Session Workspace Logs</h4>
              <p className="text-[9px] text-white/40 font-medium">Inquiries you submitted in this browser thread</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto max-h-[350px] space-y-3.5 scrollbar-thin scrollbar-thumb-white/10">
            {inquiries.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-2.5">
                <Mail className="w-7 h-7 text-white/10" />
                <p className="text-xs text-white/40">No logs submitted yet</p>
                <p className="text-[10px] text-white/30 max-w-[200px] leading-relaxed">
                  Your submitted inquiries will populate here instantaneously for audit compliance.
                </p>
              </div>
            ) : (
              inquiries.map((inq) => (
                <div key={inq.id} className="p-3.5 bg-black/30 border border-white/5 rounded relative group">
                  <button
                    onClick={() => removeInquiry(inq.id)}
                    className="absolute top-2.5 right-2.5 text-white/30 hover:text-rose-450 opacity-60 group-hover:opacity-100 transition cursor-pointer"
                    title="Remove inquiry"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>

                  <div className="space-y-1 pr-6 text-[11px] font-sans">
                    <div className="flex items-center gap-1.5 text-[#c5a059] font-serif font-bold">
                      <span className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></span>
                      {inq.name}
                    </div>
                    <p className="text-white/60 font-medium">{inq.company} • <span className="text-white/40 text-[10px] font-normal font-mono">{inq.email}</span></p>
                    <p className="text-[10px] text-[#c5a059]/80 font-mono tracking-wide">{inq.type}</p>
                    <p className="text-white/70 italic text-[10px] bg-black/40 p-2.5 rounded mt-2 border border-white/5 leading-relaxed">
                      "{inq.message}"
                    </p>
                    <p className="text-[9px] text-white/30 font-mono text-right mt-1 font-semibold">{inq.timestamp}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
