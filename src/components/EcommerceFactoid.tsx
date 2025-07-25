"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";

interface EcommerceFactoidProps {
  badge: {
    text: string;
    color: "orange" | "yellow" | "red" | "green" | "blue" | "purple";
    image?: string;
  };
  content: string;
  expandedContent?: string;
}

const badgeColors = {
  orange: "bg-orange-500 text-white",
  yellow: "bg-yellow-400 text-black",
  red: "bg-red-500 text-white",
  green: "bg-green-600 text-white",
  blue: "bg-blue-500 text-white",
  purple: "bg-purple-500 text-white",
};

export function EcommerceFactoid({ badge, content, expandedContent }: EcommerceFactoidProps) {
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
      <div className="flex">
        <div className={`w-16 h-16 flex items-center justify-center font-bold text-xs ${badgeColors[badge.color]}`}>
          {badge.image ? (
            <Image 
              src={badge.image} 
              alt={badge.text}
              width={40}
              height={40}
              className="object-contain"
            />
          ) : (
            badge.text
          )}
        </div>
        <div className="flex-1 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm leading-relaxed flex-1">
              {content}
            </p>
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
        </div>
      </div>
      
      {expandedContent && isExpanded && (
        <div className="px-4 pb-4 pt-0">
          <div className="border-t border-gray-100 pt-4">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {expandedContent}
            </p>
            
            {/* E-commerce Section */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-purple-700">🎨 Hockey Design Collection</h4>
                <div className="flex gap-2">
                  <button className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                    <Heart size={16} />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
              
              <div className="text-xs text-gray-600 mb-3">
                <p>Coming Soon: Greeting cards, birthday cards, and custom hockey designs</p>
              </div>
              
              <div className="flex gap-2">
                <button className="bg-purple-600 text-white px-3 py-1 rounded text-xs hover:bg-purple-700 transition-colors">
                  Notify Me
                </button>
                <button className="border border-purple-600 text-purple-600 px-3 py-1 rounded text-xs hover:bg-purple-50 transition-colors">
                  View Designs
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 