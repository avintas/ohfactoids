interface DiamondNavigationProps {
  selectedContent: number;
  onContentSelect: (content: number) => void;
  totalItems?: number;
}

export function DiamondNavigation({ 
  selectedContent, 
  onContentSelect, 
  totalItems = 7 
}: DiamondNavigationProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex gap-2">
        {Array.from({ length: totalItems }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => onContentSelect(num)}
            className={`diamond-nav ${
              selectedContent === num ? 'active' : ''
            }`}
          >
            <span className="diamond-nav-text">{num}</span>
          </button>
        ))}
      </div>
    </div>
  );
} 