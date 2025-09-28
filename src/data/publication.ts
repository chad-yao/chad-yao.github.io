export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
  keywords?: string[];
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "In Submission",
    title: "Reward Evolution with Graph-of-Thoughts: A Bi-Level Language Model Framework for Reinforcement Learning",
    authors: "Changwei Yao, Xinzi Liu, Chen Li, Marios Savvides",
    paperUrl: "https://arxiv.org/pdf/2509.16136",
    imageUrl: "/images/re-got.gif",
    keywords: ["GoT", "LLM", "RL"],
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    // bibtex: "https://arxiv.org/abs/2409.15476.bib",
    // tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
    // award: "🏆 Best Paper Award",
  },
  {
    year: "2025",
    conference: "In Submission",
    title: "MinInter: Minimizing Trajectory Interpolation During Data Augmentation for Imitation Learning",
    authors: "Qingyang Wang*, Changwei Yao*, Xingang Liu*, Zikai Ouyang, Junwei Liu, Haibo Lu, Wei Zhang",
    imageUrl: "/images/minInter.gif",
    keywords: ["Robot Learning", "Data Augmentation"],
    // paperUrl: "https://arxiv.org/abs/2302.13095",
    // codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
  {
    year: "2025",
    conference: "In Submission",
    title: "SuperMap: Spatio Temporal Semantic SLAM Enabling Robots to Understand Evolving World in Real Time",
    authors: "Shibo Zhao, Guofei Chen, Honghao Zhu, Zhiheng Li, Changwei Yao, Nader Zantout, Seungchan Kim, Wenshan Wang, Ji Zhang, Sebastian Scherer",
    imageUrl: "/images/supermap.GIF",
    keywords: ["System", "Scene Graph", "Spatio-temporal"],
    // paperUrl: "https://arxiv.org/abs/2302.13095",
    // codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
];
