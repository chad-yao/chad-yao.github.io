interface ConferenceTagProps {
  conference: string;
  year: string;
  className?: string;
}

const conferenceStyles: Record<string, { bg: string; text: string; border: string }> = {
  "ICRA": { bg: "bg-blue-500", text: "text-white", border: "border-blue-600" },
  "IROS": { bg: "bg-purple-500", text: "text-white", border: "border-purple-600" },
  "CVPR": { bg: "bg-red-500", text: "text-white", border: "border-red-600" },
  "NeurIPS": { bg: "bg-green-500", text: "text-white", border: "border-green-600" },
  "ICML": { bg: "bg-orange-500", text: "text-white", border: "border-orange-600" },
  "ICLR": { bg: "bg-pink-500", text: "text-white", border: "border-pink-600" },
  "AAAI": { bg: "bg-indigo-500", text: "text-white", border: "border-indigo-600" },
  "IJCAI": { bg: "bg-teal-500", text: "text-white", border: "border-teal-600" },
  "In Submission": { bg: "bg-gray-500", text: "text-white", border: "border-gray-600" },
  "ArXiv": { bg: "bg-yellow-500", text: "text-black", border: "border-yellow-600" },
  "Workshop": { bg: "bg-cyan-500", text: "text-white", border: "border-cyan-600" },
};

export function ConferenceTag({ conference, year, className = "" }: ConferenceTagProps) {
  const style = conferenceStyles[conference] || { 
    bg: "bg-slate-500", 
    text: "text-white", 
    border: "border-slate-600" 
  };

  return (
    <div 
      className={`
        absolute top-0 left-0 h-6 shadow-lg
        ${style.bg} ${style.text} ${style.border} border-r-0
        backdrop-blur-sm bg-opacity-90
        transform transition-all duration-500 ease-out
        -translate-x-full
        opacity-0
        ${className}
      `}
      style={{
        clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)',
        width: 'fit-content',
        minWidth: '60px'
      }}
    >
      <div className="flex items-center justify-center h-full pl-2 pr-4 gap-1 whitespace-nowrap">
        <span className="text-[10px] font-bold tracking-wide">
          {conference}
        </span>
        <span className="text-[9px] opacity-90">
          {year}
        </span>
      </div>
    </div>
  );
}
