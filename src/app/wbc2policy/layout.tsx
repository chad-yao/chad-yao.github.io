import type { Metadata } from "next";

const title =
  "Whole-Body Mobile Manipulation for Grasping | Changwei Yao";
const description =
  "A controller-guided learning framework for vision-based whole-body mobile manipulation and dexterous grasping.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/wbc2policy",
  },
  openGraph: {
    title,
    description,
    url: "/wbc2policy",
  },
};

export default function Wbc2PolicyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
