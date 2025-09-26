export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2024—Present",
    institution: "Carnegie Mellon University",
    degree: "M.S. in Computer Science",
    advisor: "Prof. Marios Savvides",
  },
  {
    year: "2019—2023",
    institution: "Hunan University",
    degree: "B.E. in Information Security",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
