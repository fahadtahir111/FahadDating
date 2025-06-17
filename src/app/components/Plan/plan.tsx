'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheck, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const PricingCard = ({ 
  plan, 
  price, 
  features, 
  highlight,
  delay 
}: {
  plan: string;
  price: string;
  features: string[];
  highlight?: boolean;
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
      className={`relative p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
        highlight
          ? 'border-2 border-yellow-400 dark:border-yellow-500'
          : 'border border-gray-200 dark:border-gray-700'
      }`}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-bold px-4 py-1 rounded-full">
          Most Popular
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{plan}</h3>
      <div className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300">
        {price}
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
            <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
        highlight
          ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:shadow-lg hover:shadow-yellow-500/20'
          : 'border border-yellow-400 text-yellow-500 hover:bg-yellow-400 hover:text-black dark:hover:text-black'
      }`}>
        {highlight ? "Upgrade Now" : plan === "VIP" ? "Go VIP" : "Get Started"}
      </button>
    </motion.div>
  );
};

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="py-16 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300 mb-4">
              LoveConnect Pro
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              The future of online dating with AI-powered matching and premium features.
            </p>
          </motion.div>

          {[
            {
              title: "Features",
              items: ["AI Matching", "Video Chat", "Live Streaming", "Virtual Gifts"],
            },
            {
              title: "Support",
              items: ["Help Center", "Safety Tips", "Contact Us", "Report Issues"],
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              {[
                { icon: FaFacebook, color: "text-blue-600 dark:text-blue-400" },
                { icon: FaTwitter, color: "text-blue-400 dark:text-blue-300" },
                { icon: FaInstagram, color: "text-pink-600 dark:text-pink-400" },
                { icon: FaYoutube, color: "text-red-600 dark:text-red-400" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-2xl ${social.color} hover:scale-110 transition-transform`}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} LoveConnect Pro. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

const PricingSection = () => {
  const pricingPlans = [
    {
      plan: "Basic",
      price: "Free",
      features: ["5 likes per day", "Basic messaging", "Profile creation", "Browse profiles"],
    },
    {
      plan: "Premium",
      price: "$19.99/month",
      highlight: true,
      features: ["Unlimited likes", "Video chat", "Advanced filters", "See who liked you", "Priority support"],
    },
    {
      plan: "VIP",
      price: "$39.99/month",
      features: ["Everything in Premium", "AI matchmaking", "Virtual gifts", "Exclusive events", "Profile boost"],
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
            PRICING PLANS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300"
          >
            Choose Your Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Select the perfect plan for your dating journey with our flexible options
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan.plan}
              price={plan.price}
              features={plan.features}
              highlight={plan.highlight}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { PricingSection, Footer };