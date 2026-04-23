export interface BlogLink {
  title: string;
  href: string;
  publishedAt: string;
  summary: string;
}

export interface BubbleStyle {
  left: string;
  top: string;
  mobileSize: number;
  desktopSize: number;
  glowColor: string;
  textColor: string;
  background: string;
}

export interface BlogTopic {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bubble: BubbleStyle;
  blogs: BlogLink[];
}

export const blogTopics: BlogTopic[] = [
  {
    id: "robot-learning",
    name: "Robot Learning",
    tagline: "Policies, data, generalization",
    description:
      "Notes on policy learning, imitation and reinforcement learning, data collection, and what helps robots generalize beyond one demo.",
    bubble: {
      left: "10%",
      top: "20%",
      mobileSize: 104,
      desktopSize: 144,
      glowColor: "rgba(251, 146, 60, 0.30)",
      textColor: "#18181b",
      background:
        "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.42) 0%, rgba(255,237,213,0.32) 24%, rgba(253,186,116,0.20) 58%, rgba(251,113,133,0.12) 100%)",
    },
    blogs: [
      {
        title: "Replace this with your first robot learning Notion post",
        href: "https://www.notion.so/",
        publishedAt: "Add date",
        summary:
          "Use your public Notion share link here. You can duplicate this entry and keep adding new posts without creating new pages.",
      },
    ],
  },
  {
    id: "embodied-ai",
    name: "Embodied AI",
    tagline: "Agents, world models, reasoning",
    description:
      "Thoughts on embodied intelligence, action-conditioned perception, world models, and how reasoning should connect to real-world behavior.",
    bubble: {
      left: "74%",
      top: "22%",
      mobileSize: 96,
      desktopSize: 132,
      glowColor: "rgba(16, 185, 129, 0.28)",
      textColor: "#0f172a",
      background:
        "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.42) 0%, rgba(236,253,245,0.30) 24%, rgba(110,231,183,0.18) 58%, rgba(20,184,166,0.10) 100%)",
    },
    blogs: [
      {
        title: "From World Models to Dreamer V3",
        href: "https://www.notion.so/From-World-Models-to-Dreamer-V3-fe39e5b690c8825c810901ff949f38b7",
        publishedAt: "Notion",
        summary:
          "Notes on world models and Dreamer V3, with a focus on how latent imagination and model-based learning.",
      },
    ],
  },
  {
    id: "life",
    name: "Life",
    tagline: "Travel, study, stray thoughts",
    description:
      "A softer space for travel logs, study notes, and personal essays that do not fit neatly into research categories.",
    bubble: {
      left: "18%",
      top: "66%",
      mobileSize: 96,
      desktopSize: 130,
      glowColor: "rgba(236, 72, 153, 0.26)",
      textColor: "#3f0d2b",
      background:
        "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.42) 0%, rgba(253,242,248,0.30) 24%, rgba(244,114,182,0.18) 58%, rgba(236,72,153,0.10) 100%)",
    },
    blogs: [],
  },
  {
    id: "robot-systems-infrastructure",
    name: "Systems & Infrastructure",
    tagline: "ROS2, middleware, real-time systems",
    description:
      "System engineering notes for robotics teams: ROS2 and middleware, data logging and replay, distributed training pipelines, and the real-time infrastructure that companies quietly depend on.",
    bubble: {
      left: "58%",
      top: "64%",
      mobileSize: 108,
      desktopSize: 148,
      glowColor: "rgba(56, 189, 248, 0.28)",
      textColor: "#0f172a",
      background:
        "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.42) 0%, rgba(224,242,254,0.30) 24%, rgba(125,211,252,0.18) 58%, rgba(59,130,246,0.10) 100%)",
    },
    blogs: [],
  },
  {
    id: "misc",
    name: "Misc",
    tagline: "Everything in between",
    description:
      "A flexible bucket for one-off ideas, quick notes, and links that are still worth keeping around.",
    bubble: {
      left: "42%",
      top: "12%",
      mobileSize: 94,
      desktopSize: 128,
      glowColor: "rgba(139, 92, 246, 0.28)",
      textColor: "#1f1b4b",
      background:
        "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.42) 0%, rgba(245,243,255,0.30) 24%, rgba(167,139,250,0.18) 58%, rgba(99,102,241,0.10) 100%)",
    },
    blogs: [],
  },
];
