import { legacyCdn } from "@/lib/assets";

export type Publication = {
  title: string;
  authors: string;
  year: string;
  type: "Poster" | "Journal" | "Preprint";
  venue: string;
  tags: string[];
  image?: string;
  doi?: string;
};

export const SELF = /Kurban,? (M\.? ?)?K\.?/;

export const publications: Publication[] = [
  {
    title:
      'Machine and deep learning approaches for the study "Effects of early anesthesia exposure on human brain development using multimodal neuroimaging"',
    authors: "Kurban K., Budur E.",
    year: "2018",
    type: "Poster",
    venue: "16th National Neuroscience Congress in Turkey",
    tags: ["machine-learning", "fMRI", "neuroscience"],
    image: legacyCdn("a76fda91-529e-4804-bba1-582183f00ac1"),
  },
  {
    title: "Characterizing subtypes of projecting axons in mice using topological data analysis and machine learning",
    authors: "Kurban K., Kanari L.",
    year: "2024",
    type: "Poster",
    venue: "Society for Neuroscience, San Diego, CA, USA",
    tags: ["machine-learning", "neuroscience"],
    image: legacyCdn("723e5f11-4cc6-4e30-9092-1ecabccc1487"),
  },
  {
    title:
      "A connectome manipulation framework for the systematic and reproducible study of structure–function relationships through simulations",
    authors: "Pokorny, C., Awile, O., Isbister, J. B., Kurban, K., Wolf, M., & Reimann, M. W.",
    year: "2024",
    type: "Journal",
    venue: "bioRxiv",
    doi: "10.1101/2024.05.24.593860",
    tags: ["simulation", "neuroscience"],
  },
  {
    title: "A deep dive into CA1 network: Insights from Network Science",
    authors: "Kurban K, Romani A., Markram H.",
    year: "2023",
    type: "Poster",
    venue: "32th Computational Neuroscience Society",
    tags: ["hippocampus", "neuroscience", "graph-heory"],
    image: legacyCdn("c35e14c6-6d31-44e6-aca7-7e615c0ecb2a"),
  },
  {
    title: "Community-based Reconstruction and Simulation of a Full-scale Model of Region CA1 of Rat Hippocampus",
    authors: "Romani, A., et al.",
    year: "2023",
    type: "Preprint",
    venue: "Cold Spring Harbor Laboratory",
    doi: "10.1101/2023.05.17.541167",
    tags: ["simulation", "neuroscience", "hippocampus"],
  },
  {
    title: "Topological properties of full-scale model of rat hippocampus CA1 and their functional implications",
    authors: "Kurban K, Pokorny C., Romani A.",
    year: "2022",
    type: "Poster",
    venue: "Society for Neuroscience, San Diego, CA, USA",
    tags: ["hippocampus", "neuroscience", "graph-heory"],
    image: legacyCdn("a1a2fe0f-0888-4d72-8dbc-6dbb6a6295fa"),
  },
  {
    title: "Resting-state network dysconnectivity in ADHD: A system-neuroscience-based meta-analysis",
    authors: "Sutcubasi B, Metin B, Kurban MK, Metin ZE, Beser B, Sonuga-Barke E",
    year: "2020",
    type: "Journal",
    venue: "World J Biol Psychiatry",
    doi: "10.1080/15622975.2020.1775889",
    tags: ["meta-analysis", "neuroscience", "fMRI", "ADHD"],
  },
];
