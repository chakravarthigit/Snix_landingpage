import { useState, lazy, Suspense } from "react";
import IntroVideoOverlay from "@/components/landing/IntroVideoOverlay";
import HeroSection from "@/components/landing/HeroSection";
import InfoSection from "@/components/landing/InfoSection";
import Footer from "@/components/landing/Footer";
import FloatingCoins from "@/components/landing/FloatingCoins";
import ControlPanel from "@/components/ui/ControlPanel";

// Lazy load heavy components
const VideoSection2 = lazy(() => import("@/components/landing/VideoSection2"));
const VideoSection3 = lazy(() => import("@/components/landing/VideoSection3"));

export default function HomePage() {
  // Simplified intro video logic - show on fresh page loads only
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window !== 'undefined') {
      // Simple check: show intro unless user has seen it in this session
      const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
      return !hasSeenIntro;
    }
    return true; // Default to showing intro
  });
  const [coinsActive, setCoinsActive] = useState(true);

  const toggleCoins = () => {
    setCoinsActive(!coinsActive);
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
    // Mark that user has seen intro in this session
    sessionStorage.setItem('hasSeenIntro', 'true');
  };

  return (
    <>
      {showIntro && <IntroVideoOverlay onComplete={handleIntroComplete} />}
      <div className="min-h-screen bg-[#f8f8f8] dark:bg-gray-900 relative transition-colors duration-300">
        {/* Control Panel */}
        {!showIntro && (
          <ControlPanel onToggleCoins={toggleCoins} coinsActive={coinsActive} />
        )}
        
        {/* Floating coins overlay for entire page */}
        {!showIntro && <FloatingCoins isActive={coinsActive} />}
        
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
    </>
  );
}