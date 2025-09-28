export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Airport Chatbot Assistant",
    description:
      "An intelligent chatbot designed to assist passengers with airport-related queries including flight information, terminal navigation, entertainment, and general airport services.",
    technologies: ["Python", "API Integration"],
    // imageUrl: "/images/chatbot.png",
    codeUrl: "https://github.com/CMU-Cylab-Biometrics-Center/nexus",
  },
  {
    title: "DRL Tree Chopping Agent for Minecraft",
    description:
      "A deep reinforcement learning agent trained to chop trees in Minecraft using Deep Q-learning from demonstration.",
    technologies: ["Python", "PyTorch", "MineRL"],
    imageUrl: "/images/treechopper.gif",
    codeUrl: "https://github.com/chad-yao/DRL-for-Minecraft",
  },
  {
    title: "KUKA Teleoperation Tool",
    description:
      "A tool for teleoperating KUKA robots using a spacemouse in both real world and simulation.",
    technologies: ["Python", "ROS"],
    // projectUrl: "https://github.com/chad-yao/KUKA-Controller",
    imageUrl:
      "/images/kuka.gif",
    codeUrl: "https://github.com/chad-yao/KUKA-Controller",
  },
];
