import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif, PT_Serif } from "next/font/google";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";
import { AdvancedMouseEffects } from "@/components/advanced-mouse-effects";
import { MouseTrail } from "@/components/mouse-trail";
import { ThemeProvider } from "@/components/theme-provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: customMetadata.title || aboutMe.name,
  description: customMetadata.description || aboutMe.description.replace(/<[^>]*>/g, ''),
  keywords: ['robotics', 'AI', 'machine learning', 'computer vision', 'autonomous systems', 'research', 'Carnegie Mellon University', 'PhD', 'graduate student'],
  authors: [{ name: aboutMe.name }],
  creator: aboutMe.name,
  publisher: aboutMe.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.chad-yao.com',
    siteName: aboutMe.name,
    title: customMetadata.title || aboutMe.name,
    description: customMetadata.description || aboutMe.description.replace(/<[^>]*>/g, ''),
    images: [
      {
        url: aboutMe.imageUrl ? `https://www.chad-yao.com${aboutMe.imageUrl}` : 'https://www.chad-yao.com/images/selfy.jpeg',
        width: 1200,
        height: 630,
        alt: aboutMe.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: customMetadata.title || aboutMe.name,
    description: customMetadata.description || aboutMe.description.replace(/<[^>]*>/g, ''),
    images: [aboutMe.imageUrl ? `https://www.chad-yao.com${aboutMe.imageUrl}` : 'https://www.chad-yao.com/images/selfy.jpeg'],
    creator: aboutMe.twitterUsername ? `@${aboutMe.twitterUsername}` : undefined,
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL('https://www.chad-yao.com'),
  alternates: {
    canonical: 'https://www.chad-yao.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AdvancedMouseEffects />
          <MouseTrail />
          <main className="">{children}</main>
        <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-[#FFFCF8] dark:bg-neutral-900">
          <div className="flex flex-row mx-auto max-w-7xl px-6 py-12 md:flex md:items-start md:justify-between ">
            <div className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
              <p>
                © {new Date().getFullYear()} {aboutMe.name}.
              </p>
              {aboutMe.secretDescription && (
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-4">
                  {aboutMe.secretDescription}
                </p>
              )}
            </div>
            <div className="mb-4">
              <p className="text-sm text-neutral-500 dark:text-neutral-500 justify">
                Built with{" "}
                <a
                  href="https://github.com/tovacinni/research-website-template"
                  className="underline hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors"
                >
                  research-website-template
                </a>
              </p>
            </div>
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
