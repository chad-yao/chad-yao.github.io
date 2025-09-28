export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Sep. 2024 - Now",
    title: "Research Intern",
    company: "CyLab Biometrics Center, CMU",
    description:
      "Enabled LLM to decompose manipulation tasks with Graph of Thoughts, helping LLM design more effective reward functions for RL agent in simulation. Finding a way to align the affordance map and language with the first observed frame of the task. Exploring better methods to enable the low-level controller to guide actions more effectively within the VLA framework.",
    advisor: "Prof. Marios Savvides",
    companyUrl: "https://www.cylab.cmu.edu/",
  },
  {
    date: "Sep. 2024 - Mar. 2025",
    title: "Research Intern",
    company: "Zhang Lab, CMU",
    description:
      "Introduced a unified scene graph to track objects over time, which allows a robot to build an abstract metric-semantic representation. Leverage open-vocabulary 3D semantics network to support the detection and tracking of both short-term and long-term dynamic objects.",
    advisor: "Prof. Ji Zhang",
    companyUrl: "https://www.ri.cmu.edu/",
  },
  {
    date: "Jun. 2023 - Jun. 2024",
    title: "Research Assistant",
    company: "Control & Learning for Robotics and Autonomy Lab, SUSTech",
    description:
      "Implemented a distillation method for Diffusion Policy, enhancing inference speed for efficient, low-latency visuomotor control in resource-constrained robots. Explored a novel data augmentation method using model-free optimization for imitation learning.",
    advisor: "Prof. Wei Zhang",
    // companyUrl: "https://www.sustech.edu.cn/",
  },
];
