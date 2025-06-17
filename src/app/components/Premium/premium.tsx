'use client';

import { FaHeart, FaGift, FaShieldAlt, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeatureCard = ({ 
  icon, 
  title, 
  desc,
  delay 
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
    >
      <div className="w-16 h-16 mb-6 rounded-lg bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 flex items-center justify-center text-2xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{desc}</p>
      <div className="mt-6">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
          <div 
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-1.5 rounded-full" 
            style={{ width: inView ? '100%' : '0%', transition: 'width 1s ease-in-out', transitionDelay: `${delay + 0.3}s` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const PremiumFeatures = () => {
  const features = [
    {
      icon: <FaHeart className="text-red-500" />,
      title: "Smart Matching",
      desc: "99.9% accuracy rate with our AI-powered compatibility algorithm",
    },
    {
      icon: <FaGift className="text-yellow-500" />,
      title: "Virtual Gifts",
      desc: "Exclusive digital gifts with augmented reality previews",
    },
    {
      icon: <FaShieldAlt className="text-green-500" />,
      title: "Verified Profiles",
      desc: "Multi-step verification for 100% authentic connections",
    },
    {
      icon: <FaGlobe className="text-blue-500" />,
      title: "Global Reach",
      desc: "Real-time translation for seamless international connections",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200 mb-4"
          >
            EXCLUSIVE FEATURES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300"
          >
            Premium Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Elevate your journey with our exclusive features designed for meaningful connections
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              desc={feature.desc}
              delay={index * 0.15}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
            Unlock Premium Features
            <span className="ml-2 inline-block animate-bounce">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumFeatures;