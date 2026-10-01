export type Role = {
  title: string;
  org: string;
  period: string;
  highlights: string[];
};

// Newest first.
export const experience: Role[] = [
  {
    title: "Machine Learning Engineer (Forward Deployed)",
    org: "Wipro, forward deployed to a large Swiss bank",
    period: "11/2025 – 06/2026",
    highlights: [
      "Embedded on-site within the client's Core Engineering Data & AI function (~60% client travel), managing concurrent engagements across twelve reconciliation domain groups plus risk and operations stakeholders; led discovery, solution framing, and iterative delivery from proof-of-concept to production. Initial six-month contract extended in recognition of contributions",
      "Built a multi-agent benchmarking harness evaluating autonomous agents against historical human reconciliation decisions, integrating MLflow 3 for experiment tracking and observability, Unity Catalog for governance, and a purpose-built MCP server for governed data retrieval; established audit-ready AI quality assurance in a regulated financial environment",
      "Designed and shipped an agentic ingestion pipeline (Azure Document Intelligence + vision-language models, Pydantic schema-guided extraction, parallel agentic execution with cross-validation of generated artefacts) standardizing 330 multimodal SOPs into a governed data asset, cutting manual review effort by ~90%",
      "Extended the client platform with custom tooling: a React application exposing SOP coverage and automatability scores as a self-serve data product, and a domain ontology / knowledge graph linking reconciliation break types to SOPs for provenance-aware, auditable agent reasoning",
      "Led a bank-wide evaluation of enterprise AI/ML platforms and model registries; proposed the solution architecture that shaped programme platform strategy; ran cross-functional enablement sessions for business and technical stakeholders, from engineers to senior executives, and mentored a junior engineer",
    ],
  },
  {
    title: "AI Researcher (Contract)",
    org: "Neptune.ai",
    period: "03/2025 – 10/2025",
    highlights: [
      "Post-training and alignment on Mistral, Qwen3 and Llama 3.1 8B: supervised fine-tuning, DPO, PPO, GRPO",
      "Benchmarked PEFT methods (LoRA, Q-LoRA, DoRA), reaching a 210% improvement over baseline",
    ],
  },
  {
    title: "Machine Learning Engineer",
    org: "EPFL Blue Brain Project, Geneva",
    period: "04/2024 – 01/2025",
    highlights: [
      "Built an LLM evaluation pipeline (RAGAS plus custom tool-calling benchmarks) measuring hallucination rates across retrieval configurations",
      "Engineered a modular Python toolkit (Pydantic, LangChain, async APIs) for cross-modal extraction and knowledge-graph search over heterogeneous scientific data, cutting manual research effort by roughly 90%",
      "Built a Neo4j knowledge graph over BBP citation networks with GraphRAG retrieval and a domain-expert-facing assistant",
      "Co-developed Neuroagent for in-silico simulation and hypothesis testing of biophysical brain models on AWS, now available at openbraininstitute.org",
    ],
  },
  {
    title: "Graduate Researcher & Data Scientist",
    org: "EPFL Blue Brain Project, Geneva",
    period: "04/2021 – 04/2024 (intern 03/2020 – 09/2020)",
    highlights: [
      "Dedicated engineer for network building, atlas alignment and in silico wet-lab replication on the full-scale CA1 model (PLoS Biology 2024)",
      "Deployed Dask-parallelised network statistics on large-scale graphs, and Spark pipelines over terabyte-scale simulation output on CSCS HPC under Slurm",
    ],
  },
  {
    title: "Graduate Research Assistant",
    org: "UNAM, Bilkent University, Ankara",
    period: "09/2018 – 03/2021",
    highlights: [
      "Biologically realistic spiking network models (Izhikevich, LIF, MAT with STDP) in NEURON and NEST",
      "Evolutionary optimisation of SNN controllers for locomotion pattern generation",
    ],
  },
  {
    title: "Machine Learning Ambassador",
    org: "Intel, Istanbul",
    period: "05/2017 – 09/2018",
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

export type Certification = { name: string; issuer: string; date: string; scope?: string[] };

export const certifications: Certification[] = [
  {
    name: "Medical Devices (certificate of participation, 2-day online course)",
    issuer: "University of Bern, taught by Lucendra SA",
    date: "September 2026",
    scope: [
      "Role of quality, regulatory and clinical affairs professionals",
      "CE marking process for medical devices",
      "Quality management systems and ISO 13485 compliance",
      "Development phases and risk management",
      "Clinical evidence: clinical evaluation and clinical investigations",
    ],
  },
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
