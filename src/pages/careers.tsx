import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, MapPin, Clock, Users, Heart, Zap, Award, Coffee, Laptop } from "lucide-react";
import { Link } from "react-router";
import { useEffect } from "react";

export default function CareersPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: Laptop,
      title: "Remote-First",
      description: "Work from anywhere with flexible hours and modern equipment provided"
    },
    {
      icon: Award,
      title: "Growth & Learning",
      description: "Professional development budget, conference attendance, and skill building"
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Unlimited PTO, flexible schedules, and team building activities"
    }
  ];

  const openPositions = [
    {
      id: 1,
      title: "Senior AI/ML Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Lead the development of our AI-powered fraud detection algorithms and machine learning models.",
      requirements: [
        "5+ years experience in ML/AI development",
        "Strong Python and TensorFlow/PyTorch skills",
        "Experience with fraud detection systems",
        "PhD in Computer Science or related field preferred"
      ]
    },
    {
      id: 2,
      title: "Blockchain Security Specialist",
      department: "Security",
      location: "Remote / New York",
      type: "Full-time",
      description: "Analyze blockchain transactions and develop security protocols for cryptocurrency fraud prevention.",
      requirements: [
        "3+ years in blockchain security",
        "Deep understanding of cryptocurrency protocols",
        "Experience with smart contract auditing",
        "Knowledge of DeFi ecosystems"
      ]
    },
    {
      id: 3,
      title: "Frontend Developer (React/TypeScript)",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build beautiful, responsive user interfaces for our web and mobile applications.",
      requirements: [
        "4+ years React/TypeScript experience",
        "Strong UI/UX design skills",
        "Experience with modern frontend tools",
        "Mobile development experience preferred"
      ]
    },
    {
      id: 4,
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "Remote / Los Angeles",
      type: "Full-time",
      description: "Drive product positioning, messaging, and go-to-market strategies for our security platform.",
      requirements: [
        "5+ years in product marketing",
        "Experience in fintech/security industry",
        "Strong analytical and communication skills",
        "B2B and B2C marketing experience"
      ]
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Manage our cloud infrastructure and ensure scalable, secure deployment of our services.",
      requirements: [
        "3+ years DevOps experience",
        "AWS/GCP cloud expertise",
        "Kubernetes and Docker proficiency",
        "Security-first mindset"
      ]
    },
    {
      id: 6,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote / Austin",
      type: "Full-time",
      description: "Help our customers maximize value from our platform and drive product adoption.",
      requirements: [
        "3+ years in customer success",
        "Experience with SaaS platforms",
        "Strong problem-solving skills",
        "Cryptocurrency knowledge preferred"
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
                <Briefcase className="w-8 h-8 text-[#E63946]" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Join Our Team
              </h1>
            </div>
            <p className="text-xl text-[#A8DADC] max-w-2xl mx-auto leading-relaxed">
              Help us build the future of cryptocurrency security. Join a team of passionate innovators working to make crypto safer for everyone.
            </p>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          {/* Culture Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-[#F1FAEE] to-white dark:from-gray-800 dark:to-gray-700 p-12 rounded-3xl shadow-lg transition-colors duration-300">
              <div className="text-center mb-12">
                <Users className="w-16 h-16 text-[#E63946] mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-[#1D3557] dark:text-gray-100 mb-6 transition-colors duration-300">Why Work at Snix?</h2>
              </div>
              <p className="text-lg text-[#457B9D] dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto mb-12 transition-colors duration-300">
                At Snix, we're not just building a product – we're creating a safer future for cryptocurrency. 
                Our team is passionate about innovation, security, and making a real impact in the blockchain space. 
                We believe in fostering a culture of learning, collaboration, and excellence.
              </p>

              {/* Benefits Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-[#E63946]/10 to-[#457B9D]/10 inline-block mb-4">
                      <benefit.icon className="w-8 h-8 text-[#E63946]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1D3557] dark:text-gray-100 mb-2 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-[#457B9D] dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Open Positions */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1D3557] dark:text-gray-100 mb-6 transition-colors duration-300">
                <span className="bg-gradient-to-r from-[#E63946] to-[#457B9D] bg-clip-text text-transparent">
                  Open Positions
                </span>
              </h2>
              <p className="text-lg text-[#457B9D] dark:text-gray-300 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
                Join our growing team and help shape the future of cryptocurrency security
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-[#F1FAEE] dark:border-gray-600 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-[#1D3557] dark:text-gray-100 mb-2 group-hover:text-[#E63946] transition-colors duration-300">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="px-3 py-1 bg-[#E63946]/10 text-[#E63946] rounded-full font-medium">
                            {position.department}
                          </span>
                          <div className="flex items-center gap-1 text-[#457B9D] dark:text-gray-400 transition-colors duration-300">
                            <MapPin className="w-4 h-4" />
                            {position.location}
                          </div>
                          <div className="flex items-center gap-1 text-[#457B9D] dark:text-gray-400 transition-colors duration-300">
                            <Clock className="w-4 h-4" />
                            {position.type}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-[#457B9D] dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                      {position.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-[#1D3557] dark:text-gray-100 mb-3 transition-colors duration-300">
                        Key Requirements:
                      </h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2 text-sm text-[#457B9D] dark:text-gray-300 transition-colors duration-300">
                            <div className="w-1.5 h-1.5 bg-[#E63946] rounded-full mt-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full px-6 py-3 bg-gradient-to-r from-[#E63946] to-[#457B9D] text-white rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                      Apply Now
                    </button>
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
            className="mt-20"
          >
            <div className="bg-gradient-to-br from-[#1D3557] to-[#457B9D] p-12 rounded-3xl text-white text-center">
              <Zap className="w-16 h-16 text-[#E63946] mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Don't See Your Role?</h3>
              <p className="text-[#A8DADC] mb-8 leading-relaxed max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for cryptocurrency security and innovation. 
                Send us your resume and let us know how you'd like to contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-[#E63946] text-white rounded-xl font-semibold hover:bg-[#E63946]/90 transition-colors duration-300 hover:scale-105 transform">
                  Send Your Resume
                </button>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors duration-300 hover:scale-105 transform"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
