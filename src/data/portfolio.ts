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
    title: "WBC2Policy: Whole-Body Mobile Manipulation",
    description:
      "Learn a whole-body mobile manipulation policy using depth and Lidar sensors, without any expert demonstrations.",
    technologies: ["Robot Learning", "Mobile Manipulation", "Whole-Body Control"],
    imageUrl: "/wbc2policy/demo_preview_fast.gif",
    projectUrl: "/wbc2policy",
  },
  {
    title: "Monocular 4D Human Reconstruction",
    description:
      "Extended Shape-of-Motion with synthesized views and MHR tracking priors to improve monocular human reconstruction under fast motion, yielding more stable limbs, better foreground quality, and faster preprocessing.",
    technologies: ["Python", "Gaussian Splatting", "SAM 3D"],
    imageUrl: "/som_sambody3d/merged/motion_coefs_stacked_x2_colorfirst.gif",
    projectUrl: "/som_sambody3d",
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
  {
    title: "HiWE: Hierarchical Waypoint Extraction",
    description:
      "A data preprocessing toolkit for imitation learning that segments demonstrations into key intervals, extracts hierarchical waypoints, and relabels actions to improve downstream policy success rates.",
    technologies: ["Imitation Learning", "Robotics"],
    imageUrl: "/images/clear_ssl_hwe.gif",
    codeUrl: "https://github.com/chad-yao/HiWE",
    // projectUrl: "https://github.com/chad-yao/HiWE",
  },
];
