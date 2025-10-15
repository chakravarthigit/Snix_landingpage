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

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === mockupImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="relative w-full max-w-sm mx-auto">
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
              <img
                src={image}
                alt={`Snix App Screen ${index + 1}`}
                className="relative w-full h-auto drop-shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:drop-shadow-[0_25px_50px_rgba(206,0,0,0.15)]"
              />
            </div>
          ))}
        </motion.div>

      </div>

    </div>
  );
}

