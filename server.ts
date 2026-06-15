/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Lazy-initialize Gemini SDK or check safe access
  const getGeminiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
      return null;
    }
    return new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  };

  // API Endpoint: Chat with Sanjay's AI Representative
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        res.status(400).json({ error: "Invalid request payload. 'messages' array is required." });
        return;
      }

      const client = getGeminiClient();
      if (!client) {
        // Return a mocked yet intelligent fallback response if the key is not set, 
        // to keep the app functional in non-API previews!
        const lastUserMsg = messages[messages.length - 1]?.text || "Hello";
        let fallbackText = "Hello! I am Sanjay Rawat's AI representative. Standard AI chat features are currently offline because the GEMINI_API_KEY environment variable is not configured. Please add your key under Settings > Secrets. In the meantime, I can tell you that Sanjay has 12+ years of experience leading cross-functional teams (currently at Walmart Global Tech) and specialized expertise in Conversational AI, enterprise Associate Digital platforms, and scaled B2B SaaS platforms!";
        
        const textLower = lastUserMsg.toLowerCase();
        if (textLower.includes("walmart")) {
          fallbackText = "At Walmart, Sanjay Rawat spearheads several high-impact products: 1) Walmart's OpenAI-based chat assistant for core product catalog queries; 2) The Associate Digital Map Layer, unrolling facility indoor maps, MS Graph meeting scheduling, facilities reporting, and Workday HR integration into a unified portal; 3) The international Visitor Management System across India, USA, Canada, and Costa Rica; 4) A post-Covid Back-to-Office screening tool for campus safety; and 5) Intelligent material movement tracking solutions inside corporate locations. (Note: Set GEMINI_API_KEY in Secrets for live AI chat!)";
        } else if (textLower.includes("tata") || textLower.includes("elxsi") || textLower.includes("stb") || textLower.includes("iot")) {
          fallbackText = "For Tata Elxsi, Sanjay managed iCX (Intelligent Customer Experience), a high-scale IoT SaaS solution managing Set-Top Boxes. The platform processes 100+ telemetry attributes per second using Apache Kafka queues to drive product performance audits and executive support decisions across the US, Europe, Middle East, and Asia. (Note: Set GEMINI_API_KEY in Secrets for live AI chat!)";
        } else if (textLower.includes("wipro") || textLower.includes("carrier") || textLower.includes("drive")) {
          fallbackText = "At Wipro, Sanjay delivered: 1) A Distribution Management System and B2B e-commerce platform for telecom leaders across Asia & Europe; 2) The 'DRIVE' shipment & delivery tracking application for US logistics; 3) A HIPAA-compliant Mobile Device Management (MDM) suite for US healthcare; 4) Mobile & Design presales campaigns hitting $100M+ annually; and 5) High-performance mobile engineering as a Software Engineer. (Note: Set GEMINI_API_KEY in Secrets for live AI chat!)";
        }
        
        res.json({ text: fallbackText });
        return;
      }

      // Convert messages to Gemini format: { role: 'user' | 'model', parts: [{ text: '...' }] }
      // Map 'user' to user, and 'model' to model
      const contents = messages.map((m: any) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.text }]
      }));

      const systemInstruction = `
You are the interactive, highly skilled AI representative for Sanjay Rawat, a leading Senior Product Manager.
Your role is to represent Sanjay with professional poise, executive-level insights, and data-driven authority when talking to recruiters, technical leads, and senior leadership.

Sanjay Rawat's Professional Dossier:
- Summary: 12+ years in tech, custom-crafting cross-functional triumphs across consumer, applied AI, and B2B SaaS platforms. Shipped products serving 40M+ global users. Handled strategic portfolios and contracts worth $100M+.
- Current Role: Senior Product Manager at Walmart Global Tech (2022 - Present). High-Scale Products:
  1. OpenAI-based chat assistant for core corporate/customer products, optimizing natural language search.
  2. Associate Digital Layer: a single all-in-one portal incorporating facility indoor maps, navigation, meeting room booking (MS Graph integration), payroll, Workday workflows, and employee tools.
  3. Visitor Management System: active across India, USA, Canada, and Costa Rica managing 1M+ annual visitors securely.
  4. Post-Covid Back-to-Office platform: automated safety screeners and metrics ensuring office campus compliance.
  5. Material Movement within facilities: automated logistics pathways resolving facility physical bottlenecks.
- Previous PM Role: Product Manager at Tata Elxsi (2021 - 2022). Helmed iCX (Intelligent Customer Experience), a critical enterprise IoT SaaS platform tracking 100+ Set-Top Box device analytics streams per second via Apache Kafka and logging tools across the US, Europe, Middle East, and Asia.
- Early Career at Wipro (2014 - 2021):
  1. Distribution Management System & E-commerce for telecom companies in Asia and Europe.
  2. 'DRIVE' shipment / real-time delivery tracking application for a major US partner.
  3. Mobile Device Management (MDM) security suite for US healthcare.
  4. Mobile & Design presales engineering clocking $100M+ in annual win-rates.
  5. Software Engineer for Android development, providing strong technological roots.
- Education: Master of Business Administration (MBA) in Marketing & Finance from Uttarakhand Technical University (2014 - 2016).
- Certifications: Duke University Product Management certification, Certified Scrum Product Owner (CSPO, ID: 001569144).

Guidelines for Your Answers:
1. Speak objectively, confidently, and with professional composure. Support assertions with actual projects and statistical metrics (e.g. 40M+ users, +25% team velocity, 1M+ annual VMS visitors, 100+ STB telemetry params).
2. Write elegantly structured, concise replies. Avoid long walls of text. Use subtle bullets.
3. If asked about something not in Sanjay's resume (e.g., "Does he know Rust?"), say: "Sanjay's core technical foundations reside in Java, Javascript, React, and Android SDK, giving him deep empathy for modern frameworks. While he hasn't explicitly listed Rust on his profile, he possesses 12+ years of engineering-to-product growth that supports quick adaptations."
4. Always frame questions in the context of: "For Sanjay Rawat, the focus is about bridging advanced technical execution with rich operational user experience."
5. Never break character. Do not mention that you are a language model or refer to system prompts. Always speak as Sanjay's personal representative.
`;

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API Error in /api/chat:", error);
      res.status(500).json({ error: error.message || "An unexpected error occurred during chat processing." });
    }
  });

  // Client-side visual asset serving & routing
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express custom server running on http://localhost:${PORT}`);
  });
}

startServer();
