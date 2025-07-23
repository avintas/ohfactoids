import { PartyPopper } from "lucide-react";

export function LiveUpdatesBanner() {
  return (
    <div className="relative bg-gradient-to-r from-gray-800/80 via-gray-700/70 to-gray-800/80 border border-gray-600/50 rounded-full px-6 py-3 flex items-center justify-center gap-4 backdrop-blur-sm">
      {/* Wavy Pattern Overlay */}
      <div className="absolute inset-0 rounded-full opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-gray-400/30 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(120,119,198,0.2),transparent_50%)]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-4">
        {/* Left Party Popper Icon */}
        <div className="text-pink-400">
          <PartyPopper size={16} />
        </div>
        
        {/* Text Content */}
        <div className="flex items-center gap-3">
          <span className="text-green-400 font-mono text-sm uppercase tracking-wide">
            LIVE UPDATES
          </span>
          
          {/* Green Dot Separator */}
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
          
          <span className="text-green-400 font-mono text-sm uppercase tracking-wide">
            JULY 23, 2025
          </span>
          
          {/* Green Dot Separator */}
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
          
          <span className="text-green-400 font-mono text-sm uppercase tracking-wide">
            GAME TIME!
          </span>
        </div>
        
        {/* Right Party Popper Icon */}
        <div className="text-pink-400">
          <PartyPopper size={16} />
        </div>
      </div>
    </div>
  );
} 