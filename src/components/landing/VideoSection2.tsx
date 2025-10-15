import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Multi-currency wallet support",
  "Real-time price tracking",
  "Advanced portfolio analytics",
  "Secure backup & recovery",
];

export default function VideoSection2() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView]);

  return (
    <section className="relative bg-[#f8f8f8] dark:bg-gray-800 py-32 px-4 overflow-hidden transition-colors duration-300">
      {/* Static background decorative elements */}
      <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-[#b2b7d5]/20 to-[#6a5091]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-32 left-16 w-64 h-64 bg-gradient-to-br from-[#ce0000]/8 to-[#b2b7d5]/12 rounded-full blur-3xl" />
      <div className="absolute top-16 right-16 w-32 h-32 bg-gradient-to-br from-[#ce0000]/10 to-[#6a5091]/10 rounded-3xl blur-2xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-[#6a5091]/8 to-[#3f2f67]/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <motion.h2 
              className="text-4xl font-bold text-[#3f2f67] dark:text-gray-100 md:text-5xl lg:text-6xl leading-tight tracking-tight transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Powerful Features
              <br />
              <span className="bg-gradient-to-r from-[#ce0000] to-[#6a5091] bg-clip-text text-transparent">
                Simple Interface
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-[#6a5091] dark:text-gray-300 md:text-xl lg:text-2xl leading-relaxed max-w-2xl font-medium transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Everything you need to manage your crypto portfolio in one
              beautiful, intuitive app.
            </motion.p>
            
            <motion.ul 
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-to-br from-[#ce0000]/10 via-[#6a5091]/10 to-[#b2b7d5]/10 transition-all duration-500 group-hover:from-[#ce0000]/20 group-hover:via-[#6a5091]/20 group-hover:to-[#b2b7d5]/20 group-hover:scale-110">
                    <CheckCircle2 className="h-8 w-8 text-[#ce0000] transition-all duration-500 group-hover:text-[#6a5091]" />
                  </div>
                  <span className="text-xl text-[#3f2f67] font-semibold transition-colors duration-500 group-hover:text-[#ce0000]">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Clean video container without edges */}
            <div className="relative group">
              {/* Subtle background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ce0000]/10 to-[#6a5091]/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500" />
              
              {/* Clean video without border */}
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                className="relative w-full max-w-2xl rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_25px_50px_rgba(206,0,0,0.15)]"
              >
                <source src="/assets/two.mp4" type="video/mp4" />
              </video>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}