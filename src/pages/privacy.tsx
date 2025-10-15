import { motion } from "framer-motion";
import { ArrowLeft, Shield, Lock, Eye, Database, Users, FileText } from "lucide-react";
import { Link } from "react-router";
import { useEffect } from "react";

export default function PrivacyPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Account information (email, username, profile data)",
        "Transaction data for fraud detection analysis",
        "Device information and usage analytics",
        "Communication preferences and support interactions"
      ]
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: [
        "Provide AI-powered fraud detection services",
        "Improve our security algorithms and features",
        "Send important security alerts and notifications",
        "Comply with legal and regulatory requirements"
      ]
    },
    {
      icon: Lock,
      title: "Data Protection",
      content: [
        "End-to-end encryption for all sensitive data",
        "Regular security audits and penetration testing",
        "Compliance with GDPR, CCPA, and other privacy laws",
        "Secure data centers with 24/7 monitoring"
      ]
    },
    {
      icon: Users,
      title: "Data Sharing",
      content: [
        "We never sell your personal information",
        "Limited sharing with trusted security partners",
        "Anonymous data for research and development",
        "Legal compliance when required by law"
      ]
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
                <Shield className="w-8 h-8 text-[#E63946]" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Privacy Policy
              </h1>
            </div>
            <p className="text-xl text-[#A8DADC] max-w-2xl mx-auto leading-relaxed">
              Your privacy and security are our top priorities. Learn how we protect and handle your data.
            </p>
            <p className="text-[#A8DADC] mt-4">
              Last updated: December 15, 2024
            </p>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="py-16 px-4">
        <div className="mx-auto max-w-4xl">
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-[#F1FAEE] to-white dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg transition-colors duration-300">
              <h2 className="text-3xl font-bold text-[#1D3557] dark:text-gray-100 mb-6 transition-colors duration-300">Our Commitment to Privacy</h2>
              <p className="text-lg text-[#457B9D] dark:text-gray-300 leading-relaxed mb-4 transition-colors duration-300">
                At Snix, we understand that your privacy is fundamental to your trust in our AI-powered crypto fraud detection platform. 
                This Privacy Policy explains how we collect, use, protect, and share your information when you use our services.
              </p>
              <p className="text-lg text-[#457B9D] dark:text-gray-300 leading-relaxed transition-colors duration-300">
                We are committed to transparency and giving you control over your personal information. 
                If you have any questions about this policy, please contact us at privacy@snix.com.
              </p>
            </div>
          </motion.section>

          {/* Privacy Sections */}
          <div className="grid gap-8 md:gap-12">
            {sections.map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-[#F1FAEE] dark:border-gray-600 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#E63946]/10 to-[#457B9D]/10 group-hover:from-[#E63946]/20 group-hover:to-[#457B9D]/20 transition-all duration-300">
                      <section.icon className="w-6 h-6 text-[#E63946]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1D3557] dark:text-gray-100 group-hover:text-[#E63946] transition-colors duration-300">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#E63946] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-[#457B9D] dark:text-gray-300 leading-relaxed transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>
            ))}
          </div>

          {/* Contact Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-br from-[#1D3557] to-[#457B9D] p-8 rounded-2xl text-white">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-[#E63946]" />
                <h3 className="text-2xl font-bold">Questions About Privacy?</h3>
              </div>
              <p className="text-[#A8DADC] mb-6 leading-relaxed">
                We're here to help you understand how we protect your data. 
                If you have any questions about this Privacy Policy or our data practices, please don't hesitate to reach out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#E63946] text-white rounded-xl font-semibold hover:bg-[#E63946]/90 transition-colors duration-300"
                >
                  Contact Us
                </Link>
                <a
                  href="mailto:privacy@snix.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors duration-300"
                >
                  privacy@snix.com
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
