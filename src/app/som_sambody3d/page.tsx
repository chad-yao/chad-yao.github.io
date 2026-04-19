"use client";

import { useState } from "react";
import Link from "next/link";

const videoVariants = [
  { key: "rgbs", label: "RGB Frames" },
  { key: "depths", label: "Depth" },
  { key: "masks", label: "Foreground Masks" },
  { key: "normals", label: "Surface Normals" },
  { key: "tracks_2d", label: "2D Tracks" },
  { key: "motion_coefs", label: "Motion Coefficients" },
];

export default function SomSambody3DPage() {
  const [selectedVariantKey, setSelectedVariantKey] = useState<string>("rgbs");
  const selectedVariant =
    videoVariants.find((variant) => variant.key === selectedVariantKey) ??
    videoVariants[0];

  return (
    <div className="min-h-screen bg-[#FFFCF8]/95 dark:bg-black/40">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 pb-24 pt-16 md:px-8 md:pt-20">
        {/* Hero */}
        <header className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            Project Page
          </p>
          <h1 className="font-serif text-3xl leading-snug text-zinc-900 dark:text-zinc-50 md:text-4xl">
            Completing Dynamic Human Reconstruction with{" "}
            <span className="whitespace-nowrap">I2V-Synthesized</span> Views
          </h1>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            Zhewen Zheng, Changwei Yao, Aman Goel
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Carnegie Mellon University
          </p>

          <div className="flex flex-wrap gap-3 pt-2 text-xs">
            <Link
              href="/som_sambody3d/project_report.pdf"
              className="rounded-full border border-zinc-300 bg-white/80 px-4 py-2 text-xs font-medium text-zinc-900 shadow-sm transition hover:border-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-50 dark:hover:border-zinc-200 dark:hover:bg-zinc-800"
            >
              Paper (PDF)
            </Link>
            <Link
              href="https://github.com/chad-yao"
              className="rounded-full border border-transparent bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-50 shadow-sm transition hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Code (coming soon)
            </Link>
          </div>
        </header>

        {/* Teaser / Abstract */}
        <section className="space-y-4 rounded-2xl border border-zinc-200 bg-white/80 p-6 text-sm leading-relaxed text-zinc-800 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-200">
          <h2 className="font-serif text-sm uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Abstract
          </h2>
          <p>
            Reconstructing dynamic human avatars from a single monocular video is fundamentally
            ill-posed due to depth ambiguity, self-occlusion, and unstable 2D point tracks under
            fast motion. We present a practical framework that combines generative view
            augmentation with human-aware 3D tracking to improve monocular 4D reconstruction
            quality within the Shape-of-Motion (SoM) pipeline.
          </p>
          <p>
            A commercial image-to-video diffusion model synthesizes a smooth turnaround sequence
            from a pseudo-canonical frame, exposing geometry that is never observed in the
            original capture. We further incorporate structured correspondences from the
            Momentum Human Rig (MHR), which provides stable body-aware 3D tracks and reduces
            drift and fragmentation compared to standard 2D tracking. These improved priors
            supervise SoM optimization through photometric, depth, and motion objectives,
            yielding more consistent human avatars over time.
          </p>
          <p>
            On DNA-Rendering sequences, our method produces measurably better foreground PSNR
            and qualitatively more stable reconstructions than baselines, while also reducing
            preprocessing time by an order of magnitude.
          </p>
        </section>

        {/* Pipeline */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-lg tracking-wide text-zinc-900 dark:text-zinc-50">
              Shape-of-Motion Pipeline
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Method Overview
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70">
            <div className="relative">
              <img
                src="/som_sambody3d/3d_pipeline.png"
                alt="Shape-of-Motion pipeline for monocular 4D human reconstruction"
                width={1280}
                height={700}
                className="h-auto w-full"
                suppressHydrationWarning
              />
            </div>
            <p className="border-t border-zinc-200 px-5 py-3 text-[11px] leading-relaxed text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
              Our pipeline combines generative view augmentation, SAM-3D-Body based 3D tracking,
              and a depth prior to supervise Shape-of-Motion (SoM) optimization of canonical 3D
              Gaussians and SE(3) motion bases, producing high-fidelity 4D human avatars from a
              single monocular video.
            </p>
          </div>
        </section>

        {/* Method summary */}
        <section className="space-y-4 rounded-2xl border border-zinc-200 bg-white/80 p-6 text-sm leading-relaxed text-zinc-800 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-200">
          <h2 className="font-serif text-sm uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Method
          </h2>
          <p>
            Our method is built on the Shape-of-Motion (SoM) framework, but augments it with
            stronger supervision from both generative models and human-aware tracking. Given a
            monocular input video, we first select a pseudo-canonical frame and feed it to a
            commercial image-to-video diffusion model to synthesize a smooth, palindromic
            turnaround sequence of the subject.
          </p>
          <p>
            In parallel, we run SAM-3D-Body and the Momentum Human Rig (MHR) to extract
            temporally-stable, body-anchored 3D correspondences, which serve as robust motion
            anchors even under fast articulation and self-occlusion. A depth network provides
            smooth depth maps that act as a geometric prior. These augmented views, tracks, and
            depths jointly supervise SoM optimization of canonical 3D Gaussians and low-rank
            SE(3) motion bases.
          </p>
          <p>
            By constraining SoM with generative coverage of unseen views and structured human
            priors, our approach reduces drift and fragmentation, leading to more consistent
            4D human avatars and improved foreground reconstruction quality.
          </p>
        </section>

        {/* Qualitative comparisons */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-lg tracking-wide text-zinc-900 dark:text-zinc-50">
              Qualitative Comparisons
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Baseline vs. Ours
            </p>
          </div>

          <div className="space-y-5 rounded-2xl border border-zinc-200 bg-white/80 p-5 text-xs text-zinc-700 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300">
            <p>
              We compare our method against a baseline Shape-of-Motion configuration without
              generative view augmentation or MHR-based tracking. Each row shows a specific
              modality rendered over time; videos on the left are from the baseline, while
              videos on the right are produced by our full model.
            </p>

            <div className="mt-4 space-y-4">
              <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
                <label className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-600 dark:text-zinc-400">
                  Modality
                </label>
                <select
                  className="w-full max-w-xs border border-zinc-300 bg-white px-3 py-2 text-[11px] text-zinc-800 shadow-sm outline-none transition focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-zinc-200 dark:focus:ring-zinc-200"
                  value={selectedVariantKey}
                  onChange={(event) => setSelectedVariantKey(event.target.value)}
                >
                  {videoVariants.map((variant) => (
                    <option key={variant.key} value={variant.key}>
                      {variant.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2 rounded-xl border border-zinc-200/70 bg-zinc-50/70 p-3 dark:border-zinc-800/80 dark:bg-zinc-900/60">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-600 dark:text-zinc-400">
                    {selectedVariant.label}
                  </p>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-500">
                    Baseline (left) vs. Ours (right)
                  </p>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <figure className="space-y-1">
                    <video
                      src={`/som_sambody3d/baseline/${selectedVariant.key}.mp4`}
                      className="w-full rounded-lg border border-zinc-200/80 bg-black/90 dark:border-zinc-800"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                    />
                    <figcaption className="text-[10px] text-zinc-500 dark:text-zinc-500">
                      Baseline SoM pipeline
                    </figcaption>
                  </figure>
                  <figure className="space-y-1">
                    <video
                      src={`/som_sambody3d/ours/${selectedVariant.key}.mp4`}
                      className="w-full rounded-lg border border-emerald-200/90 bg-black/90 dark:border-emerald-500/60"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                    />
                    <figcaption className="text-[10px] text-emerald-700 dark:text-emerald-300/80">
                      Ours: generative views + MHR tracking
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Takeaways */}
        <section className="space-y-4 rounded-2xl border border-zinc-200 bg-white/80 p-6 text-sm text-zinc-800 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-200">
          <h2 className="font-serif text-sm uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Key Contributions
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Generative view augmentation using an image-to-video diffusion model to synthesize
              smooth turnaround sequences from monocular input.
            </li>
            <li>
              Human-aware 3D tracking via Momentum Human Rig (MHR), providing stable,
              body-anchored correspondences that reduce drift compared to generic 2D trackers.
            </li>
            <li>
              Integration of these priors into the Shape-of-Motion pipeline through photometric,
              depth, and motion losses for high-fidelity 4D human avatars.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
