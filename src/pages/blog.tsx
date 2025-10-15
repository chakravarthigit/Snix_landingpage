import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, ArrowRight, Shield, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router";
import { useEffect } from "react";

export default function BlogPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "The Rise of AI in Cryptocurrency Security",
      excerpt: "Explore how artificial intelligence is revolutionizing the way we detect and prevent crypto fraud, making digital assets safer for everyone.",
      author: "Alex Chen",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "AI & Security",
      icon: Shield,
      featured: true
    },
    {
      id: 2,
      title: "Understanding Crypto Fraud Patterns in 2024",
      excerpt: "A comprehensive analysis of the most common cryptocurrency fraud schemes and how to protect yourself from becoming a victim.",
      author: "Sarah Johnson",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Security",
      icon: TrendingUp,
      featured: false
    },
    {
      id: 3,
      title: "Real-Time Risk Assessment: The Future is Now",
      excerpt: "Discover how real-time analysis can help you make informed decisions about your cryptocurrency investments and transactions.",
      author: "Michael Rodriguez",
      date: "December 5, 2024",
      readTime: "4 min read",
      category: "Technology",
      icon: Zap,
      featured: false
    },
    {
      id: 4,
      title: "Building Trust in DeFi: Security Best Practices",
      excerpt: "Essential security practices for navigating the decentralized finance ecosystem safely and confidently.",
      author: "Emily Zhang",
      date: "December 3, 2024",
      readTime: "6 min read",
      category: "DeFi",
      icon: Shield,
      featured: false
    },
    {
      id: 5,
      title: "The Psychology of Crypto Scams: What You Need to Know",
      excerpt: "Understanding the psychological tactics used by scammers and how to develop a security-first mindset.",
      author: "Alex Chen",
      date: "November 30, 2024",
      readTime: "5 min read",
      category: "Education",
      icon: TrendingUp,
      featured: false
    },
    {
      id: 6,
      title: "Machine Learning Models for Fraud Detection",
      excerpt: "A deep dive into the machine learning algorithms that power modern cryptocurrency fraud detection systems.",
      author: "Sarah Johnson",
      date: "November 28, 2024",
      readTime: "8 min read",
      category: "AI & Security",
      icon: Zap,
      featured: false
    }
  ];

  const categories = ["All", "AI & Security", "Security", "Technology", "DeFi", "Education"];
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-[#E63946] to-[#A8DADC] bg-clip-text text-transparent">
                Snix
              </span>{" "}
              Blog
            </h1>
            <p className="text-xl text-[#A8DADC] max-w-2xl mx-auto leading-relaxed">
              Insights, updates, and expert analysis on cryptocurrency security, AI technology, and blockchain innovation.
            </p>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          {/* Featured Post */}
          {featuredPost && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-br from-[#F1FAEE] to-white dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-lg overflow-hidden transition-colors duration-300">
                <div className="p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-2 bg-[#E63946] text-white rounded-full text-sm font-semibold">
                      Featured
                    </span>
                    <span className="px-4 py-2 bg-[#457B9D]/10 text-[#457B9D] dark:text-gray-300 rounded-full text-sm font-medium transition-colors duration-300">
                      {featuredPost.category}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] dark:text-gray-100 mb-4 transition-colors duration-300">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-lg text-[#457B9D] dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm text-[#457B9D] dark:text-gray-400 transition-colors duration-300">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#E63946] text-white rounded-xl font-semibold hover:bg-[#E63946]/90 transition-colors duration-300 hover:scale-105 transform">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* Category Filter */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    index === 0
                      ? 'bg-[#E63946] text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-[#457B9D] dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-[#E63946] hover:text-white hover:border-[#E63946]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.section>

          {/* Blog Posts Grid */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-[#F1FAEE] dark:border-gray-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-[#457B9D]/10 text-[#457B9D] dark:text-gray-300 rounded-full text-sm font-medium transition-colors duration-300">
                          {post.category}
                        </span>
                        <post.icon className="w-6 h-6 text-[#E63946]" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#1D3557] dark:text-gray-100 mb-3 group-hover:text-[#E63946] transition-colors duration-300">
                        {post.title}
                      </h3>
                      
                      <p className="text-[#457B9D] dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-[#457B9D] dark:text-gray-400 transition-colors duration-300">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date.split(',')[0]}
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* Newsletter Signup */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-br from-[#1D3557] to-[#457B9D] p-12 rounded-3xl text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
              <p className="text-[#A8DADC] mb-8 leading-relaxed max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest insights on cryptocurrency security, 
                AI technology, and blockchain innovation delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent"
                />
                <button className="px-6 py-3 bg-[#E63946] text-white rounded-xl font-semibold hover:bg-[#E63946]/90 transition-colors duration-300 hover:scale-105 transform">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
