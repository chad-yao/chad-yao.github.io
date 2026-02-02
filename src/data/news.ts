export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "Jan. 2026",
    title: "RE-GoT Accepted by ICRA 2026",
    description: "A Bi-Level Language Model Framework for Reinforcement Learning.",
    link: "",
  }
];
