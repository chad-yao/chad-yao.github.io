import type { Metadata } from "next";

const title = "Dynamic Human Reconstruction | Changwei Yao";
const description =
  "Completing dynamic human reconstruction with synthesized views and human-aware 3D tracking.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/som_sambody3d",
  },
  openGraph: {
    title,
    description,
    url: "/som_sambody3d",
  },
};

export default function SomSambody3DLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
