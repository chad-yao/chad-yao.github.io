import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";
import { Portfolio } from "@/data/portfolio";
import { ShineBorder } from "./shine-border";

export function PortfolioEntry({ portfolio }: { portfolio: Portfolio }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-6 ${portfolio.highlight ? 'relative overflow-hidden bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-4 rounded-lg shadow-sm border border-orange-200/70 dark:border-orange-700/50' : ''}`}>
      {portfolio.highlight && (
        <>
          <ShineBorder
            borderWidth={2}
            duration={10}
            shineColor={["#f97316", "#facc15", "#fb7185"]}
          />
          <div className="absolute bottom-2 left-2 z-10 flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 rounded-md border border-orange-200 dark:border-orange-700 shadow-sm">
            <Star size={12} className="text-orange-600 dark:text-orange-400 fill-current" />
            <span className="text-xs text-orange-700 dark:text-orange-300 font-medium">Featured</span>
          </div>
        </>
      )}
      {portfolio.imageUrl && (
        <div className="w-1/4 min-w-[160px] relative overflow-visible">
          <Image
            src={portfolio.imageUrl}
            alt={portfolio.title}
            width={160}
            height={200}
            className="rounded-lg transition-transform duration-500 ease-out hover:shadow-xl hover:scale-110 will-change-transform"
            unoptimized={portfolio.imageUrl.toLowerCase().endsWith('.gif')}
          />
        </div>
      )}
      <div className="flex flex-col flex-1">
        <div className="flex flex-row gap-4 items-center mb-3">
          <h3 className="font-serif text-md text-zinc-900 dark:text-zinc-100">
            {portfolio.projectUrl ? (
              <a
                href={portfolio.projectUrl}
                className="group inline-flex items-center gap-2 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors duration-300"
              >
                {portfolio.title}
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </a>
            ) : (
              portfolio.title
            )}
          </h3>
        </div>

        {portfolio.technologies && (
          <div className="flex gap-2 mb-4 flex-wrap">
            {portfolio.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs text-zinc-600 dark:text-zinc-400 px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-6">
          {portfolio.projectUrl && (
            <a
              href={portfolio.projectUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Project</span>
            </a>
          )}
          {portfolio.codeUrl && (
            <a
              href={portfolio.codeUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Code</span>
            </a>
          )}
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 mt-4 italic">
          {portfolio.description}
        </p>
      </div>
    </div>
  );
}
