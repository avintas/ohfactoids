interface PlayerCardProps {
  name: string;
  jerseyNumber?: string;
  jerseyDescription: string;
  playerDescription: string;
  additionalInfo?: string;
  bgColor?: string;
}

export function PlayerCard({ 
  name, 
  jerseyNumber, 
  jerseyDescription, 
  playerDescription, 
  additionalInfo,
  bgColor = "bg-blue-100"
}: PlayerCardProps) {
  return (
    <div className="bg-green-100 rounded-lg p-4 border-2 border-green-200">
      <div className="flex items-center gap-4">
        <div className={`w-20 h-20 ${bgColor} rounded-full flex items-center justify-center`}>
          <div className="text-center text-xs">
            <div className={`w-12 h-12 ${bgColor.replace('bg-', 'bg-').replace('-100', '-200')} rounded-full mx-auto mb-1`}></div>
            <div>{jerseyNumber || name}</div>
          </div>
        </div>
        <div className="flex-1">
          <div className="text-sm">{jerseyDescription}</div>
          <div className="text-sm">{playerDescription}</div>
          {additionalInfo && (
            <div className="text-xs text-gray-600">{additionalInfo}</div>
          )}
        </div>
      </div>
    </div>
  );
} 