import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const mockupImages = [
  '/assets/Home.png',
  '/assets/Explore.png',
  '/assets/Portfilo.png',
  '/assets/Profile.png',
  '/assets/Signup.png',
  '/assets/Coindeatils.png',
  '/assets/Trasanction.png',
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0])); // Preload first image only

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex === mockupImages.length - 1 ? 0 : prevIndex + 1;
        // Preload next image before showing it
        setLoadedImages(prev => new Set(prev).add(nextIndex));
        return nextIndex;
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  // Preload adjacent images for smooth transitions
  useEffect(() => {
    const preloadNext = () => {
      const nextIndex = (currentIndex + 1) % mockupImages.length;
      setLoadedImages(prev => new Set(prev).add(nextIndex));
    };
    
    const timer = setTimeout(preloadNext, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm mx-auto">
      {/* Image container */}
      <div 
        className="relative overflow-hidden rounded-3xl shadow-2xl group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Subtle glow effect behind image */}
        <div className="absolute -inset-6 bg-gradient-to-r from-[#ce0000]/10 via-[#6a5091]/10 to-[#b2b7d5]/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-all duration-500" />
        
        {/* Image slider */}
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {mockupImages.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {loadedImages.has(index) ? (
                <img
                  src={image}
                  alt={`Snix App Screen ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="relative w-full h-auto drop-shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:drop-shadow-[0_25px_50px_rgba(206,0,0,0.15)]"
                />
              ) : (
                <div className="relative w-full aspect-[9/16] bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl" />
              )}
            </div>
          ))}
        </motion.div>

      </div>

    </div>
  );
}

