/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { ChatMessage } from "../types";
import { Send, Bot, User, Trash2, ArrowRight, HelpCircle, Loader, MessageSquare } from "lucide-react";

export default function SanjayChat() {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const saved = localStorage.getItem("sanjay_portfolio_chat");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback
      }
    }
    return [
      {
        id: "welcome",
        role: "model",
        text: "Hello! I am Sanjay Rawat's AI Representative, powered by Gemini. Ask me any questions about Sanjay's product strategies, metrics, leadership challenges at Walmart and Tata Elxsi, or technical foundations. I am grounded directly in his actual career portfolio!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
  });

  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("sanjay_portfolio_chat", JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isLoading) return;

    const userMsg: ChatMessage = {
      id: `m-usr-${Date.now()}`,
      role: "user",
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            text: m.text
          }))
        })
      });

      if (!response.ok) {
        throw new Error("Chat service was unable to formulate a response.");
      }

      const data = await response.json();
      const modelMsg: ChatMessage = {
        id: `m-mod-${Date.now()}`,
        role: "model",
        text: data.text || "I was unable to retrieve a response. Please verify parameters or retry.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, modelMsg]);
    } catch (error) {
      const errMsg: ChatMessage = {
        id: `m-err-${Date.now()}`,
        role: "model",
        text: "My apologies. I encountered a pipeline error while trying to process this request. Feel free to configure the GEMINI_API_KEY inside AI Studio Secrets, or click one of the pre-set discovery buttons below to check local profiles!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChatLogs = () => {
    if (window.confirm("Do you want to clear your conversation history with Sanjay's AI?")) {
      const reset = [
        {
          id: "welcome",
          role: "model",
          text: "Hello! I am Sanjay Rawat's AI Representative, powered by Gemini. Ask me any questions about Sanjay's product alignment, agile achievements, or GTM campaigns.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ];
      setMessages(reset);
      localStorage.removeItem("sanjay_portfolio_chat");
    }
  };

  const SUGGESTED_QUESTIONS = [
    "Tell me about Sanjay's Walmart AI initiatives",
    "What is his experience with B2B SaaS?",
    "How does his engineering background help him?",
    "Does he have experience scaling global rollouts?"
  ];

  return (
    <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 md:p-8 text-[#e5e5e5] shadow-xl flex flex-col justify-between h-[650px]">
      {/* Top bar header */}
      <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4 select-none">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#c5a059] to-[#8e6d31] flex items-center justify-center text-black font-bold border border-[#c5a059]/30">
            <Bot className="w-5 h-5 text-black" />
          </div>
          <div>
            <h3 className="text-sm font-extrabold text-[#e5e5e5] flex items-center gap-1.5 font-serif">
              Sanjay's AI Representative <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse"></span>
            </h3>
            <p className="text-[10px] text-white/40 font-medium">Grounded in verified experience & metrics</p>
          </div>
        </div>

        <button
          onClick={clearChatLogs}
          title="Clear Conversation"
          className="p-2 text-white/30 hover:text-rose-450 hover:bg-white/5 rounded transition cursor-pointer"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Message window */}
      <div className="flex-1 overflow-y-auto px-1 py-1 space-y-4 mb-4 scrollbar-thin scrollbar-thumb-white/10">
        {messages.map((m) => {
          const isUser = m.role === "user";
          return (
            <div key={m.id} className={`flex gap-3 max-w-[85%] ${isUser ? "ml-auto flex-row-reverse" : "mr-auto"}`}>
              {/* Icon */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${
                isUser ? "bg-[#181818] border-white/10" : "bg-[#c5a059]/10 border-[#c5a059]/20"
              }`}>
                {isUser ? <User className="w-4 h-4 text-white/50" /> : <Bot className="w-4 h-4 text-[#c5a059]" />}
              </div>

              {/* Bubble */}
              <div className="space-y-1">
                <div className={`p-3.5 rounded-xl text-xs md:text-sm leading-relaxed ${
                  isUser 
                    ? "bg-gradient-to-br from-[#c5a059] to-[#8e6d31] text-black font-semibold rounded-tr-none font-serif italic" 
                    : "bg-[#030303] text-white/80 border border-white/5 rounded-tl-none font-sans"
                }`}>
                  <p className="whitespace-pre-line">{m.text}</p>
                </div>
                <p className={`text-[9px] text-white/35 font-mono ${isUser ? "text-right" : "text-left"}`}>
                  {m.timestamp}
                </p>
              </div>
            </div>
          );
        })}
        {isLoading && (
          <div className="flex gap-3 max-w-[85%] mr-auto">
            <div className="w-8 h-8 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/20 flex items-center justify-center shrink-0">
              <Loader className="w-4 h-4 text-[#c5a059] animate-spin" />
            </div>
            <div className="bg-[#030303] border border-white/5 p-4 rounded-xl rounded-tl-none max-w-full text-xs text-white/50 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-[#c5a059] rounded-full animate-bounce"></span>
              <span className="inline-block w-1.5 h-1.5 bg-[#c5a059] rounded-full animate-bounce delay-100"></span>
              <span className="inline-block w-1.5 h-1.5 bg-[#c5a059] rounded-full animate-bounce delay-200"></span>
              Thinking about Sanjay's product methodologies...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested prompts / Questions buttons */}
      <div className="border-t border-white/5 pt-4 mt-auto">
        <p className="text-[10px] text-white/40 font-semibold uppercase tracking-wider mb-2.5 flex items-center gap-1 font-mono">
          <HelpCircle className="w-3.5 h-3.5 text-[#c5a059]" /> Quick Discovery Prompts
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3.5">
          {SUGGESTED_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              disabled={isLoading}
              className="text-[10px] bg-black/40 border border-white/5 hover:border-[#c5a059]/20 hover:text-white text-white/55 px-3 py-1.5 rounded transition text-left cursor-pointer disabled:opacity-40 uppercase tracking-wider font-mono font-bold"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input box */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage(inputMessage);
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            disabled={isLoading}
            placeholder="Ask anything about Sanjay Rawat's PM value alignment..."
            className="flex-1 bg-black/40 border border-white/5 rounded px-4 py-2 text-xs md:text-sm text-white placeholder-white/20 outline-none focus:border-[#c5a059]/40 focus:ring-1 focus:ring-[#c5a059]/10 transition disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!inputMessage.trim() || isLoading}
            className="bg-gradient-to-br from-[#c5a059] to-[#8e6d31] hover:opacity-95 text-black font-bold p-3 rounded transition cursor-pointer disabled:opacity-30 flex items-center justify-center shrink-0"
          >
            <Send className="w-4 h-4 text-black" />
          </button>
        </form>
      </div>
    </div>
  );
}
