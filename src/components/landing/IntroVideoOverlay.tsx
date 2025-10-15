import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface IntroVideoOverlayProps {
  onComplete: () => void;
}

export default function IntroVideoOverlay({ onComplete }: IntroVideoOverlayProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleVideoEnd = () => {
    setIsVisible(false);
    setTimeout(onComplete, 500);
  };

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(onComplete, 500);
  };

  useEffect(() => {
    const video = document.getElementById("intro-video") as HTMLVideoElement;
    if (video) {
      video.play();
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-black"
        >
          <video
            id="intro-video"
            className="h-full w-full object-cover"
            muted
            playsInline
            onEnded={handleVideoEnd}
          >
            <source src="/assets/one.mp4" type="video/mp4" />
          </video>

          <Button
            onClick={handleSkip}
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}