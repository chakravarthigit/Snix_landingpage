import { motion } from "framer-motion";
import { ArrowLeft, FileText, AlertTriangle, Shield, Users, Gavel, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { useEffect } from "react";

export default function TermsPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const sections = [
    {
      icon: CheckCircle,
      title: "Acceptance of Terms",
      content: [
        "By accessing or using Snix services, you agree to be bound by these Terms",
        "You must be at least 18 years old to use our services",
        "You represent that you have the legal capacity to enter into this agreement",
        "These terms may be updated from time to time with notice to users"
      ]
    },
    {
      icon: Shield,
      title: "Service Description",
      content: [
        "Snix provides AI-powered cryptocurrency fraud detection services",
        "Our platform analyzes transactions and smart contracts for potential risks",
        "We offer real-time alerts and security recommendations",
        "Service availability may vary by region and regulatory requirements"
      ]
    },
    {
      icon: Users,
      title: "User Responsibilities",
      content: [
        "Provide accurate and complete information when creating your account",
        "Maintain the security of your account credentials",
        "Use our services only for lawful purposes",
        "Comply with all applicable laws and regulations in your jurisdiction"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitations and Disclaimers",
      content: [
        "Our fraud detection is based on AI analysis and may not catch all threats",
        "We do not guarantee 100% accuracy in our security assessments",
        "Users are responsible for their own investment and security decisions",
        "Snix is not liable for losses resulting from cryptocurrency transactions"
      ]
    },
    {
      icon: Gavel,
      title: "Intellectual Property",
      content: [
        "All Snix technology, algorithms, and content are proprietary",
        "Users may not reverse engineer or attempt to copy our systems",
        "You retain ownership of your data while granting us necessary usage rights",
        "Unauthorized use of our intellectual property is strictly prohibited"
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
                <FileText className="w-8 h-8 text-[#E63946]" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Terms of Service
              </h1>
            </div>
            <p className="text-xl text-[#A8DADC] max-w-2xl mx-auto leading-relaxed">
              Please read these terms carefully before using our AI-powered crypto fraud detection platform.
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
            <div className="bg-gradient-to-br from-[#F1FAEE] to-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-[#1D3557] mb-6">Agreement Overview</h2>
              <p className="text-lg text-[#457B9D] leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your use of Snix's AI-powered cryptocurrency fraud detection platform 
                and related services (collectively, the "Service"). By using our Service, you enter into a legally binding 
                agreement with Snix Inc.
              </p>
              <p className="text-lg text-[#457B9D] leading-relaxed">
                We encourage you to read these Terms carefully and contact us if you have any questions. 
                Your continued use of our Service constitutes acceptance of any updates to these Terms.
              </p>
            </div>
          </motion.section>

          {/* Terms Sections */}
          <div className="grid gap-8 md:gap-12">
            {sections.map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#F1FAEE] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#E63946]/10 to-[#457B9D]/10 group-hover:from-[#E63946]/20 group-hover:to-[#457B9D]/20 transition-all duration-300">
                      <section.icon className="w-6 h-6 text-[#E63946]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1D3557] group-hover:text-[#E63946] transition-colors duration-300">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#E63946] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-[#457B9D] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>
            ))}
          </div>

          {/* Additional Terms */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#F1FAEE]">
              <h3 className="text-2xl font-bold text-[#1D3557] mb-6">Additional Important Terms</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#1D3557] mb-3">Termination</h4>
                  <p className="text-[#457B9D] text-sm leading-relaxed">
                    Either party may terminate this agreement at any time. Upon termination, 
                    your access to the Service will cease, but certain provisions will survive termination.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1D3557] mb-3">Governing Law</h4>
                  <p className="text-[#457B9D] text-sm leading-relaxed">
                    These Terms are governed by the laws of Delaware, United States, 
                    without regard to conflict of law principles.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1D3557] mb-3">Dispute Resolution</h4>
                  <p className="text-[#457B9D] text-sm leading-relaxed">
                    Any disputes will be resolved through binding arbitration in accordance 
                    with the rules of the American Arbitration Association.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1D3557] mb-3">Changes to Terms</h4>
                  <p className="text-[#457B9D] text-sm leading-relaxed">
                    We may modify these Terms at any time. We will notify users of material 
                    changes via email or through our Service.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-br from-[#1D3557] to-[#457B9D] p-8 rounded-2xl text-white">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-[#E63946]" />
                <h3 className="text-2xl font-bold">Questions About These Terms?</h3>
              </div>
              <p className="text-[#A8DADC] mb-6 leading-relaxed">
                If you have any questions about these Terms of Service or need clarification on any provisions, 
                our legal team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#E63946] text-white rounded-xl font-semibold hover:bg-[#E63946]/90 transition-colors duration-300"
                >
                  Contact Us
                </Link>
                <a
                  href="mailto:legal@snix.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors duration-300"
                >
                  legal@snix.com
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
