"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { BriefcaseBusiness, ExternalLink } from "lucide-react";
import { Experience } from "@/data/experience";

export function ExperienceTimeline({
  experiences,
}: {
  experiences: Experience[];
}) {
  return (
    <VerticalTimeline
      animate={false}
      className="experience-timeline"
      layout="1-column-left"
      lineColor="rgba(161, 161, 170, 0.35)"
    >
      {experiences.map((experience, index) => (
        <VerticalTimelineElement
          key={`${experience.company}-${experience.date}`}
          icon={<BriefcaseBusiness />}
          iconStyle={{
            background: index === 0 ? "#fb923c" : "#27272a",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgba(251, 146, 60, 0.22)",
          }}
          contentStyle={{
            background: "rgba(255, 255, 255, 0.72)",
            border: "1px solid rgba(251, 146, 60, 0.22)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
          }}
        >
          <div className="flex flex-col gap-3 text-left">
            <div className="flex flex-col gap-1.5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-serif text-base text-zinc-900 dark:text-zinc-100">
                  {experience.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-500 sm:text-right">
                  {experience.date}
                </p>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {experience.companyUrl ? (
                  <a
                    href={experience.companyUrl}
                    className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {experience.company}
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  experience.company
                )}
              </p>

              {(experience.advisor || experience.manager) && (
                <p className="text-xs italic text-zinc-500 dark:text-zinc-500">
                  {experience.advisor
                    ? `Advisor: ${experience.advisor}`
                    : `Manager: ${experience.manager}`}
                </p>
              )}
            </div>

            {experience.highlights && experience.highlights.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {experience.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            )}
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
