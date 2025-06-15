"use client";

import { useEffect } from "react";
import Head from "next/head";
import '../Main-Folder/style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
export default function Main() {
  useEffect(() => {
    // gsap.from(".slide-in-left", {
    //   duration: 1,
    //   x: -100,
    //   opacity: 0,
    //   ease: "power2.out"
    // });

    // gsap.from(".slide-in-right", {
    //   duration: 1,
    //   x: 100,
    //   opacity: 0,
    //   delay: 0.5,
    //   ease: "power2.out"
    // });
  }, []);

  return (
    <>
      <Head>
        <title>fahaddatingapp</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/style.css" />
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      </Head>

      <div className="bg-3d">
        <div className="floating-shapes">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="shape"></div>
          ))}
        </div>
      </div>

      <div id="landingPage" className="page active">
        <nav className="fixed top-0 w-full z-50 glass">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold gradient-text">LoveConnect Pro</div>
              {/* <div className="hidden md:flex space-x-8">
                <a href="#" className="hover:text-yellow-400 transition-colors">Features</a>
                <a href="#" className="hover:text-yellow-400 transition-colors">Pricing</a>
                <a href="#" className="hover:text-yellow-400 transition-colors">About</a>
                <a href="#" className="hover:text-yellow-400 transition-colors">Contact</a>
              </div> */}
              <div className="space-x-4">
                <button className="px-6 py-2 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition-all">Login</button>
                <button className="btn-gold px-6 py-2 rounded-full">Sign Up</button>
              </div>
            </div>
          </div>
        </nav>

        <section className="min-h-screen flex items-center justify-center pt-20">
          <div className="container mx-auto px-6 text-center">
            <div className="slide-in-left">
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                Find Your <span className="gradient-text">Perfect</span> Match
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
                Experience the future of dating with AI-powered matching, live video streaming, virtual gifts, and exclusive events. Join millions finding love with LoveConnect Pro.
              </p>
              <div className="space-x-4 mb-12">
                <button className="btn-gold px-8 py-4 rounded-full text-lg pulse-gold">Start Your Journey</button>
                <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-full text-lg hover:bg-yellow-400 hover:text-black transition-all">
                  <i className="fas fa-play mr-2"></i>Watch Demo
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16 slide-in-right">
              <FeatureCard icon="fa-robot" title="AI Matching" desc="Advanced AI algorithm finds your perfect compatibility based on interests, values, and behavior." />
              <FeatureCard icon="fa-video" title="Live Streaming" desc="Go live, share your moments, and connect with potential matches in real-time." />
              <FeatureCard icon="fa-calendar-heart" title="Dating Events" desc="Join exclusive virtual and local events designed to help you meet like-minded singles." />
            </div>
          </div>
        </section>



        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-center mb-16 gradient-text">Premium Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard icon="fa-heart text-red-500" title="Smart Matching" desc="99% accuracy rate in finding compatible matches" />
              <FeatureCard icon="fa-gift text-yellow-400" title="Virtual Gifts" desc="Send unique digital gifts to show your interest" />
              <FeatureCard icon="fa-shield-alt text-green-500" title="Verified Profiles" desc="100% verified users for authentic connections" />
              <FeatureCard icon="fa-globe text-blue-500" title="Global Reach" desc="Connect with singles from around the world" />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-center mb-16 gradient-text">Choose Your Plan</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <PricingCard plan="Basic" price="Free" features={["5 likes per day", "Basic messaging", "Profile creation", "Browse profiles"]} />
              <PricingCard plan="Premium" price="$19.99/month" highlight features={["Unlimited likes", "Video chat", "Advanced filters", "See who liked you", "Priority support"]} />
              <PricingCard plan="VIP" price="$39.99/month" features={["Everything in Premium", "AI matchmaking", "Virtual gifts", "Exclusive events", "Profile boost"]} />
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-gray-800">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-2xl font-bold gradient-text mb-4">LoveConnect Pro</div>
                <p className="text-gray-400">The future of online dating with AI-powered matching and premium features.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Features</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>AI Matching</li>
                  <li>Video Chat</li>
                  <li>Live Streaming</li>
                  <li>Virtual Gifts</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Help Center</li>
                  <li>Safety Tips</li>
                  <li>Contact Us</li>
                  <li>Report Issues</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-2xl text-yellow-400 hover:text-yellow-300"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="text-2xl text-yellow-400 hover:text-yellow-300"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-2xl text-yellow-400 hover:text-yellow-300"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="text-2xl text-yellow-400 hover:text-yellow-300"><i className="fab fa-youtube"></i></a>
                </div>
              </div>
            </div>
            <div className="text-center mt-8 pt-8 border-t border-gray-800 text-gray-400">
              <p>&copy; 2024 LoveConnect Pro. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="card-hover p-6 rounded-2xl hover-scale text-center">
      <div className="text-4xl mb-4">
        <i className={`fas ${icon}`}></i>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}

function PricingCard({ plan, price, features, highlight }: { plan: string; price: string; features: string[]; highlight?: boolean }) {
  return (
    <div className={`card-hover p-8 rounded-2xl hover-scale relative ${highlight ? "border-2 border-yellow-400" : ""}`}>
      {highlight && <div className="premium-badge absolute -top-3 left-1/2 transform -translate-x-1/2">Most Popular</div>}
      <h3 className="text-2xl font-bold mb-4">{plan}</h3>
      <div className="text-4xl font-bold mb-6">{price}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index}><i className=" fon fas fa-check text-green-500 mr-2"></i>{feature}</li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-full ${highlight ? "btn-gold" : "border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all"}`}>
        {highlight ? "Upgrade Now" : plan === "VIP" ? "Go VIP" : "Get Started"}
      </button>
    </div>
  );
}
