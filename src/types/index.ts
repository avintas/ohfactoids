export interface FactoidData {
  id: string;
  badge: {
    text: string;
    color: "orange" | "yellow" | "red" | "green" | "blue" | "purple";
    image?: string; // Optional image path for the badge
  };
  content: string;
  expandedContent?: string;
}

export interface NavigationItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
} 