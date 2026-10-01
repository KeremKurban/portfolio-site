import { legacyCdn, repoAsset } from "@/lib/assets";

// Content carried over unchanged from the create.xyz export (src/app/page.jsx).
export const site = {
  name: "Kerem Kurban",
  role: "Machine Learning Engineer | MLOps & LLM Specialist",
  intro:
    "Machine Learning Engineer at EPFL Blue Brain Project, specializing in MLOps and LLM development. I bridge the gap between artificial intelligence and neuroscience.",
  highlights: ["Multi-Agentic LLMs", "Neo4j", "Python", "GraphRAG", "MLOps"],
  location: "Geneve, Switzerland",
  email: "keremkurban@hotmail.com",
  links: {
    github: "https://github.com/KeremKurban",
    linkedin: "https://linkedin.com/in/kerem-kurban-5a40a1117",
  },
  cv: repoAsset("resumes/CV_9_5_2025.pdf", "485847889d35645617434ae9cfb3081c6570e40e"),
  publicationsPdf: repoAsset("resumes/Publications_10_2024.pdf"),
  photo: legacyCdn("fb725b0a-aac9-4b8e-bece-1366d27e6df1"),
} as const;
