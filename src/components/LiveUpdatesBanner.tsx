import { Calendar } from "lucide-react";

export function LiveUpdatesBanner() {
  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      {/* TODAY&apos;S LINEUP Tag */}
      <div className="bg-navy-900 text-white px-4 py-2 rounded-lg flex items-center gap-2">
        <Calendar size={16} className="text-orange-400" />
        <span className="font-bold text-sm uppercase tracking-wide">
          TODAY&apos;S LINEUP
        </span>
      </div>
      
      {/* Date */}
      <div className="text-gray-600 text-sm font-medium">
        JULY 23, 2025
      </div>
    </div>
  );
} 