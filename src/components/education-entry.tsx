import Image from "next/image";
import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
  return (
    <div>
      <div className="grid grid-cols-[104px_minmax(0,1fr)] gap-x-5 mb-2">
        <div className="flex flex-col items-center pt-1">
          {education.logoUrl ? (
            <Image
              src={education.logoUrl}
              alt={`${education.institution} logo`}
              width={84}
              height={84}
              className="h-20 w-20 object-contain md:h-[84px] md:w-[84px]"
            />
          ) : (
            <span className="flex h-20 w-20 items-center justify-center text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              EDU
            </span>
          )}
          <span className="mt-2 text-[11px] text-center text-zinc-500 dark:text-zinc-500">
            {education.year}
          </span>
        </div>
        <div className="flex h-20 flex-col justify-center self-start md:h-[84px]">
          <h3 className="text-base mb-1 font-serif text-zinc-900 dark:text-zinc-100">{education.institution}</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{education.degree}</p>
          {education.advisor && (
            <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2 italic">
              Advisor: {education.advisor}
            </p>
          )}
          {education.thesis && (
            <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2 italic">
              Thesis:{" "}
              {education.thesisUrl ? (
                <a
                  href={education.thesisUrl}
                  className="hover:underline text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {education.thesis}
                </a>
              ) : (
                education.thesis
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
