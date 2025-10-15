import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function DownloadSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="bg-white py-20 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-4xl font-bold text-[#1D3557] md:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mb-12 text-lg text-[#457B9D]">
            Download Snix today and experience the future of crypto security.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="group"
            >
              <img
                src="/assets/google-play.png"
                alt="Get it on Google Play"
                className="h-14 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(230,57,70,0.4)]"
              />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="group"
            >
              <img
                src="/assets/app-store.png"
                alt="Download on the App Store"
                className="h-14 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(230,57,70,0.4)]"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}