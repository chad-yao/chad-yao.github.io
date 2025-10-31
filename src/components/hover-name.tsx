'use client';

import { useState } from 'react';

interface HoverNameProps {
  englishName: string;
  chineseName: string;
  className?: string;
}

export function HoverName({ englishName, chineseName, className = "" }: HoverNameProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={`cursor-pointer transition-all duration-300 ease-in-out ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`inline-block transition-all duration-300 ease-in-out ${
          isHovered ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
        }`}
      >
        {englishName}
      </span>
      <span
        className={`absolute transition-all duration-300 ease-in-out ${
          isHovered ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'
        }`}
        style={{ left: 0, top: 0 }}
      >
        {chineseName}
      </span>
    </span>
  );
}
