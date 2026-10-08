import { legacyCdn, repoAsset } from "@/lib/assets";

// Content carried over unchanged from the create.xyz export (src/app/page.jsx).
export const site = {
  name: "Kerem Kurban",
  role: "ML Engineer | Agentic AI, Evaluation & Interpretability",
  intro:
    "AI/ML engineer and computational neuroscientist. I build and evaluate agentic AI systems in production, including in regulated industry, and study how models arrive at their outputs, from brain circuit models to multimodal medical foundation models.",
  highlights: ["Agentic Systems", "LLM Evaluation", "Interpretability", "Medical Foundation Models", "Computational Neuroscience", "Python"],
  location: "Geneva, Switzerland",
  email: "keremkurban@proton.me",
  links: {
    github: "https://github.com/KeremKurban",
    linkedin: "https://linkedin.com/in/kerem-kurban-5a40a1117",
  },
  cv: repoAsset("resumes/CV_Kerem_Kurban_FDE-10_26.pdf", "01636cce3c442e974cdf1f5d04a42ba46780b284"),
  publicationsPdf: repoAsset("resumes/Publications_10_2024.pdf"),
  photo: legacyCdn("fb725b0a-aac9-4b8e-bece-1366d27e6df1"),
} as const;
