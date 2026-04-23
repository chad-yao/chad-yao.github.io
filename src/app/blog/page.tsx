"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Library,
  Orbit,
  Sparkles,
} from "lucide-react";
import { CSSProperties, useEffect, useMemo, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { blogTopics } from "@/data/blog";

const totalBlogs = blogTopics.reduce((sum, topic) => sum + topic.blogs.length, 0);

export default function BlogPage() {
  const [activeTopicId, setActiveTopicId] = useState(blogTopics[0]?.id ?? "");
  const [activeBlogIndex, setActiveBlogIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateViewport = () => setIsDesktop(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => {
      mediaQuery.removeEventListener("change", updateViewport);
    };
  }, []);

  const activeTopic = useMemo(
    () => blogTopics.find((topic) => topic.id === activeTopicId) ?? blogTopics[0],
    [activeTopicId],
  );

  useEffect(() => {
    setActiveBlogIndex(0);
  }, [activeTopicId]);

  if (!activeTopic) {
    return null;
  }

  const currentBlog =
    activeTopic.blogs.length > 0 ? activeTopic.blogs[activeBlogIndex] : null;

  const handlePreviousBlog = () => {
    if (activeTopic.blogs.length === 0) return;

    setActiveBlogIndex((currentIndex) =>
      currentIndex === 0 ? activeTopic.blogs.length - 1 : currentIndex - 1,
    );
  };

  const handleNextBlog = () => {
    if (activeTopic.blogs.length === 0) return;

    setActiveBlogIndex((currentIndex) =>
      currentIndex === activeTopic.blogs.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <div className="min-h-screen bg-[#FFFCF8]/85 text-zinc-900 dark:bg-black/20 dark:text-zinc-100">
      <div className="fixed right-6 top-6 z-50">
        <ThemeToggle />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-16 md:px-8 md:pt-20">
        <header className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-5">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-zinc-600 shadow-sm backdrop-blur-sm dark:border-zinc-700/70 dark:bg-zinc-900/60 dark:text-zinc-300">
              <Orbit className="h-3.5 w-3.5" />
              Topic Cloud
            </p>
            <div className="space-y-4">
              <h1 className="max-w-3xl font-serif text-4xl leading-tight text-zinc-900 dark:text-zinc-50 md:text-5xl">
                Blogs
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                “What I cannot create, I do not understand.” — Richard Feynman
              </p>
            </div>
          </div>

          <div className="grid max-w-md gap-3 sm:grid-cols-2 lg:justify-self-end">
            <div className="rounded-3xl border border-white/40 bg-white/70 px-5 py-4 shadow-sm backdrop-blur-md dark:border-zinc-700/70 dark:bg-zinc-900/60">
              <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                Topics
              </p>
              <p className="mt-3 text-3xl font-light">{blogTopics.length}</p>
            </div>
            <div className="rounded-3xl border border-white/40 bg-white/70 px-5 py-4 shadow-sm backdrop-blur-md dark:border-zinc-700/70 dark:bg-zinc-900/60">
              <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                Blog Links
              </p>
              <p className="mt-3 text-3xl font-light">{totalBlogs}</p>
            </div>
          </div>
        </header>

        <section className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative self-start overflow-hidden rounded-[2rem] border border-white/30 bg-white/50 p-6 shadow-[0_25px_80px_-35px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-zinc-700/50 dark:bg-zinc-900/40 md:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,213,165,0.35),transparent_28%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(244,244,245,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.12),transparent_28%)]" />

            <div className="relative">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                    Floating Topics
                  </p>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                    Pick a bubble to switch the list.
                  </p>
                </div>
                <Sparkles className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
              </div>

              <div className="relative h-[26rem] overflow-hidden rounded-[1.75rem] border border-white/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,248,240,0.2))] dark:border-zinc-700/50 dark:bg-[linear-gradient(180deg,rgba(39,39,42,0.5),rgba(9,9,11,0.24))]">
                <div className="absolute inset-0">
                  <div className="absolute left-[12%] top-[16%] h-40 w-40 rounded-full bg-amber-200/25 blur-3xl dark:bg-amber-400/10" />
                  <div className="absolute right-[12%] top-[10%] h-48 w-48 rounded-full bg-sky-200/25 blur-3xl dark:bg-sky-400/10" />
                  <div className="absolute bottom-[8%] left-[35%] h-44 w-44 rounded-full bg-pink-200/20 blur-3xl dark:bg-pink-400/10" />
                </div>

                {blogTopics.map((topic, index) => {
                  const isActive = topic.id === activeTopic.id;
                  const bubbleSize = isDesktop
                    ? topic.bubble.desktopSize
                    : topic.bubble.mobileSize;
                  const bubbleStyle: CSSProperties = {
                    left: topic.bubble.left,
                    top: topic.bubble.top,
                    width: `${bubbleSize}px`,
                    height: `${bubbleSize}px`,
                    color: topic.bubble.textColor,
                    background: topic.bubble.background,
                    animationDelay: `${index * 0.9}s`,
                    animationDuration: `${8 + index * 1.2}s`,
                    boxShadow: isActive
                      ? `0 0 0 4px rgba(255,255,255,0.28), 0 22px 50px -18px ${topic.bubble.glowColor}`
                      : `0 18px 40px -20px ${topic.bubble.glowColor}`,
                  };

                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setActiveTopicId(topic.id)}
                    className={[
                        "absolute z-10 flex flex-col items-center justify-center rounded-full border text-center shadow-lg transition-all duration-500",
                        "animate-[float_9s_ease-in-out_infinite]",
                        isActive
                          ? "scale-110 border-white/45 dark:border-zinc-100/20"
                          : "border-white/25 hover:scale-105 hover:border-white/45 dark:border-zinc-100/10",
                        "backdrop-blur-xl",
                      ].join(" ")}
                      style={bubbleStyle}
                      aria-pressed={isActive}
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-[10%] rounded-full blur-xl"
                        style={{
                          backgroundColor: topic.bubble.glowColor,
                          opacity: isActive ? 0.95 : 0.7,
                        }}
                      />
                      <span className="pointer-events-none absolute inset-0 rounded-full bg-white/10 dark:bg-white/5" />
                      <span className="pointer-events-none absolute inset-[1px] rounded-full border border-white/20 dark:border-white/10" />
                      <span className="pointer-events-none absolute left-[16%] top-[14%] h-[26%] w-[26%] rounded-full bg-white/28 blur-md dark:bg-white/12" />
                      <span className="pointer-events-none absolute right-[18%] top-[22%] h-[12%] w-[12%] rounded-full bg-white/18 blur-sm dark:bg-white/10" />
                      <span className="pointer-events-none relative z-10 px-3 text-sm font-semibold tracking-wide md:text-base">
                        {topic.name}
                      </span>
                      <span className="pointer-events-none relative z-10 mt-1 px-4 text-[10px] leading-4 opacity-80 md:text-[11px]">
                        {topic.blogs.length} blog{topic.blogs.length === 1 ? "" : "s"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="self-start rounded-[2rem] border border-white/30 bg-white/70 p-6 shadow-[0_25px_80px_-35px_rgba(15,23,42,0.5)] backdrop-blur-xl dark:border-zinc-700/50 dark:bg-zinc-900/60 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3">
                <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                  Selected Topic
                </p>
                <div>
                  <h2 className="font-serif text-3xl text-zinc-900 dark:text-zinc-50">
                    {activeTopic.name}
                  </h2>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                    {activeTopic.tagline}
                  </p>
                </div>
              </div>
              <div className="rounded-full border border-zinc-200/80 bg-zinc-50/80 p-3 dark:border-zinc-700 dark:bg-zinc-800/80">
                <Library className="h-4 w-4 text-zinc-500 dark:text-zinc-300" />
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
              {activeTopic.description}
            </p>

            <div className="mt-8 space-y-4">
              {currentBlog ? (
                <>
                  {activeTopic.blogs.length > 1 && (
                    <div className="flex items-center justify-between gap-4 rounded-2xl border border-zinc-200/80 bg-zinc-50/80 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-900/40">
                      <button
                        type="button"
                        onClick={handlePreviousBlog}
                        className="inline-flex items-center gap-2 rounded-full border border-zinc-300/80 bg-white/90 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-950/70 dark:text-zinc-300 dark:hover:border-zinc-300 dark:hover:text-zinc-100"
                      >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        Prev
                      </button>
                      <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                        {activeBlogIndex + 1} / {activeTopic.blogs.length}
                      </p>
                      <button
                        type="button"
                        onClick={handleNextBlog}
                        className="inline-flex items-center gap-2 rounded-full border border-zinc-300/80 bg-white/90 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-950/70 dark:text-zinc-300 dark:hover:border-zinc-300 dark:hover:text-zinc-100"
                      >
                        Next
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  )}

                  <div
                    key={`${activeTopic.id}-${activeBlogIndex}-${currentBlog.title}`}
                    className="animate-[blog-card-enter_320ms_ease-out]"
                  >
                    <a
                      href={currentBlog.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-2xl border border-zinc-200/80 bg-white/85 p-5 transition hover:-translate-y-0.5 hover:border-zinc-900 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-950/50 dark:hover:border-zinc-300"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                            {currentBlog.publishedAt}
                          </p>
                          <h3 className="mt-2 text-base font-medium text-zinc-900 dark:text-zinc-50">
                            {currentBlog.title}
                          </h3>
                        </div>
                        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
                      </div>
                      <p className="mt-3 text-[12px] leading-6 text-zinc-600 dark:text-zinc-300">
                        {currentBlog.summary}
                      </p>
                    </a>
                  </div>
                </>
              ) : (
                <div className="rounded-2xl border border-dashed border-zinc-300/90 bg-zinc-50/60 p-6 text-sm leading-7 text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-300">
                  No blog links in this topic yet. Add them in
                  {" "}
                  <code>src/data/blog.ts</code>
                  {" "}
                  and they will appear here automatically.
                </div>
              )}
            </div>

            <div className="mt-8 border-t border-zinc-200/80 pt-5 dark:border-zinc-800">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
              >
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
