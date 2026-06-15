/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WorkExperience, SkillCategory, CaseStudy, PrioritizationItem } from "./types";

export const MASTER_BIO = {
  name: "Sanjay Rawat",
  tagline: "Senior Product Manager | AI Products | SaaS | Enterprise Platforms",
  summary: "Experienced Product Manager with over 12 years in tech, blending data-driven insights and user-centric design to launch transformative products, reaching over 40 million users globally. Led cross-functional teams of 14+ to deliver innovative solutions across consumer, AI, and B2B SaaS domains, driving successful product launches and strategic deals worth $100M+.",
  elevator: "Hi, I'm Sanjay. I bridge business strategy, advanced technical architecture, and deep user empathy. From conversational AI at Walmart Global Tech to enterprise IoT SaaS platforms, I design and scale systems that solve real human friction while delivering massive, measurable business outcomes. Welcome to my interactive product portfolio.",
  location: "Bangalore, India",
  phone: "+91-9663794068",
  email: "Sanjayrawat2690@gmail.com",
  linkedIn: "https://linkedin.com/in/sanjay-rawat-pm", // Placeholder correct structure
};

export const MASTER_SKILLS: SkillCategory[] = [
  {
    category: "Product Management",
    items: ["Product Strategy", "Product Vision & Roadmap", "Product Lifecycle Management", "Feature Prioritization", "Product Discovery", "Agile & Scrum", "Backlog Governance"]
  },
  {
    category: "AI & Digital Products",
    items: ["Applied AI", "Conversational AI", "OpenAI Integrations", "AI Product Innovation", "SaaS Platforms", "Digital Transformation", "IoT & Enterprise Solutions"]
  },
  {
    category: "UX & Customer Experience",
    items: ["User Research", "UX Strategy", "Persona Development", "Customer Journey Mapping", "Design Thinking", "User-Centric Product Design"]
  },
  {
    category: "Go-to-Market & Growth",
    items: ["GTM Strategy", "Product Launches", "Market Expansion", "Product Adoption", "Growth Initiatives", "Pricing Strategy", "Stakeholder Alignment"]
  },
  {
    category: "Business Operations & Analytics",
    items: ["Product Metrics", "KPI Tracking", "Data-Driven Decisions", "Operations Management", "Risk Mitigation", "Budget Management", "Root Cause Analysis"]
  },
  {
    category: "Tools & Technologies",
    items: ["Jira", "Azure DevOps", "MS Project", "Android SDK", "Agile Delivery Tools", "BigQuery", "JavaScript", "React", "Node.js", "Java"]
  }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: "walmart",
    company: "Walmart Global Tech",
    role: "Senior Product Manager",
    location: "Bangalore, India",
    period: "2022 - Present",
    highlights: [
      { label: "Scale Enabled", value: "1M+", description: "Annual visitor throughput managed securely" },
      { label: "Team Size", value: "14+", description: "Engineers, UX designers, and operations specialists managed" },
      { label: "Team Velocity", value: "+25%", description: "Cross-functional team productivity uplift from agile improvements" },
      { label: "Onboarding", value: "100%", description: "Of admin users successfully trained and deployed" }
    ],
    bulletPoints: [
      "Product Owner for Walmart's OpenAI-based chat assistant for our products, tailoring next-generation LLM responses and natural language interfaces to eliminate user friction.",
      "Architected the Walmart Associate Digital Layer: a unified, all-in-one corporate portal integrating facility indoor maps, turn-by-turn navigation, meeting room reservation (MS Graph Integration), payroll records, facility issue reporting, and Workday systems into a single seamless hub.",
      "Headed the international strategy, localization, and rollout of the Visitor Management System (VMS) across USA, Canada, Costa Rica, and India, securing hospitality protocols and GDPR/PII compliance for over 1M+ annual guests.",
      "Designed and deployed the Post-COVID Back-to-Office platform, securing employee health screenings, real-time safety metrics, and automated risk-clearance procedures across retail offices and physical campuses.",
      "Spearheaded product specifications for automated, contactless Material Movement within Walmart facilities, digitizing internal supply routing and mitigating hardware/physical congestion."
    ]
  },
  {
    id: "tata-elxsi",
    company: "Tata Elxsi",
    role: "Product Manager",
    location: "Bangalore, India",
    period: "2021 - 2022",
    highlights: [
      { label: "Telemetry Metrics", value: "100+", description: "STB parameters streamed per second via Kafka for real-time diagnostics" },
      { label: "Markets Added", value: "US/EU/ME", description: "Expanded footprint into US, Europe, Middle East, and Asia" },
      { label: "Products Launched", value: "iCX Platform", description: "B2B SaaS IoT analytics platform deployed globally" }
    ],
    bulletPoints: [
      "Spearheaded iCX (Intelligent Customer Experience), an enterprise IoT SaaS management platform for Set-Top Boxes (STBs) feeding 100+ device parameters per second through a high-throughput Apache Kafka queue.",
      "Empowered support engineers and executive leadership with real-time operational query tools and KPI dashboards to make informed device maintenance and commercial decisions.",
      "Managed successful deployments and client integrations across multi-regional markets including the USA, Europe, the Middle East, and Asia.",
      "Partnered with cross-functional R&D, engineering, and sales leads to translate complex telemetry into tiered SaaS subscription metrics and ROI calculators."
    ]
  },
  {
    id: "wipro",
    company: "Wipro",
    role: "Associate PM / Presales / Android Dev",
    location: "Bangalore, India",
    period: "2014 - 2021",
    highlights: [
      { label: "Annual Revenue", value: "$100M+", description: "Revenue clocked yearly for Mobile and Design presales" },
      { label: "Cost Savings", value: "20%", description: "Operational cost reductions in supply chain workflows" },
      { label: "Product Footprint", value: "US/EU/AS", description: "Multi-regional distribution and delivery solutions shipped" }
    ],
    bulletPoints: [
      "Productized a high-scale Distribution Management System and B2B E-commerce platform for telecom giants across Asia and Europe, streamlining sub-dealer lifecycles and sales cycles.",
      "Led the product phase and feature definition for 'DRIVE', an enterprise shipment and GPS-grounded delivery tracking mobile application developed for a major US logistics enterprise.",
      "Designed Mobile Device Management (MDM) solutions for a prominent US healthcare conglomerate, securing PII/HIPAA compliance across thousands of frontline medical devices.",
      "Headed Presales engineering and technical solution strategy for Mobile and Design business verticals, successfully pitching and winning strategic enterprise deals clocking $100M+ in annual revenue.",
      "Began career as a Software Engineer for Android Mobile Development, building reusable client architectures, offline databases, and clean operational interfaces."
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "walmart-vms",
    title: "AI Chat & Associate Digital Map Layer Integration",
    company: "Walmart Global Tech",
    role: "Senior Product Manager",
    period: "2022 - Present",
    summary: "Spearheaded Walmart's enterprise hospitality and associate efficiency initiatives, blending OpenAI-driven chat assistance with a consolidated indoor navigation and MS Graph suite.",
    challenge: "Associate facilities lacked an integrated portal, requiring separate tools for scheduling, navigation, facilities reporting, and internal HR actions. Simultaneously, visitors required manual screening across multiple global sites without uniform compliance or self-help dialogs.",
    strategy: "Conceived a unified corporate digital layer combined with an OpenAI assistant and VMS. Enabled MS Graph meeting room scheduling, dynamic indoor navigation, and post-Covid screening with safe automated clearance. Delivered material movement tracking logic within centers to bypass transit friction.",
    execution: [
      "Designed conversational pipelines for OpenAI-powered triage assisting with product onboarding and queries.",
      "Secured MS Graph and Workday integrations to unify scheduling, room booking, payroll, and issue reports in a single app.",
      "Engineered automated safety procedures and health checks for the post-Covid Return-to-Office platform.",
      "Defined telemetry architectures for optimized, barrier-free material routing inside high-volume layouts."
    ],
    impact: [
      { stat: "1M+", label: "VMS Annual Visitors" },
      { stat: "MS Graph", label: "Meeting Room Scheduler" },
      { stat: "All-in-One", label: "Employee Operations Hub" },
      { stat: "Safe", label: "Post-Covid Campuses" }
    ],
    tags: ["Conversational AI", "MS Graph", "Indoor Navigation", "Workday Integration", "Facility Logistics"]
  },
  {
    id: "icx-iot-platform",
    title: "iCX Set-Top Box Analytics Platform Expansion",
    company: "Tata Elxsi",
    role: "Product Manager",
    period: "2021 - 2022",
    summary: "Led the global product execution and telemetry overhaul of the iCX Intelligent Customer Experience IoT manager, optimizing STB tracking across US, EU, and Asia.",
    challenge: "Set-top boxes generated heavy telemetry but lacked low-latency streams and digestible dashboards, limiting troubleshooting efficiency for device suppliers and regional client support operators.",
    strategy: "Introduced a real-time analytics layer centered on high-throughput Apache Kafka queues processing 100+ device parameters per second. Crafted diagnostic dashboards mapping critical bandwidth, audio-visual metrics, and peripheral connectivity patterns directly to decision-maker UI.",
    execution: [
      "Deployed global streaming pipelines utilizing Kafka to consolidate 100+ STB performance indicators.",
      "Guided integration lifecycles across key accounts in the US, Europe, Middle East, and Asia.",
      "Delivered live monitoring tools allowing leadership to conduct direct, audit-supported data modeling."
    ],
    impact: [
      { stat: "100+", label: "Device Params Tracked" },
      { stat: "Kafka", label: "Real-time Queue Standard" },
      { stat: "US/EU/ME/AS", label: "Global Territorial Footprint" }
    ],
    tags: ["IoT Platforms", "Apache Kafka", "Set-Top Box Analytics", "Enterprise Dashboarding"]
  }
];

export const EDUCATION = {
  institution: "Uttarakhand Technical University",
  degree: "Master of Business Administration (M.B.A.)",
  specialization: "Marketing & Finance",
  period: "2014 - 2016"
};

export const CERTIFICATIONS = [
  { name: "Product Management Certification", issuer: "Duke University" },
  { name: "Certified Scrum Product Owner (CSPO)", issuer: "Scrum Alliance", credentialId: "001569144" }
];

export const INITIAL_PRIORITIZATION_FEATURES: PrioritizationItem[] = [
  {
    id: "feat-1",
    name: "OpenAI-Powered Badge Triage Assistant",
    description: "An AI agent that answers guests' pre-registration questions in multiple languages.",
    reach: 8,
    impact: 9,
    confidence: 8,
    effort: 4,
    score: 144, // calculated as (R * I * C) / E -> (8 * 9 * 0.8) / 4 = 14.4 -> scaled up for visual indicator
    category: "AI Features"
  },
  {
    id: "feat-2",
    name: "Automated Regional PII Purge Pipeline",
    description: "Compliance microservice automatically purging visitor data depending on local legal timelines.",
    reach: 9,
    impact: 10,
    confidence: 9,
    effort: 3,
    score: 270,
    category: "Enterprise SaaS"
  },
  {
    id: "feat-3",
    name: "Self-Healing Smart Gate Kiosk Support",
    description: "Diagnoses network offline drops on Android tablets and executes locally-stored offline triage flows.",
    reach: 5,
    impact: 8,
    confidence: 7,
    effort: 5,
    score: 56,
    category: "Core Experience"
  },
  {
    id: "feat-4",
    name: "Universal QR Quick-Pass for 5 GEO Rollout",
    description: "Facilitate single-swipe entrance across Walmart corporate nodes in the US, CA, CR, and India.",
    reach: 10,
    impact: 8,
    confidence: 9,
    effort: 6,
    score: 120,
    category: "Growth"
  }
];
