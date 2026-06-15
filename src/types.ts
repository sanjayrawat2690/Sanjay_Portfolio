/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bulletPoints: string[];
  highlights: {
    label: string;
    value: string;
    description: string;
  }[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  challenge: string;
  strategy: string;
  execution: string[];
  impact: {
    stat: string;
    label: string;
  }[];
  tags: string[];
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: string;
}

export interface PrioritizationItem {
  id: string;
  name: string;
  description: string;
  reach: number; // 1-10
  impact: number; // 1-10
  confidence: number; // 1-10 (expressed as percentage divided by 10)
  effort: number; // 1-10
  score: number; // RICE score
  category: "AI Features" | "Enterprise SaaS" | "Growth" | "Core Experience";
}

export interface RecruiterInquiry {
  id: string;
  name: string;
  email: string;
  company: string;
  message: string;
  type: string;
  timestamp: string;
}
