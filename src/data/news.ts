export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
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
