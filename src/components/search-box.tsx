"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";

interface SearchBoxProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  className?: string;
}

export function SearchBox({ 
  placeholder = "Search keywords...", 
  onSearch, 
  className = "" 
}: SearchBoxProps) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search 
          size={16} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" 
        />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 text-sm border border-zinc-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-zinc-300 focus:border-transparent transition-all duration-200"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors duration-200"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
