"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

interface FactoidCardProps {
  image?: string;
  title?: string;
  content?: string;
  expandedContent?: string;
  badge?: {
    text: string;
    color: "orange" | "yellow" | "red" | "green" | "blue" | "purple";
    image?: string;
  };
}

export function FactoidCard({ 
  image = "/icons/quote.svg", 
  title = "Smart Quotes",
  content = "'I skate to where the puck is going to be, not where it has been.' - Wayne Gretzky",
  expandedContent = "'I skate to where the puck is going to be, not where it has been.' - Wayne Gretzky's wisdom applies to life beyond hockey. Gretzky's most famous quote reveals the mindset that made him hockey's greatest player. This philosophy extended far beyond the rink into his approach to pressure and expectations. 'Pressure is something you feel when you don't know what the hell you're doing,' Gretzky once explained to young players. His ability to anticipate rather than react separated him from every other player in hockey history. This forward-thinking approach allowed him to thrive under the immense pressure of being hockey's most scrutinized player.",
  badge
}: FactoidCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    if (expandedContent) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div 
      className={`border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-white ${
        expandedContent ? "cursor-pointer" : ""
      } ${isExpanded ? "bg-pink-50" : ""}`}
      onClick={toggleExpand}
    >
      {/* Grid Container */}
      <div className="grid grid-cols-4">
        
        {/* Top-Left Cell (25% width) - Badge with dynamic background */}
        <div className={`col-span-1 flex items-center justify-center p-2 min-h-[60px] ${
          badge?.color === "orange" ? "bg-orange-500" :
          badge?.color === "yellow" ? "bg-yellow-400" :
          badge?.color === "red" ? "bg-red-500" :
          badge?.color === "green" ? "bg-green-600" :
          badge?.color === "blue" ? "bg-blue-500" :
          badge?.color === "purple" ? "bg-purple-500" :
          "bg-yellow-400"
        }`}>
          <div className="w-8 h-8 flex items-center justify-center">
            {badge?.image ? (
              <Image 
                src={badge.image}
                alt={badge.text}
                width={32}
                height={32}
                className="object-contain"
              />
            ) : (
              <span className="text-xs font-bold text-white">
                {badge?.text || "QUOTE"}
              </span>
            )}
          </div>
        </div>
        
        {/* Top-Right Cell (75% width) - Title with white background */}
        <div className="col-span-3 bg-white flex items-center justify-between px-4 min-h-[60px]">
          <h3 className="text-sm font-semibold text-gray-800">
            {title}
          </h3>
          {expandedContent && (
            <div className="ml-4">
              {isExpanded ? (
                <ChevronUp size={16} className="text-gray-500" />
              ) : (
                <ChevronDown size={16} className="text-gray-500" />
              )}
            </div>
          )}
        </div>
        
        {/* Bottom-Left Cell (25% width) - Empty with dynamic background */}
        <div className={`col-span-1 ${
          badge?.color === "orange" ? "bg-orange-500" :
          badge?.color === "yellow" ? "bg-yellow-400" :
          badge?.color === "red" ? "bg-red-500" :
          badge?.color === "green" ? "bg-green-600" :
          badge?.color === "blue" ? "bg-blue-500" :
          badge?.color === "purple" ? "bg-purple-500" :
          "bg-yellow-400"
        }`}>
          {/* Empty cell as specified */}
        </div>
        
        {/* Bottom-Right Cell (75% width) - Content with white background */}
        <div className="col-span-3 bg-white p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm leading-relaxed flex-1">
              {content}
            </p>
          </div>
        </div>
      </div>
      
      {/* Expanded Content */}
      {expandedContent && isExpanded && (
        <div className="px-4 pb-4 pt-0">
          <div className="border-t border-gray-100 pt-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              {expandedContent}
            </p>
          </div>
        </div>
      )}
    </div>
  );
} 