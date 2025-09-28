"use client";

import { useState, useMemo } from "react";
import { PublicationEntry } from "./publication-entry";
import { SearchBox } from "./search-box";
import { Publication } from "@/data/publication";

interface PublicationSectionProps {
  publications: Publication[];
}

export function PublicationSection({ publications }: PublicationSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPublications = useMemo(() => {
    if (!searchQuery.trim()) {
      return publications;
    }

    const query = searchQuery.toLowerCase().trim();
    
    return publications.filter((publication) => {
      // Search in title
      if (publication.title.toLowerCase().includes(query)) {
        return true;
      }
      
      // Search in authors
      if (publication.authors.toLowerCase().includes(query)) {
        return true;
      }
      
      // Search in conference
      if (publication.conference.toLowerCase().includes(query)) {
        return true;
      }
      
      // Search in keywords
      if (publication.keywords) {
        const hasMatchingKeyword = publication.keywords.some(keyword =>
          keyword.toLowerCase().includes(query)
        );
        if (hasMatchingKeyword) {
          return true;
        }
      }
      
      // Search in TLDR
      if (publication.tldr && publication.tldr.toLowerCase().includes(query)) {
        return true;
      }
      
      return false;
    });
  }, [publications, searchQuery]);

  return (
    <section>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
        <h2 className="font-serif text-l tracking-wide uppercase">
          Publications
        </h2>
        <div className="w-full sm:w-80">
          <SearchBox
            placeholder="Search title, authors, keywords..."
            onSearch={setSearchQuery}
          />
        </div>
      </div>
      
      {filteredPublications.length > 0 ? (
        <div className="space-y-12">
          {filteredPublications.map((publication, index) => (
            <div key={index}>
              <PublicationEntry publication={publication} />
              {index < filteredPublications.length - 1 && (
                <div className="h-px bg-zinc-200 my-8" />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-zinc-500 text-sm">
            {searchQuery ? `No publications found containing "${searchQuery}"` : "No publications available"}
          </p>
        </div>
      )}
    </section>
  );
}
