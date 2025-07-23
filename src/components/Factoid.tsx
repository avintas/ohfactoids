"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FactoidData } from "@/types";

interface FactoidProps {
  factoid: FactoidData;
}

const badgeColors = {
  orange: "bg-orange-500 text-white",
  yellow: "bg-yellow-400 text-black",
  red: "bg-red-500 text-white",
  green: "bg-green-600 text-white",
  blue: "bg-blue-500 text-white",
  purple: "bg-purple-500 text-white",
};

export function Factoid({ factoid }: FactoidProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    if (factoid.expandedContent) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div 
      className={`border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow ${
        factoid.expandedContent ? "cursor-pointer" : ""
      }`}
      onClick={toggleExpand}
    >
      <div className="flex">
        <div className={`w-16 h-16 flex items-center justify-center font-bold text-xs ${badgeColors[factoid.badge.color]}`}>
          {factoid.badge.text}
        </div>
        <div className="flex-1 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm leading-relaxed flex-1">
              {factoid.content}
            </p>
            {factoid.expandedContent && (
              <div className="ml-4">
                {isExpanded ? (
                  <ChevronUp size={16} className="text-gray-500" />
                ) : (
                  <ChevronDown size={16} className="text-gray-500" />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {factoid.expandedContent && isExpanded && (
        <div className="px-4 pb-4 pt-0">
          <div className="border-t border-gray-100 pt-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              {factoid.expandedContent}
            </p>
          </div>
        </div>
      )}
    </div>
  );
} 