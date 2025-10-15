import { motion } from "framer-motion";
import { ArrowLeft, Shield, Users, Target, Award, Zap, Globe } from "lucide-react";
import { Link } from "react-router";
import { useEffect } from "react";

export default function AboutPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize the security and privacy of our users above all else, implementing bank-grade encryption and security protocols."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly pushing the boundaries of AI and blockchain technology to provide cutting-edge fraud detection solutions."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a safer crypto ecosystem for everyone through collaboration and shared knowledge."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making advanced security tools accessible to crypto users worldwide, regardless of their technical expertise."
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      description: "Former blockchain security researcher with 8+ years in cybersecurity and AI development."
    },
    {
      name: "Sarah Johnson",
      role: "CTO & Co-Founder",
      description: "AI/ML expert with extensive experience in fraud detection algorithms and blockchain technology."
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Security",
      description: "Cybersecurity veteran with expertise in threat analysis and cryptocurrency security protocols."
    },
    {
      name: "Emily Zhang",
      role: "Lead AI Engineer",
      description: "Machine learning specialist focused on developing advanced fraud detection and risk assessment models."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <motion.header 
        className="relative bg-gradient-to-br from-[#1D3557] to-[#457B9D] py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#E63946]/10 to-[#A8DADC]/10" />
        
        <div className="relative z-10 mx-auto max-w-4xl">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-[#A8DADC] hover:text-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-[#E63946]/20">
                <Users className="w-8 h-8 text-[#E63946]" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                About Snix
              </h1>
            </div>
            <p className="text-xl text-[#A8DADC] max-w-2xl mx-auto leading-relaxed">
              Pioneering the future of cryptocurrency security with AI-powered fraud detection and risk assessment.
            </p>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          {/* Mission Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-[#F1FAEE] to-white dark:from-gray-800 dark:to-gray-700 p-12 rounded-3xl shadow-lg transition-colors duration-300">
              <div className="text-center mb-12">
                <Target className="w-16 h-16 text-[#E63946] mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-[#1D3557] dark:text-gray-100 mb-6 transition-colors duration-300">Our Mission</h2>
              </div>
              <p className="text-lg text-[#457B9D] dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto transition-colors duration-300">
                At Snix, we're on a mission to make cryptocurrency safer for everyone. We believe that advanced security 
                shouldn't be a luxury reserved for institutions. Our AI-powered platform democratizes access to 
                sophisticated fraud detection and risk assessment tools, empowering individual investors and businesses 
                to protect their digital assets with confidence.
              </p>
            </div>
          </motion.section>

          {/* Values Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1D3557] dark:text-gray-100 mb-6 transition-colors duration-300">
                <span className="bg-gradient-to-r from-[#E63946] to-[#457B9D] bg-clip-text text-transparent">
                  Our Values
                </span>
              </h2>
              <p className="text-lg text-[#457B9D] dark:text-gray-300 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-[#F1FAEE] dark:border-gray-600 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#E63946]/10 to-[#457B9D]/10 group-hover:from-[#E63946]/20 group-hover:to-[#457B9D]/20 transition-all duration-300 mb-6 inline-block">
                      <value.icon className="w-8 h-8 text-[#E63946]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1D3557] dark:text-gray-100 mb-4 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-[#457B9D] dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Team Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1D3557] dark:text-gray-100 mb-6 transition-colors duration-300">
                <span className="bg-gradient-to-r from-[#E63946] to-[#457B9D] bg-clip-text text-transparent">
                  Meet Our Team
                </span>
              </h2>
              <p className="text-lg text-[#457B9D] dark:text-gray-300 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
                Experts in AI, blockchain, and cybersecurity working together to protect your crypto
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-[#F1FAEE] dark:border-gray-600 hover:shadow-xl transition-all duration-300 text-center h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#E63946] to-[#457B9D] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1D3557] dark:text-gray-100 mb-2 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-[#E63946] font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-[#457B9D] dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="bg-gradient-to-br from-[#1D3557] to-[#457B9D] p-12 rounded-3xl text-white text-center">
              <Award className="w-16 h-16 text-[#E63946] mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-6">Join the Future of Crypto Security</h3>
              <p className="text-[#A8DADC] mb-8 leading-relaxed max-w-2xl mx-auto">
                Ready to protect your cryptocurrency investments with cutting-edge AI technology? 
                Join thousands of users who trust Snix for their crypto security needs.
              </p>
              <Link
                to="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E63946] text-white rounded-xl font-semibold hover:bg-[#E63946]/90 transition-colors duration-300 hover:scale-105 transform"
              >
                Get Started Today
              </Link>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
