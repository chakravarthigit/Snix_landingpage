import { useState, lazy, Suspense } from "react";
import HeroSection from "@/components/landing/HeroSection";
import InfoSection from "@/components/landing/InfoSection";
import Footer from "@/components/landing/Footer";
import FloatingCoins from "@/components/landing/FloatingCoins";
import ControlPanel from "@/components/ui/ControlPanel";

// Lazy load heavy components
const VideoSection2 = lazy(() => import("@/components/landing/VideoSection2"));
const VideoSection3 = lazy(() => import("@/components/landing/VideoSection3"));

export default function HomePage() {
  const [coinsActive, setCoinsActive] = useState(true);

  const toggleCoins = () => {
    setCoinsActive(!coinsActive);
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] dark:bg-gray-900 relative transition-colors duration-300">
      {/* Control Panel */}
      <ControlPanel onToggleCoins={toggleCoins} coinsActive={coinsActive} />
      
      {/* Floating coins overlay for entire page */}
      <FloatingCoins isActive={coinsActive} />
      
      <HeroSection />
      <InfoSection />
      <Suspense fallback={<div className="h-96 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg" />}>
        <VideoSection2 />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg" />}>
        <VideoSection3 />
      </Suspense>
      <Footer />
    </div>
  );
}