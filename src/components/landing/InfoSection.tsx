import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LogIn, Wallet, Search, Shield, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import WalletLogoSlider from "@/components/ui/WalletLogoSlider";

const workflowSteps = [
  {
    icon: LogIn,
    title: "Sign Up & Login",
    description: "Create your account and securely log into the Snix platform to get started.",
    step: "01"
  },
  {
    icon: Wallet,
    title: "Connect Your Wallet",
    description: "Link your crypto wallet to our platform using secure connection protocols.",
    step: "02"
  },
  {
    icon: Search,
    title: "Enter Wallet/Coin Address",
    description: "Input the wallet address or specific coin address you want to analyze for risk assessment.",
    step: "03"
  },
  {
    icon: Shield,
    title: "AI Analysis",
    description: "Our advanced AI algorithms analyze the address for potential risks, fraud patterns, and security threats.",
    step: "04"
  },
  {
    icon: CheckCircle,
    title: "Get Risk Report",
    description: "Receive a detailed risk assessment report with recommendations and security insights.",
    step: "05"
  },
];

export default function InfoSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* Static background elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-[#b2b7d5]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-56 h-56 bg-[#6a5091]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#ce0000]/8 rounded-full blur-2xl" />
      <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-[#3f2f67]/6 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 lg:mb-24 text-center"
        >
          <motion.h2 
            className="mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3f2f67] dark:text-gray-100 tracking-tight transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-[#ce0000] via-[#6a5091] to-[#b2b7d5] bg-clip-text text-transparent">
              How It Works
            </span>
            <br />
          </motion.h2>
          <motion.p 
            className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl lg:text-2xl text-[#6a5091] dark:text-gray-300 leading-relaxed font-medium transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Simple 5-step process to analyze and protect your crypto investments with AI-powered risk assessment.
          </motion.p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-5 mb-12 sm:mb-16 lg:mb-20">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <Card className="group relative h-full border-none bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* Icon with simple styling */}
                <div className="mb-4 sm:mb-6 inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-[#ce0000]/10 to-[#6a5091]/10">
                  <step.icon className="h-8 w-8 sm:h-10 sm:w-10 text-[#ce0000]" />
                </div>
                
                <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-bold text-[#3f2f67] dark:text-gray-100 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6a5091] dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {step.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Supported Wallets Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="mb-8 text-3xl font-bold text-[#3f2f67] dark:text-gray-100 md:text-4xl transition-colors duration-300">
            <span className="bg-gradient-to-r from-[#ce0000] to-[#6a5091] bg-clip-text text-transparent">
              Supported Wallets
            </span>
          </h3>
          <p className="mb-12 text-lg text-[#6a5091] dark:text-gray-300 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            Connect with 50+ popular crypto wallets and analyze any blockchain address
          </p>
          
          {/* Wallet Logo Slider */}
          <WalletLogoSlider />
        </motion.div>
      </div>
    </section>
  );
}