export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
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
  title: "MASTER STUDENT",
  institution: "Carnegie Mellon University",
  // Note that links work in the description
  description:
    "I am a Master student in Information System at Carnegie Mellon University, advised by <a href='https://www.ece.cmu.edu/directory/bios/savvides-marios.html' target='_blank'>Prof. Marios Savvides</a> and <a href='https://www.ri.cmu.edu/ri-faculty/ji-zhang/' target='_blank'>Prof. Ji Zhang</a>. Currently, my research interests mainly focus on <strong style='color: red;'>buildingautonomous, intelligent, general-purpose robots</strong> to help human live better. And I am also exploring how to design a safer robot-human interaction system.<br><br>" +
    "Previously, I received my bachelor degree from CSEE, Hunan University, advised by <a href='https://scholar.google.com/citations?user=VLoDl_UAAAAJ&hl=en' target='_blank'>Prof. Wenqiang Jin</a>. I also spent one year to work with <a href='https://scholar.google.com/citations?user=HQ6j-KsAAAAJ&hl=en' target='_blank'>Prof. Wei Zhang</a> in Control & Learning for Robotics and Autonomy Lab at Southern University of Science and Technology.<br><br>" +
    "<strong style='color: red;'>I am actively seeking PhD opportunities to further advance my research in robotics and AI. Welcome to reach out to me!</strong>",

  funDescription: "I love hiking, traveling, and photography.",
  email: "changwey@andrew.cmu.edu",
  imageUrl:
    "/images/selfy.jpeg",
  googleScholarUrl: "https://scholar.google.com/citations?user=MHc5a8AAAAAJ&hl=en",
  githubUsername: "chad-yao",
  linkedinUsername: "changwei-yao-36815b212",
  twitterUsername: "ChadRealrealyiu",
  blogUrl: "www.chad-yao.com",
  cvUrl: "/files/cv.pdf",
  // institutionUrl: "https://www.stanford.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};