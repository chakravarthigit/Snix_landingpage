import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, MapPin, MessageSquare, Clock, Send } from "lucide-react";
import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function ContactPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      content: "support@snix.com",
      description: "Get help with your account or technical issues"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      content: "Available 24/7",
      description: "Instant support through our in-app chat"
    },
    {
      icon: Phone,
      title: "Phone Support",
      content: "+1 (555) 123-4567",
      description: "Monday - Friday, 9 AM - 6 PM EST"
    },
    {
      icon: MapPin,
      title: "Office Location",
      content: "San Francisco, CA",
      description: "123 Crypto Street, Suite 456"
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
                <MessageSquare className="w-8 h-8 text-[#E63946]" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Contact Us
              </h1>
            </div>
            <p className="text-xl text-[#A8DADC] max-w-2xl mx-auto leading-relaxed">
              Have questions about Snix? We're here to help you secure your crypto portfolio.
            </p>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="py-16 px-4">
        <div className="mx-auto max-w-7xl">
          {/* Contact Info Cards */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#F1FAEE] hover:shadow-xl transition-all duration-300 h-full">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#E63946]/10 to-[#457B9D]/10 group-hover:from-[#E63946]/20 group-hover:to-[#457B9D]/20 transition-all duration-300 w-fit mb-4">
                      <info.icon className="w-6 h-6 text-[#E63946]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1D3557] mb-2 group-hover:text-[#E63946] transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-[#E63946] font-semibold mb-2">{info.content}</p>
                    <p className="text-[#457B9D] text-sm">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.section
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#F1FAEE]">
                <h2 className="text-3xl font-bold text-[#1D3557] mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#1D3557] mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#A8DADC] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#1D3557] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#A8DADC] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[#1D3557] mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#A8DADC] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="security">Security Concern</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#1D3557] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-[#A8DADC] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#E63946] to-[#457B9D] text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.section>

            {/* Additional Info */}
            <motion.section
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="space-y-8"
            >
              {/* FAQ */}
              <div className="bg-gradient-to-br from-[#F1FAEE] to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-[#1D3557] mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#1D3557] mb-2">How quickly do you respond to inquiries?</h4>
                    <p className="text-[#457B9D] text-sm">We typically respond within 24 hours during business days, and within 1 hour for urgent security matters.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1D3557] mb-2">Do you offer phone support?</h4>
                    <p className="text-[#457B9D] text-sm">Yes, phone support is available Monday through Friday, 9 AM to 6 PM EST for premium users.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1D3557] mb-2">Can I schedule a demo?</h4>
                    <p className="text-[#457B9D] text-sm">Absolutely! Contact us to schedule a personalized demo of our AI fraud detection platform.</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-[#1D3557] to-[#457B9D] p-8 rounded-2xl text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-[#E63946]" />
                  <h3 className="text-2xl font-bold">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[#A8DADC]">Monday - Friday</span>
                    <span className="text-white font-semibold">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A8DADC]">Saturday</span>
                    <span className="text-white font-semibold">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A8DADC]">Sunday</span>
                    <span className="text-white font-semibold">Closed</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-[#A8DADC] text-sm">
                      Emergency security support is available 24/7 for critical issues.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
    </div>
  );
}
