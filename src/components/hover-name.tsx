'use client';

import { useState, useEffect } from 'react';

interface HoverNameProps {
  englishName: string;
  chineseName: string;
  className?: string;
}

export function HoverName({ englishName, chineseName, className = "" }: HoverNameProps) {
  const [showChinese, setShowChinese] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowChinese((prev) => !prev);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`relative inline-block transition-all duration-300 ease-in-out ${className}`}
    >
      <span
        className={`inline-block transition-all duration-300 ease-in-out ${
          showChinese ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
        }`}
      >
        {englishName}
      </span>
      <span
        className={`absolute left-0 top-0 transition-all duration-300 ease-in-out ${
          showChinese ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'
        }`}
      >
        {chineseName}
      </span>
    </span>
  );
}
