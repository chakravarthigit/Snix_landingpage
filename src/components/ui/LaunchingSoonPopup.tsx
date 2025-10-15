import { motion, AnimatePresence } from "framer-motion";
import { X, Rocket } from "lucide-react";

interface LaunchingSoonPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LaunchingSoonPopup({ isOpen, onClose }: LaunchingSoonPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-200 dark:border-gray-600 transition-colors duration-300"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>

              {/* Content */}
              <div className="text-center">
                {/* Icon */}
                <div className="mb-6 inline-flex p-4 rounded-full bg-gradient-to-r from-[#ce0000] to-[#6a5091]">
                  <Rocket className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-bold text-[#3f2f67] dark:text-gray-100 transition-colors duration-300">
                  <span className="bg-gradient-to-r from-[#ce0000] to-[#6a5091] bg-clip-text text-transparent">
                    Launching Soon!
                  </span>
                </h3>

                {/* Description */}
                <p className="mb-6 text-[#6a5091] dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  We're putting the finishing touches on our mobile app. 
                  Get ready for the most advanced crypto fraud detection platform!
                </p>

                {/* Features */}
                <div className="mb-6 text-left space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#ce0000] rounded-full"></div>
                    <span className="text-sm text-[#6a5091] dark:text-gray-300 transition-colors duration-300">
                      AI-powered fraud detection
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#6a5091] rounded-full"></div>
                    <span className="text-sm text-[#6a5091] dark:text-gray-300 transition-colors duration-300">
                      Real-time risk analysis
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#b2b7d5] rounded-full"></div>
                    <span className="text-sm text-[#6a5091] dark:text-gray-300 transition-colors duration-300">
                      500+ wallet integrations
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={onClose}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#ce0000] to-[#6a5091] text-white rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  Stay Tuned
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
