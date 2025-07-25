interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ContentSection({ title, children, className = "" }: ContentSectionProps) {
  return (
    <div className={`border-2 border-yellow-200 rounded-lg p-4 ${className}`}>
      <div className="bg-yellow-100 text-red-500 font-bold text-lg p-2 mb-4 rounded">
        {title}
      </div>
      {children}
    </div>
  );
} 