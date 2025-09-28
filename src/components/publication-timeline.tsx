"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Calendar, Award, Star } from "lucide-react";
import { Publication } from "@/data/publication";

interface PublicationTimelineProps {
  publications: Publication[];
}

interface GroupedPublications {
  [year: string]: Publication[];
}

export function PublicationTimeline({ publications }: PublicationTimelineProps) {
  const [expandedYears, setExpandedYears] = useState<Set<string>>(new Set());
  const [showAll, setShowAll] = useState(false);

  // Group publications by year
  const groupedPublications: GroupedPublications = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as GroupedPublications);

  // Sort years in descending order
  const sortedYears = Object.keys(groupedPublications).sort((a, b) => b.localeCompare(a));

  // Show only recent years initially, or all if showAll is true
  const displayYears = showAll ? sortedYears : sortedYears.slice(0, 3);

  const toggleYear = (year: string) => {
    const newExpanded = new Set(expandedYears);
    if (newExpanded.has(year)) {
      newExpanded.delete(year);
    } else {
      newExpanded.add(year);
    }
    setExpandedYears(newExpanded);
  };

  const getYearColor = (year: string) => {
    const currentYear = new Date().getFullYear().toString();
    if (year === currentYear) return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200";
    if (parseInt(year) >= parseInt(currentYear) - 1) return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200";
    return "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300";
  };

  const getConferenceColor = (conference: string) => {
    if (conference.toLowerCase().includes("submission")) {
      return "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200";
    }
    if (conference.toLowerCase().includes("best") || conference.toLowerCase().includes("award")) {
      return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200";
    }
    return "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300";
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          <Calendar size={20} />
          Publication Timeline
        </h3>
        {sortedYears.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors flex items-center gap-1"
          >
            {showAll ? (
              <>
                Show Recent <ChevronUp size={16} />
              </>
            ) : (
              <>
                Show All <ChevronDown size={16} />
              </>
            )}
          </button>
        )}
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-700"></div>

        <div className="space-y-8">
          {displayYears.map((year, yearIndex) => {
            const yearPublications = groupedPublications[year];
            const isExpanded = expandedYears.has(year);
            const isLastYear = yearIndex === displayYears.length - 1;

            return (
              <div key={year} className="relative">
                {/* Year marker */}
                <div className="flex items-center gap-4">
                  <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold ${getYearColor(year)}`}>
                    {year}
                  </div>
                  <div className="flex-1">
                    <button
                      onClick={() => toggleYear(year)}
                      className="flex items-center gap-2 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 p-2 rounded-lg transition-colors w-full"
                    >
                      <span className="font-serif text-lg text-zinc-900 dark:text-zinc-100">
                        {year} ({yearPublications.length} publication{yearPublications.length !== 1 ? 's' : ''})
                      </span>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>
                </div>

                {/* Publications for this year */}
                {isExpanded && (
                  <div className="ml-16 mt-4 space-y-4">
                    {yearPublications.map((publication, pubIndex) => (
                      <div
                        key={pubIndex}
                        className={`border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow ${
                          publication.highlight
                            ? 'bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border border-zinc-200 dark:border-zinc-700'
                            : 'bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getConferenceColor(publication.conference)}`}>
                                {publication.conference}
                              </span>
                              {publication.highlight && (
                                <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full border border-orange-200 dark:border-orange-700">
                                  <Star size={12} className="fill-current" />
                                  Featured
                                </span>
                              )}
                              {publication.award && (
                                <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
                                  <Award size={12} />
                                  {publication.award}
                                </span>
                              )}
                            </div>
                            <h4 className="font-serif text-base text-zinc-900 dark:text-zinc-100 mb-2">
                              {publication.title}
                            </h4>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                              {publication.authors}
                            </p>
                            {publication.keywords && publication.keywords.length > 0 && (
                              <div className="flex flex-wrap gap-1 mb-3">
                                {publication.keywords.map((keyword, keyIndex) => (
                                  <span
                                    key={keyIndex}
                                    className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-md"
                                  >
                                    {keyword}
                                  </span>
                                ))}
                              </div>
                            )}
                            <div className="flex gap-4">
                              {publication.paperUrl && (
                                <a
                                  href={publication.paperUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors"
                                >
                                  📄 Paper
                                </a>
                              )}
                              {publication.codeUrl && (
                                <a
                                  href={publication.codeUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors"
                                >
                                  💻 Code
                                </a>
                              )}
                              {publication.bibtex && (
                                <a
                                  href={publication.bibtex}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors"
                                >
                                  📚 BibTeX
                                </a>
                              )}
                            </div>
                          </div>
                          {publication.imageUrl && (
                            <div className="w-20 h-20 flex-shrink-0">
                              <img
                                src={publication.imageUrl}
                                alt={publication.title}
                                className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-out hover:shadow-xl hover:scale-110 will-change-transform"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
