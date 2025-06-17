"use client";

import { motion } from "framer-motion";
import { FaRobot, FaVideo, FaCalendarAlt, FaPlay, FaCheck } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Floating background elements - reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(typeof window !== 'undefined' && window.innerWidth < 640 ? 3 : 5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-50 to-blue-50"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }
            }}
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Navigation - responsive padding and button sizes */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm py-3 sm:py-4"
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500"
          >
            LoveConnect Pro
          </motion.div>
          <div className="flex gap-2 sm:gap-4">
            <Link href="/auth/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1 sm:px-6 sm:py-2 text-sm sm:text-base border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all"
              >
                Login
              </motion.button>
            </Link>
            <Link href="/auth/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1 sm:px-6 sm:py-2 text-sm sm:text-base rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-md"
              >
                Sign Up
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - responsive text sizes and spacing */}
      <section className="relative z-10 min-h-screen flex items-center justify-center pt-16 sm:pt-20 pb-10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight"
            >
              Find Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Perfect</span> Match
            </motion.h1>
            
            <motion.p
              className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-600 max-w-3xl mx-auto px-2 sm:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Experience the future of dating with AI-powered matching, live video streaming, and virtual gifts.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 sm:px-8 sm:py-4 text-sm sm:text-lg rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  Start Your Journey
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 sm:px-8 sm:py-4 text-sm sm:text-lg border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all flex items-center gap-1 sm:gap-2"
              >
                <FaPlay className="text-xs sm:text-base" /> Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Feature Cards - responsive grid and padding */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-16 px-2 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <FeatureCard 
              icon={<FaRobot className="text-3xl sm:text-4xl text-blue-500" />} 
              title="AI Matching" 
              description="Advanced AI algorithm finds your perfect compatibility" 
            />
            <FeatureCard 
              icon={<FaVideo className="text-3xl sm:text-4xl text-purple-500" />} 
              title="Live Streaming" 
              description="Connect with potential matches in real-time" 
            />
            <FeatureCard 
              icon={<FaCalendarAlt className="text-3xl sm:text-4xl text-indigo-500" />} 
              title="Dating Events" 
              description="Join exclusive virtual and local events" 
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all"
    >
      <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 mx-auto rounded-lg bg-blue-50 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
    </motion.div>
  );
};