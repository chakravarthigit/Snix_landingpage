import { useState } from "react";
import IntroVideoOverlay from "@/components/landing/IntroVideoOverlay";
import HeroSection from "@/components/landing/HeroSection";
import InfoSection from "@/components/landing/InfoSection";
import VideoSection2 from "@/components/landing/VideoSection2";
import VideoSection3 from "@/components/landing/VideoSection3";
import Footer from "@/components/landing/Footer";
import FloatingCoins from "@/components/landing/FloatingCoins";
import ControlPanel from "@/components/ui/ControlPanel";

export default function HomePage() {
  // Show intro video on page refresh/direct visit, skip on internal navigation
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window !== 'undefined') {
      // Check if user has navigated from internal pages in this session
      const hasNavigatedInternally = sessionStorage.getItem('hasNavigatedInternally');
      
      // Get current hostname for production deployment
      const currentHostname = window.location.hostname;
      
      // Check if coming from internal navigation (any internal page)
      const isFromInternalPage = document.referrer && 
        document.referrer.includes(currentHostname) &&
        (document.referrer.includes('/privacy') || 
         document.referrer.includes('/terms') || 
         document.referrer.includes('/contact') ||
         document.referrer.includes('/about') ||
         document.referrer.includes('/blog') ||
         document.referrer.includes('/careers'));
      
      // If coming from internal page, mark as navigated internally
      if (isFromInternalPage) {
        sessionStorage.setItem('hasNavigatedInternally', 'true');
        return false; // Don't show intro
      }
      
      // If user has navigated internally before in this session, don't show intro
      if (hasNavigatedInternally) {
        return false;
      }
      
      // Show intro on fresh page loads, direct visits, or external referrals
      return true;
    }
    return true; // Default to showing intro on server-side rendering
  });
  const [coinsActive, setCoinsActive] = useState(true);

  const toggleCoins = () => {
    setCoinsActive(!coinsActive);
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
    // Mark that user has seen intro and navigated internally
    sessionStorage.setItem('hasNavigatedInternally', 'true');
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
        <VideoSection2 />
        <VideoSection3 />
        <Footer />
      </div>
    </>
  );
}