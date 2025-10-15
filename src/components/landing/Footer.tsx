import { motion } from "framer-motion";
import { Link } from "react-router";
import { Github, Linkedin } from "lucide-react";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#3f2f67] via-[#6a5091] to-[#b2b7d5] dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-20 px-4 overflow-hidden transition-colors duration-300">
      {/* Premium background effects with new colors */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#ce0000]/12 to-[#b2b7d5]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-[#6a5091]/15 to-[#ce0000]/8 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -35, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-[#ce0000]/20 to-[#b2b7d5]/20">
                <Shield className="h-8 w-8 text-[#ce0000]" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-[#b2b7d5] to-white bg-clip-text text-transparent">
                Snix
              </span>
            </div>
            <p className="text-[#b2b7d5] text-base leading-relaxed font-medium">
              AI-powered crypto fraud detection for the modern world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-lg font-bold text-white">Product</h3>
            <ul className="space-y-3 text-[#b2b7d5]">
              {["Features", "Security"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href="#" 
                    className="text-sm hover:text-[#ce0000] transition-all duration-300 hover:translate-x-2 inline-block font-medium"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-lg font-bold text-white">Company</h3>
            <ul className="space-y-3 text-[#b2b7d5]">
              {[{ name: "About", path: "/about" }, { name: "Blog", path: "/blog" }, { name: "Careers", path: "/careers" }].map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={item.path}
                    className="text-sm hover:text-[#ce0000] transition-all duration-300 hover:translate-x-2 inline-block font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-lg font-bold text-white">Legal</h3>
            <ul className="space-y-3 text-[#b2b7d5]">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link 
                  to="/privacy" 
                  className="text-sm hover:text-[#ce0000] transition-all duration-300 hover:translate-x-2 inline-block font-medium"
                >
                  Privacy
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Link 
                  to="/terms" 
                  className="text-sm hover:text-[#ce0000] transition-all duration-300 hover:translate-x-2 inline-block font-medium"
                >
                  Terms
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Link 
                  to="/contact" 
                  className="text-sm hover:text-[#ce0000] transition-all duration-300 hover:translate-x-2 inline-block font-medium"
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Social Media Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-6 text-lg font-bold text-white">Connect With Us</h3>
          <div className="flex justify-center gap-6">
            <motion.a
              href="https://github.com/chakravarthigit"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40">
                <Github className="w-6 h-6 text-white group-hover:text-[#ce0000] transition-colors duration-300" />
              </div>
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/chakravarthi-guduru/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40">
                <Linkedin className="w-6 h-6 text-white group-hover:text-[#0077b5] transition-colors duration-300" />
              </div>
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          className="mt-12 border-t border-gradient-to-r from-[#6a5091]/50 to-[#b2b7d5]/50 pt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-[#ce0000] to-transparent mb-10" />
          <p className="text-[#b2b7d5] text-sm font-medium">
            &copy; 2024 Snix. All rights reserved. | Built with ❤️ for crypto security.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}