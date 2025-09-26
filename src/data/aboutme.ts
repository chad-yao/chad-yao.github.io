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
    "I am a 2nd-year M.S. IS student at the Carnegie Mellon University, advised by Prof. Marios Savvides. Previously, I received B.E. in information security at CSEE of Hunan University, advised by Prof. Wenqiang Jin. I also spent one year to work with Prof. Wei Zhang in Control & Learning for Robotics and Autonomy Lab (CLEAR) at Southern University of Science and Technology." +

    "Goal: Develop autonomous, intelligent robots that help human live better." +

    "Interest: How to build a general, safe and intelligent robot-human interaction system for robots?",

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