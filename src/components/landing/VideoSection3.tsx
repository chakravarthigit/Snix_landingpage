import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

export default function VideoSection3() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        // Only load video when in view
        if (!videoRef.current.src && videoRef.current.dataset.src) {
          videoRef.current.src = videoRef.current.dataset.src;
          videoRef.current.load();
        }
        videoRef.current.play().catch(() => {
          // Ignore autoplay errors
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView]);

  return (
    <section className="relative bg-white dark:bg-gray-900 py-40 px-4 overflow-hidden transition-colors duration-300">
      {/* Static background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#ce0000]/12 to-[#6a5091]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-[#b2b7d5]/15 to-[#3f2f67]/8 rounded-full blur-3xl" />
      <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-br from-[#ce0000]/8 to-[#6a5091]/12 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-[#6a5091]/10 to-[#3f2f67]/12 rounded-3xl blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <motion.h2 
            className="mb-8 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight dark:text-gray-100 transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-[#ce0000] via-[#6a5091] to-[#b2b7d5] bg-clip-text text-transparent">
              Why Snix?
            </span>
          </motion.h2>
          <motion.p 
            className="mx-auto max-w-4xl text-lg text-[#6a5091] dark:text-gray-300 md:text-xl lg:text-2xl leading-relaxed font-medium transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join thousands of users who trust Snix to keep their crypto safe and
            accessible.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto max-w-6xl mb-20"
        >
          {/* Clean video container without edges */}
          <div className="relative group">
            {/* Subtle background glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-[#ce0000]/10 via-[#6a5091]/10 to-[#b2b7d5]/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-all duration-500" />
            
            {/* Clean video without border - Lazy loaded */}
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="none"
              data-src="/assets/three.mp4"
              className="relative w-full rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_25px_50px_rgba(206,0,0,0.15)] bg-gray-200 dark:bg-gray-700"
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Crect fill='%23f3f4f6' width='1200' height='600'/%3E%3C/svg%3E"
            >
              <source data-src="/assets/three.mp4" type="video/mp4" />
            </video>
            
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <motion.h3 
            className="mb-8 text-3xl font-bold text-[#3f2f67] dark:text-gray-100 md:text-4xl lg:text-5xl transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Ready to Get Started?
          </motion.h3>
          <motion.p 
            className="mb-16 text-lg text-[#6a5091] dark:text-gray-300 md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-medium transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            Download Snix today and experience the future of crypto security.
          </motion.p>

          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ce0000] to-[#6a5091] opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
              <div className="relative bg-gradient-to-r from-[#ce0000] to-[#6a5091] rounded-2xl px-12 py-6 shadow-2xl group-hover:shadow-[0_20px_60px_rgba(206,0,0,0.4)] transition-all duration-500">
                <span className="text-white text-2xl font-bold tracking-wide">
                  Launching Soon
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}