export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "Jul. 2026",
    title: "🎉 EgoX Accepted by RSS Workshop on Dexterous Manipulation",
    description:
      "Egocentric Cross-Embodiment Manipulation with Embodiment Dreaming was accepted to the 4th Workshop on Dexterous Manipulation: Scalable Learning for Human-Level Skills.",
    link: "",
  },
  {
    date: "May 2026",
    title: "⭐ Selected Demo for Jensen Huang Visit",
    description:
      "Our project was picked as one of the demos to be showcased and introduced during Jensen Huang's visit to Carnegie Mellon ahead of the 2026 Commencement ceremony.",
    link: "https://www.linkedin.com/posts/carnegie-mellon-university_this-morning-jensen-huang-founder-and-ceo-activity-7459240269910155264-E58j/",
  },
  {
    date: "Apr. 2026",
    title: "🎉 SuperMap Accepted by RSS 2026",
    description: "Spatio Temporal Semantic SLAM System Enabling Robots to Understand Evolving World in Real Time.",
    link: "",
  },
  {
    date: "Jan. 2026",
    title: "🎉 RE-GoT Accepted by ICRA 2026",
    description: "A Bi-Level Language Model Framework for Reinforcement Learning.",
    link: "",
  }
];
