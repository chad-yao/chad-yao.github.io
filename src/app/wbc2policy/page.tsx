"use client";

import Image from "next/image";
import Link from "next/link";

const resultVideos = [
  {
    src: "/wbc2policy/demo.mp4",
  },
  {
    title: "Whole-Body Controller Rollout",
    src: "/wbc2policy/wbc_rollout.mp4",
    caption:
      "Use controller-guided free-space motion couples the RL policy to collect data.",
  },
  {
    title: "Single-Object Active Vision",
    src: "/wbc2policy/single_object_active_vision.mp4",
    caption:
      "The robot actively reorients the camera to keep the target visible during approach and pre-grasp alignment.",
  },
  {
    title: "Multi-Object Picking",
    src: "/wbc2policy/multi_objects_pick.mp4",
    caption:
      "A single whole-body policy generalizes across objects and cluttered arrangements while preserving safe motion.",
  },
];

const localPolicyVideos = [
  {
    title: "Local RL Teacher 1",
    src: "/wbc2policy/local_rl_1.mp4",
  },
  {
    title: "Local RL Teacher 2",
    src: "/wbc2policy/local_rl_2.mp4",
  },
  {
    title: "Local RL Teacher 3",
    src: "/wbc2policy/local_rl_3.mp4",
  },
];

const ablationFigures = [
  {
    title: "Training Reward",
    src: "/wbc2policy/rl_training.png",
    alt: "Training reward curves comparing the full system, no active vision, and a direct joint-space policy.",
    caption:
      "The full controller-guided system reaches the highest reward, while removing active vision or directly learning joint-space control leads to worse optimization.",
  },
  {
    title: "Lifting Success Rate",
    src: "/wbc2policy/success_rate.png",
    alt: "Lifting success curves comparing the full system, no active vision, and a direct joint-space policy.",
    caption:
      "Active vision and structured whole-body control both matter: the full system reaches near-perfect lifting success, while direct joint-space learning trails far behind.",
  },
];

export default function Wbc2PolicyPage() {
  const [teaserVideo, wbcRolloutVideo, ...qualitativeVideos] = resultVideos;

  return (
    <div className="min-h-screen bg-[#FFFCF8]/95 dark:bg-black/40">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 pb-24 pt-16 md:px-8 md:pt-20">
        <header className="space-y-6">
          <h1 className="font-serif text-3xl leading-snug text-zinc-900 dark:text-zinc-50 md:text-4xl">
            Towards Learning Whole-Body Mobile Manipulation for Grasping Any
            Object Anywhere
          </h1>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            Jason Liu, Changwei Yao, Andrew Wang
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Carnegie Mellon University
          </p>

          <div className="flex flex-wrap gap-3 pt-2 text-xs">
            <Link
              href="/wbc2policy/Mobile_Manipulation_Final_Project.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-4 py-2 text-xs font-medium text-zinc-900 shadow-sm transition hover:border-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-50 dark:hover:border-zinc-200 dark:hover:bg-zinc-800"
            >
              <span aria-hidden="true" className="inline-flex h-4 w-4 items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path
                    d="M7 3.5h7l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V5A1.5 1.5 0 0 1 7.5 3.5Z"
                    fill="#EF4444"
                  />
                  <path d="M14 3.5v4h4" fill="#FCA5A5" />
                  <path
                    d="M9 15.25h6M9 18h4.5"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              Project Report
            </Link>
            <Link
              href="https://docs.google.com/presentation/d/14gM2pyhakRPAUOQWZ3VS3xy9hgRAatjilXHu0VEiTRo/edit?usp=sharing"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-4 py-2 text-xs font-medium text-zinc-900 shadow-sm transition hover:border-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-50 dark:hover:border-zinc-200 dark:hover:bg-zinc-800"
            >
              <span aria-hidden="true" className="inline-flex h-4 w-4 items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path
                    d="M6.75 3.5h8.5l3 3V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5.25 20V5A1.5 1.5 0 0 1 6.75 3.5Z"
                    fill="#F59E0B"
                  />
                  <path d="M15.25 3.5v3h3" fill="#FCD34D" />
                  <rect x="8" y="11" width="1.75" height="6" rx=".875" fill="white" />
                  <rect x="11.125" y="9" width="1.75" height="8" rx=".875" fill="white" />
                  <rect x="14.25" y="13" width="1.75" height="4" rx=".875" fill="white" />
                </svg>
              </span>
              Google Slide
            </Link>
          </div>
        </header>

        <section className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-lg tracking-wide text-zinc-900 dark:text-zinc-50">
              Full System Demo
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Teaser
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70">
            <video
              src={teaserVideo.src}
              className="block w-full bg-black/90"
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>
        </section>

        <section className="space-y-4 rounded-2xl border border-zinc-200 bg-white/80 p-6 text-sm leading-relaxed text-zinc-800 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-200">
          <h2 className="font-serif text-sm uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
            Abstract
          </h2>
          <p>
            Generalizable whole-body mobile manipulation is challenging because
            robots must coordinate navigation, active perception, collision
            avoidance, and dexterous interaction under partial observability. In
            this project, we present a fully simulation-based framework for
            learning mobile dexterous grasping without human demonstrations.
          </p>
          <p>
            Our key idea is to decompose the task into free-space motion and
            contact-rich local interaction. A GPU-vectorized whole-body
            controller coordinates end-effector reaching, active vision, and
            collision avoidance, while local reinforcement learning policies
            focus on dexterous contact behavior near the object.
          </p>
          <p>
            We then distill these controller-guided teachers into a single
            vision-based student policy that directly controls the mobile base,
            arm, hand, and active camera from onboard point clouds and
            proprioception. The resulting policy demonstrates robust whole-body
            grasping behavior across diverse objects and scenes.
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-lg tracking-wide text-zinc-900 dark:text-zinc-50">
              System Overview
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Platform
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70">
            <Image
              src="/wbc2policy/robot_platform.png"
              alt="Mobile manipulation platform with a holonomic base, Franka Panda arm, LEAP hand, and active-vision neck camera."
              width={1600}
              height={900}
              className="h-auto w-full"
            />
            <p className="border-t border-zinc-200 px-5 py-3 text-[11px] leading-relaxed text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
              Our 32-DoF platform combines a holonomic mobile base, 7-DoF arm,
              16-DoF dexterous hand, and a 6-DoF active-vision neck carrying an Intel RealSense D435
              camera, together with onboard Unitree L2 3 LiDAR for scene geometry.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-lg tracking-wide text-zinc-900 dark:text-zinc-50">
              Free-Space Control
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Controller
            </p>
          </div>

          <div className="space-y-5 rounded-2xl border border-zinc-200 bg-white/80 p-5 text-xs text-zinc-700 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300">
            <p>
              We first solve the free-space phase with a GPU-vectorized
              whole-body controller. It coordinates end-effector reaching, active
              camera gaze, and collision avoidance before contact, so learning
              does not need to rediscover these high-level whole-body behaviors
              from scratch.
            </p>

            <div className="overflow-hidden rounded-xl border border-zinc-200/70 bg-zinc-50/70 dark:border-zinc-800/80 dark:bg-zinc-900/60">
              <Image
                src="/wbc2policy/fs_motion.png"
                alt="Whole-body controller objectives including reaching, vision gaze control, and collision avoidance."
                width={1600}
                height={900}
                className="h-auto w-full"
              />
              <p className="border-t border-zinc-200 px-5 py-3 text-[11px] leading-relaxed text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                The controller provides geometric priors for whole-body motion,
                aligning the end effector, keeping the target in view, and
                avoiding collisions throughout the approach phase.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-lg tracking-wide text-zinc-900 dark:text-zinc-50">
              Local RL Policy Training
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Contact-Rich Interaction
            </p>
          </div>

          <div className="space-y-5 rounded-2xl border border-zinc-200 bg-white/80 p-5 text-xs text-zinc-700 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300">
            <p>
              These local teacher policies specialize in short-horizon dexterous
              interaction near the object. By training the final grasp stage
              separately, the overall learning problem becomes substantially more
              stable and data efficient.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {localPolicyVideos.map((video) => (
                <figure key={video.src} className="space-y-2">
                  <video
                    src={video.src}
                    className="w-full rounded-lg border border-zinc-200/80 bg-black/90 dark:border-zinc-800"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                  />
                  <figcaption className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500">
                    {video.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-lg tracking-wide text-zinc-900 dark:text-zinc-50">
              WBC Policy Rollout
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Data Collection
            </p>
          </div>

          <div className="space-y-5">
            <figure className="space-y-0 overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70">
              <video
                src={wbcRolloutVideo.src}
                className="w-full bg-black/90"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
              <figcaption className="border-t border-zinc-200 px-5 py-3 text-[11px] leading-relaxed text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                {wbcRolloutVideo.caption}
              </figcaption>
            </figure>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70">
              <div className="grid gap-0 md:grid-cols-[1.15fr_0.85fr]">
                <Image
                  src="/wbc2policy/depth_lidar.png"
                  alt="Point-cloud observations from onboard depth camera and LiDAR."
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover"
                />
                <div className="border-t border-zinc-200 px-5 py-4 text-[11px] leading-relaxed text-zinc-600 dark:border-zinc-800 dark:text-zinc-400 md:border-l md:border-t-0 md:px-6 md:py-5">
                  During rollout generation, we additionally save depth and
                  LiDAR observations so the later student policy can be
                  distilled from realistic onboard sensing rather than
                  privileged simulator state.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-lg tracking-wide text-zinc-900 dark:text-zinc-50">
              Distillation Pipeline
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Method Overview
            </p>
          </div>

        <div className="overflow-hidden rounded-xl border border-zinc-200/70 bg-zinc-50/70 dark:border-zinc-800/80 dark:bg-zinc-900/60">
            <Image
            src="/wbc2policy/distillation_framework.png"
            alt="Visual distillation pipeline showing teacher policy, whole-body controller, point-set abstraction, transformer encoder, and student policy."
            width={1400}
            height={900}
            className="h-auto w-full"
            />
            <p className="border-t border-zinc-200 px-5 py-3 text-[11px] leading-relaxed text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
            Teacher rollouts from the whole-body controller and local dexterous
            policies are distilled into a single student that acts from onboard
            point clouds, proprioception, and target conditioning.
            </p>
        </div>
        </section>

        <section id="results" className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-lg tracking-wide text-zinc-900 dark:text-zinc-50">
              Qualitative Results
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Final Policy
            </p>
          </div>

          <div className="space-y-5 rounded-2xl border border-zinc-200 bg-white/80 p-5 text-xs text-zinc-700 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300">
            <p>
              The final distilled policy exhibits active vision and robust
              whole-body grasping across both single-object and multi-object
              scenarios.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {qualitativeVideos.map((video) => (
                <figure key={video.src} className="space-y-2">
                  <video
                    src={video.src}
                    className="w-full rounded-lg border border-zinc-200/80 bg-black/90 dark:border-zinc-800"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                  />
                  <figcaption className="space-y-1">
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-600 dark:text-zinc-400">
                      {video.title}
                    </p>
                    <p className="text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-500">
                      {video.caption}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-lg tracking-wide text-zinc-900 dark:text-zinc-50">
              Simulation Ablations
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Quantitative Results
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {ablationFigures.map((figure) => (
              <div
                key={figure.src}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70"
              >
                <Image
                  src={figure.src}
                  alt={figure.alt}
                  width={1400}
                  height={900}
                  className="h-auto w-full"
                />
                <div className="border-t border-zinc-200 px-5 py-4 dark:border-zinc-800">
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {figure.title}
                  </p>
                  <p className="mt-2 text-[11px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {figure.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
