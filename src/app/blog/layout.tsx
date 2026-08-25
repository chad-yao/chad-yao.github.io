import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Changwei Yao",
  description:
    "Notes by Changwei Yao on robot learning, embodied AI, robotics systems, and life.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Changwei Yao",
    description:
      "Notes by Changwei Yao on robot learning, embodied AI, robotics systems, and life.",
    url: "/blog",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
