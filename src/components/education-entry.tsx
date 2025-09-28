import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-2 mb-2">
        <span className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">{education.year}</span>
        <div className="col-span-3">
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
