import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Lock, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Military-Grade Security",
    description: "Bank-level encryption protects your assets 24/7",
  },
  {
    icon: Lock,
    title: "Private & Secure",
    description: "Your keys, your crypto. We never access your funds",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Instant transactions with minimal fees",
  },
  {
    icon: Users,
    title: "Trusted by Millions",
    description: "Join our global community of secure crypto users",
  },
];

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative overflow-hidden bg-[#F1FAEE] py-20 px-4">
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-gradient-to-br from-[#457B9D] to-[#A8DADC]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-[#1D3557] md:text-5xl">
            Why Choose Snix?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#457B9D]">
            Experience the perfect blend of security, speed, and simplicity in
            managing your cryptocurrency portfolio.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group h-full border-none bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <feature.icon className="mb-4 h-12 w-12 text-[#E63946]" />
                <h3 className="mb-2 text-xl font-semibold text-[#1D3557]">
                  {feature.title}
                </h3>
                <p className="text-[#457B9D]">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}