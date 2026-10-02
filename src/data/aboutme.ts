export interface AboutMe {
  name: string;
  chineseName?: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  resumeUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Changwei (Chad) Yao",
  chineseName: "姚昌伟",
  title: "ROBOTICS RESEARCH INTERN",
  institution: "Flexion",
  // Note that links work in the description
  description:
    "I am a Robotics Research Intern at Flexion. Previously, I was a master's student in Information Systems at Carnegie Mellon University, advised by <a href='https://www.ece.cmu.edu/directory/bios/savvides-marios.html' target='_blank'>Prof. Marios Savvides</a>. I also worked with <a href='https://www.ri.cmu.edu/ri-faculty/ji-zhang/' target='_blank'>Prof. Ji Zhang</a> in the Robotics Institute. My research focuses on <strong style='color: red;'>building autonomous, intelligent, general-purpose robots</strong> to help people live better, as well as designing safer human-robot interaction systems.<br><br>" +
    "Previously, I received my bachelor degree from CSEE, Hunan University, advised by <a href='https://scholar.google.com/citations?user=VLoDl_UAAAAJ&hl=en' target='_blank'>Prof. Wenqiang Jin</a>. I also spent one year to work with <a href='https://scholar.google.com/citations?user=HQ6j-KsAAAAJ&hl=en' target='_blank'>Prof. Wei Zhang</a> in Control & Learning for Robotics and Autonomy Lab at Southern University of Science and Technology.<br><br>",
    // "<strong style='color: red;'>I am actively seeking PhD opportunities to further advance my research in robotics and AI. Welcome to reach out to me!</strong>",

  funDescription: "I love hiking, traveling, and photography.",
  email: "changwey@andrew.cmu.edu",
  imageUrl:
    "/images/selfy.jpeg",
  googleScholarUrl: "https://scholar.google.com/citations?user=MHc5a8AAAAAJ&hl=en",
  githubUsername: "chad-yao",
  linkedinUsername: "changwei-yao-36815b212",
  twitterUsername: "changweiyao77",
  blogUrl: "/blog",
  cvUrl: "/files/cv.pdf",
  resumeUrl: "/files/resume.pdf",
  // institutionUrl: "https://www.stanford.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
