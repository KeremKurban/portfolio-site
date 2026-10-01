export type Role = {
  title: string;
  org: string;
  period: string;
  highlights: string[];
};

// Newest first.
export const experience: Role[] = [
  {
    title: "Freelancer in AI and MLOps",
    org: "Geneva",
    period: "01/2025 – Ongoing",
    highlights: [
      "Application of novel techniques in LLM systems (LoRA, QLoRA, DORA, MoE, SFT)",
      "Development and integration of agentic frameworks (Letta, LangChain, Swarm)",
      "Federated learning with Flower.ai",
      "Implementation of Model Context Protocols (fastMCP)",
      "Agentic monitoring and long-term memory solutions",
    ],
  },
  {
    title: "Machine Learning Engineer",
    org: "EPFL Blue Brain Project",
    period: "04/2024 – 01/2025",
    highlights: [
      "Led projects on semantic analysis of databases using Neo4j and Python",
      "Maintained and productionized AI software projects including LLM agents and GraphRAG",
      "Productionized AI chatbots with GraphRAG for unstructured data and graph databases",
      "Deployed AI software suite on Kubernetes and AWS",
      "Developed front-end applications for chat interfaces using React",
    ],
  },
  {
    title: "Scientific Software Developer",
    org: "EPFL Blue Brain Project",
    period: "04/2021 – 04/2024",
    highlights: [
      "Lead projects on building and analyzing large-scale brain region models",
      "Published research papers on Spiking Neural Networks and Graph Theory",
      "Maintained and productionized software using CI/CD pipelines",
    ],
  },
  {
    title: "Student Ambassador in AI",
    org: "Intel Nervana",
    period: "2018",
    highlights: [
      "Designed machine learning models for analyzing fMRI data",
      "Showcased neuroscience research on Intel's AI platform",
    ],
  },
  {
    title: "Software Engineer Intern",
    org: "Neurolize",
    period: "06/2016 – 09/2016",
    highlights: [
      "Performed marketing research using EEG and eye tracking",
      "Analyzed online shopping interactions using classification techniques",
    ],
  },
];

export type Certification = { name: string; issuer: string; date: string };

export const certifications: Certification[] = [
  { name: "Neo4j Certified Professional", issuer: "Neo4j GraphAcademy", date: "2024" },
  { name: "LLMOps", issuer: "Deeplearning.ai", date: "2024" },
  { name: "AI Agents in LangGraph", issuer: "Deeplearning.ai", date: "2024" },
  { name: "Fine Tuning Large Language Models", issuer: "Deeplearning.ai", date: "2024" },
  { name: "Quantization Fundamentals in Hugging Face", issuer: "Deeplearning.ai", date: "2024" },
  { name: "AWS Foundations", issuer: "Amazon Web Services", date: "2024" },
  { name: "AWS Bedrock", issuer: "Amazon Web Services", date: "2024" },
  { name: "Infrastructure as Code in Google Cloud Platform", issuer: "LinkedIn Learning", date: "2024" },
  { name: "LLMs as Operating Systems: Agent Memory", issuer: "Deeplearning.ai", date: "May 2025" },
  { name: "Federated Fine-Tuning of LLMs with Private Data", issuer: "Deeplearning.ai", date: "May 2025" },
  { name: "Evaluating AI Agents", issuer: "Deeplearning.ai", date: "May 2025" },
];
