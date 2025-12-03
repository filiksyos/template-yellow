'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-neutral-darker/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center font-bold text-slate-900 dark:text-slate-900">
                TY
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white hidden sm:block">
                Template Yellow
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#payments" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
              Payments
            </Link>
            <Link href="#pricing" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
              Pricing
            </Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
              GitHub
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block px-6 py-2 bg-primary hover:bg-primary-dark text-slate-900 dark:text-slate-900 rounded-lg font-medium transition-all"
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-900 dark:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 flex flex-col gap-3"
          >
            <Link href="#features" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#payments" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
              Payments
            </Link>
            <Link href="#pricing" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
              Pricing
            </Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
              GitHub
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-2 bg-primary hover:bg-primary-dark text-slate-900 dark:text-slate-900 rounded-lg font-medium transition-all"
            >
              Get Started
            </motion.button>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
