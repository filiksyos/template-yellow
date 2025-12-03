"use client";

import { PricingSection } from '@/components/PricingSection';
import { TypewriterEffect } from '@/components/TypewriterEffect';
import { FaReddit } from 'react-icons/fa';
import { 
  FaGithub, 
  FaDiscord, 
  FaProductHunt,
  FaXTwitter,
  FaHackerNews,
  FaInstagram,
  FaTiktok,
  FaYoutube
} from 'react-icons/fa6';
import { 
 Lock, CreditCard, Zap
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { VideoModal } from '@/components/VideoModal';

/* eslint-disable @typescript-eslint/no-unused-vars */

const workflowSteps = [
  {
    title: "Quick Setup",
    description: "Get started in minutes with our minimal configuration",
    preview: <TypewriterEffect text="Initializing project..." />
  },
  {
    title: "Build Fast",
    description: "Develop features with Next.js 15 and React 19",
    preview: <TypewriterEffect text="Creating components..." />
  },
  {
    title: "Integrate Stripe",
    description: "Add payments with a few lines of code",
    preview: <TypewriterEffect text="Processing payment..." />
  },
  {
    title: "Deploy",
    description: "Deploy to production with one click",
    preview: <TypewriterEffect text="Deploying to production..." />
  }
];

const platforms = [
  { name: 'GitHub', icon: FaGithub },
  { name: 'Discord', icon: FaDiscord },
  { name: 'Reddit', icon: FaReddit },
  { name: 'ProductHunt', icon: FaProductHunt },
  { name: 'Twitter', icon: FaXTwitter },
  { name: 'HackerNews', icon: FaHackerNews },
  { name: 'Instagram', icon: FaInstagram },
  { name: 'TikTok', icon: FaTiktok },
  { name: 'YouTube', icon: FaYoutube }
];

const workflowSections = [
  {
    id: "overview",
    title: "Overview",
    description: "A minimal, production-ready template",
    bgColor: "bg-white dark:bg-[#0B1120]"
  },
  {
    id: "features",
    title: "Features",
    description: "Everything you need for a modern application",
    bgColor: "bg-slate-50 dark:bg-[#0B1120]",
    metrics: [
      { label: "Next.js", value: "15.1" },
      { label: "React", value: "19.0" },
      { label: "TypeScript", value: "100%" }
    ]
  },
  {
    id: "payments",
    title: "Payments",
    description: "Seamless payment integration with Stripe",
    bgColor: "bg-white dark:bg-[#0B1120]",
    metrics: [
      { label: "Integration", value: "Easy" },
      { label: "Provider", value: "Stripe" },
      { label: "Setup Time", value: "5min" }
    ]
  },
  {
    id: "tech-stack",
    title: "Tech Stack",
    description: "Modern technologies working together",
    bgColor: "bg-slate-50 dark:bg-[#0B1120]",
    metrics: [
      { label: "Styling", value: "Tailwind" },
      { label: "Animation", value: "Framer" },
      { label: "Icons", value: "Lucide" }
    ]
  },
  {
    id: "pricing",
    title: "Pricing",
    description: "Simple pricing for every need",
    bgColor: "bg-white dark:bg-[#0B1120]"
  }
];

function useSectionProgressValues(numSections: number) {
  const { scrollYProgress } = useScroll();
  
  const section1Progress = useTransform(
    scrollYProgress,
    [0 / numSections, 1 / numSections],
    [0, 1]
  );
  const section2Progress = useTransform(
    scrollYProgress,
    [1 / numSections, 2 / numSections],
    [0, 1]
  );
  const section3Progress = useTransform(
    scrollYProgress,
    [2 / numSections, 3 / numSections],
    [0, 1]
  );
  const section4Progress = useTransform(
    scrollYProgress,
    [3 / numSections, 4 / numSections],
    [0, 1]
  );

  return [section1Progress, section2Progress, section3Progress, section4Progress];
}

const featureCards = [
  {
    title: "Payments",
    description: "Stripe integration built-in",
    icon: <CreditCard className="h-6 w-6 text-primary" />,
    bgGradient: "from-yellow-500/10 to-amber-500/10"
  },
  {
    title: "Fast",
    description: "Next.js 15 performance",
    icon: <Zap className="h-6 w-6 text-primary" />,
    bgGradient: "from-yellow-400/10 to-orange-400/10"
  },
  {
    title: "Modern Stack",
    description: "React 19 and TypeScript",
    icon: <Lock className="h-6 w-6 text-primary" />,
    bgGradient: "from-yellow-600/10 to-amber-600/10"
  }
];

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const sectionProgressValues = useSectionProgressValues(workflowSections.length);
  
  const [dashboardRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { scrollYProgress } = useScroll();

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] relative">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-darker/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 overflow-x-auto hide-scrollbar">
            {workflowSections.map((section, index) => (
              <ScrollLink
                key={section.id}
                to={section.id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onSetActive={() => setActiveSection(section.id)}
                className={`flex items-center cursor-pointer group min-w-fit mx-4 first:ml-0 last:mr-0`}
              >
                <div className="relative">
                  <span 
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 transition-all duration-300
                      ${activeSection === section.id 
                      ? 'bg-primary dark:bg-primary-light text-slate-900 dark:text-slate-900' 
                      : 'bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light group-hover:bg-primary/20 dark:group-hover:bg-primary-light/20'}`}
                  >
                    {index + 1}
                  </span>
                </div>
                <span 
                  className={`text-sm font-medium transition-colors duration-300 hidden md:block whitespace-nowrap
                    ${activeSection === section.id 
                    ? 'text-primary dark:text-primary-light' 
                    : 'text-slate-600 dark:text-slate-300 group-hover:text-primary dark:group-hover:text-primary-light'}`}
                >
                  {section.title}
                </span>
              </ScrollLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="overview" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-accent-light/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pt-20 pb-16 sm:pb-24">
            {/* Header Content */}
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
                <span className="block">Next.js + Stripe</span>
                <span className="block text-primary dark:text-primary-light">Minimal MVP Template</span>
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
                A lightweight, production-ready template with Stripe payments integration.
              </p>
              
              {/* CTA Buttons */}
              <div className="mt-10 flex gap-4 justify-center flex-wrap">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsVideoModalOpen(true)}
                  className="px-8 py-3 bg-primary hover:bg-primary-dark text-slate-900 dark:text-slate-900 rounded-lg shadow-lg hover:shadow-xl transition-all font-medium"
                >
                  Watch Demo
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-white dark:bg-neutral-dark hover:bg-slate-50 dark:hover:bg-neutral-darker text-primary dark:text-primary-light border-2 border-primary dark:border-primary-light rounded-lg shadow-lg hover:shadow-xl transition-all font-medium"
                >
                  Get Started
                </motion.button>
              </div>
            </div>

            {/* Combined Preview: Code + Workflow Steps */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Code Preview */}
              <div className="relative">
                <pre className="relative rounded-xl bg-slate-900 p-8 shadow-2xl overflow-auto">
                  <code className="text-sm sm:text-base text-slate-100">
                    <TypewriterEffect text={`// Quick start template
import { useStripe } from '@stripe/react-stripe-js';

export const CheckoutButton = () => {
  const stripe = useStripe();
  
  const handlePayment = async () => {
    // Your payment logic here
    await stripe?.redirectToCheckout();
  };
  
  return (
    <button onClick={handlePayment}>
      Pay Now
    </button>
  );
}`} />
                  </code>
                </pre>
              </div>

              {/* Workflow Steps */}
              <div className="grid grid-cols-1 gap-4">
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 1, y: 0 }}
                    className="relative p-4 bg-white/5 dark:bg-neutral-dark border border-slate-200 dark:border-slate-700/50 backdrop-blur-sm rounded-xl shadow-lg hover:border-primary/50 dark:hover:border-primary/50 transition-colors"
                  >
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary dark:bg-primary-light text-slate-900 dark:text-slate-900 rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div className="ml-8">
                      <h3 className="font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other sections */}
      {workflowSections.slice(1).map((section, index) => (
        <motion.section
          key={section.id}
          id={section.id}
          className={`py-20 ${section.bgColor}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          onViewportEnter={() => setActiveSection(section.id)}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                {section.title}
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                {section.description}
              </p>
            </div>

            {/* Metrics Display */}
            {section.metrics && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {section.metrics.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Pricing Section */}
            {section.id === "pricing" && <PricingSection />}
          </div>
        </motion.section>
      ))}

      {/* Final CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative py-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-accent-light/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white dark:bg-neutral-dark rounded-xl shadow-xl p-12 border border-slate-200 dark:border-slate-700">
            <div className="text-center">
              <motion.h2 
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                className="text-3xl font-bold text-slate-900 dark:text-white"
              >
                Ready to Get Started?
              </motion.h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Build your next project with Template Yellow
              </p>
              
              <div className="mt-10 flex gap-4 justify-center flex-wrap">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsVideoModalOpen(true)}
                  className="px-8 py-3 bg-primary hover:bg-primary-dark text-slate-900 dark:text-slate-900 rounded-lg shadow-lg hover:shadow-xl transition-all font-medium"
                >
                  Watch Demo
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-white dark:bg-neutral-dark hover:bg-slate-50 dark:hover:bg-neutral-darker text-primary dark:text-primary-light border-2 border-primary dark:border-primary-light rounded-lg shadow-lg hover:shadow-xl transition-all font-medium"
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="S1cnQG0-LP4"
      />
    </div>
  );
}
