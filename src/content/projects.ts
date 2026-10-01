import { legacyCdn, repoAsset } from "@/lib/assets";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  live?: string;
};

export const projectFilters = [
  "Neo4j",
  "LLM",
  "AI-agents",
  "RAG",
  "neuroscience",
  "Python",
  "AWS",
  "HTML/CSS",
  "Docker",
  "API",
  "Vite",
  "Three.js",
  "interpretability",
  "mechanistic-interpretability",
  "time-series",
];

export const projects: Project[] = [
  {
    id: "mech-interp-primer",
    title: "Mechanistic Interpretability Primer",
    description:
      "Five minimal, runnable projects reproducing core interpretability results on GPT-2 small in plain PyTorch: linear probing, logit lens, induction heads, activation patching and sparse autoencoders. Runs on CPU in minutes.",
    tags: ["Python", "LLM", "interpretability", "mechanistic-interpretability"],
    image: "",
    github: "https://github.com/KeremKurban/mechanistic-interpretability-primer",
  },
  {
    id: "signal-interpretability",
    title: "Signal Interpretability",
    description:
      "Attribution and causal explainability for time-series signals such as PPG, ECG and accelerometer data, carried over from vision-transformer methods. Compares attention maps with occlusion, perturbation, attention rollout and gradient-based attribution.",
    tags: ["Python", "interpretability", "time-series"],
    image: "",
    github: "https://github.com/KeremKurban/signal-interpretability",
  },
  {
    id: "ca1-model",
    title: "Biophysically Detailed Model of Rat Hippocampus CA1 Region",
    description:
      "Developed and maintained in-silico models of detailed neurons in 3D rat atlas, validated by in-vivo and in-vitro experiments and provides insights into hippocampal function from its structure, physiology and connectivity.",
    tags: ["Python", "neuroscience", "HPC", "graph-theory"],
    image: legacyCdn("c98fb837-ec9c-4c58-bace-fe820b3e7b62"),
    github: "https://github.com/BlueBrain/rat_ca1_model_code",
  },
  {
    id: "citation-graph-vr",
    title: "Embedding Citation Graphs in VR",
    description: "A 3D force graph visualization in VR using WebXR and Neo4j",
    tags: ["Neo4j", "HTML", "VR"],
    image: "https://raw.githubusercontent.com/BlueBrain/citation-graph/main/images/force_3d_graph.png",
    github: "https://github.com/BlueBrain/citation-graph",
  },
  {
    id: "neuroagent",
    title: "Neuroagent: A multiagentic LLM for simulating and analyzing digital brains",
    description:
      "Explore Literature and extract information to generate and simulate your own neuron models using our ChatGPT like interface, embedded into pay-as-you-go platform.",
    tags: ["Python", "LLM", "AI-agents", "RAG", "neuroscience", "AWS"],
    image: repoAsset("resumes/neuroagent.jpeg"),
    github: "https://github.com/BlueBrain/neuroagent",
  },
  {
    id: "sonata-neo4j",
    title: "Sonata to Neo4j",
    description: "Convert Biophysical Neuron Models and Simulations into Neo4j Graph and create fact sheets.",
    tags: ["Python", "Neo4j", "neuroscience"],
    image: repoAsset("resumes/sonata2neo1.jpg"),
    github: "https://github.com/KeremKurban/sonata-neo4j-loader",
  },
  {
    id: "chat-with-brain",
    title: "Chat with Brain",
    description: "Talk to Brain Models with Large Language Models",
    tags: ["Python", "Neo4j", "neuroscience", "RAG"],
    image: repoAsset("resumes/dalle_twg.jpeg"),
    github: "https://github.com/KeremKurban/chat-with-brain",
  },
  {
    id: "sortify",
    title: "Sortify",
    description:
      "Sortify is a web application that allows users to sort their favorite Spotify album tracks based on their preferences.",
    tags: ["Python", "HTML/CSS"],
    image: legacyCdn("75964e7c-82e3-4707-9b9c-458a4565dd8f"),
    github: "https://github.com/KeremKurban/Sortify",
  },
  {
    id: "scholarag",
    title: "Scholarag",
    description:
      "A Retrieval Augmented Generation (RAG) API meant for scientific literature, which includes data management utilities and relevant endpoints for efficiently showcasing papers to your users.",
    tags: ["RAG", "Python", "AWS", "Docker", "API"],
    image: legacyCdn("254ccaba-750e-4c8d-a887-a1461521c092"),
    github: "https://github.com/BlueBrain/scholarag",
  },
  {
    id: "hypnosis-simulator",
    title: "Hypnosis Simulator",
    description:
      "An interactive web application featuring various hypnotic visualizations and audio stimulations for relaxation and meditation. Includes multiple visualization types like Spiral Induction, Pulsing Light, and 3D Lorenz patterns, with customizable controls and audio accompaniment.",
    tags: ["JavaScript", "Three.js", "WebGL", "Interactive", "Vite", "HTML5", "CSS3"],
    image: repoAsset("resumes/app_hypnosis.PNG"),
    github: "https://github.com/KeremKurban/hypnosis-simulator",
    live: "https://keremkurban.github.io/hypnosis-simulator/",
  },
];
