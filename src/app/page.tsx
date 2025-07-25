"use client";

import { useViewport } from "@/hooks/useViewport";
import { MobileLayout } from "@/components/mobile/MobileLayout";
import { DesktopLayout } from "@/components/desktop/DesktopLayout";

export default function Home() {
  const { isMobile, isDesktop, width } = useViewport();

  // FOR TESTING: Force mobile layout to show first
  // Remove this line later when you want responsive behavior
  return <MobileLayout />;

  // Show mobile layout by default (for SSR) and when viewport is detected as mobile
  // This ensures mobile-first approach
  // if (width === 0 || isMobile) {
  //   return <MobileLayout />;
  // }

  // return <DesktopLayout />;
}
