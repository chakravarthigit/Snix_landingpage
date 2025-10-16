import { motion } from "framer-motion";
import { useState } from "react";
import ImageCarousel from "@/components/ui/ImageCarousel";
import LaunchingSoonPopup from "@/components/ui/LaunchingSoonPopup";

export default function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);

  const handleAppStoreClick = () => {
    setShowPopup(true);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Static background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#b2b7d5]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-[#6a5091]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#ce0000]/5 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-[#3f2f67]/8 rounded-full blur-3xl" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid min-h-screen items-center gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6 sm:space-y-8 lg:space-y-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3f2f67] dark:text-gray-100 leading-tight tracking-tight transition-colors duration-300"
            >
              Snix — AI-Powered
              <br />
              <span className="bg-gradient-to-r from-[#ce0000] to-[#6a5091] bg-clip-text text-transparent">
                Crypto Fraud Detection
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#6a5091] dark:text-gray-300 max-w-2xl leading-relaxed font-medium transition-colors duration-300"
            >
              Protect your crypto portfolio with real-time AI insights and advanced fraud detection.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col gap-4 sm:flex-row sm:gap-6 items-start"
            >
              <motion.button
                onClick={handleAppStoreClick}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="group relative"
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-xl p-2 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600 w-fit">
                  <img
                    src="/assets/google-play.png"
                    alt="Get it on Google Play"
                    className="h-12 w-auto max-w-[160px] sm:h-14 sm:max-w-[180px] transition-all duration-300"
                  />
                </div>
              </motion.button>
              
              <motion.button
                onClick={handleAppStoreClick}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="group relative"
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-xl p-2 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600 w-fit">
                  <img
                    src="/assets/app-store.png"
                    alt="Download on the App Store"
                    className="h-12 w-auto max-w-[160px] sm:h-14 sm:max-w-[180px] transition-all duration-300"
                  />
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - App Home Image */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <ImageCarousel />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Launching Soon Popup */}
      <LaunchingSoonPopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      />
    </section>
  );
}