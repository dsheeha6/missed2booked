'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { COPY } from '@/constants/copy'

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900" />
      
      {/* Additional gradient layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-50/30 via-transparent to-blue-50/30 dark:from-purple-900/20 dark:via-transparent dark:to-blue-900/20" />
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary floating orbs with bubble screen saver movement */}
        <motion.div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 blur-3xl"
          style={{ left: '20%', top: '10%' }}
          animate={{
            x: [0, 100, -50, 80, 0],
            y: [0, -80, 120, -40, 0],
            scale: [1, 1.2, 0.8, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"
          style={{ left: '60%', top: '70%' }}
          animate={{
            x: [0, -120, 60, -80, 0],
            y: [0, 100, -60, 80, 0],
            scale: [1, 0.9, 1.3, 0.7, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Corner floating elements with bubble movement */}
        <motion.div 
          className="absolute w-64 h-64 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-15 blur-2xl"
          style={{ left: '10%', top: '20%' }}
          animate={{
            x: [0, 200, -100, 150, 0],
            y: [0, -150, 200, -100, 0],
            scale: [1, 1.1, 0.9, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div 
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-15 blur-2xl"
          style={{ left: '70%', top: '15%' }}
          animate={{
            x: [0, -180, 120, -200, 0],
            y: [0, 180, -120, 160, 0],
            scale: [1, 0.8, 1.3, 0.9, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute w-48 h-48 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-10 blur-xl"
          style={{ left: '15%', top: '75%' }}
          animate={{
            x: [0, 150, -80, 120, 0],
            y: [0, -120, 180, -90, 0],
            scale: [1, 1.4, 0.6, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        <motion.div 
          className="absolute w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-12 blur-xl"
          style={{ left: '75%', top: '60%' }}
          animate={{
            x: [0, -160, 90, -140, 0],
            y: [0, 160, -90, 140, 0],
            scale: [1, 0.7, 1.4, 0.8, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Additional smaller bubbles for more dynamic movement */}
        <motion.div 
          className="absolute w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-8 blur-lg"
          style={{ left: '25%', top: '40%' }}
          animate={{
            x: [0, 300, -200, 250, 0],
            y: [0, -200, 300, -150, 0],
            scale: [1, 1.5, 0.5, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        <motion.div 
          className="absolute w-40 h-40 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-6 blur-lg"
          style={{ left: '80%', top: '45%' }}
          animate={{
            x: [0, -250, 180, -300, 0],
            y: [0, 250, -180, 200, 0],
            scale: [1, 0.5, 1.6, 0.7, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
        
      </div>

      <div className="container-custom relative w-full py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="relative">
              Never lose a{' '}
              <div className="relative inline-block">
                <span className="gradient-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  missed call
                </span>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 rounded-lg opacity-20 blur-sm"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-red-300 via-pink-300 to-purple-300 rounded-lg opacity-10 blur-md"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </div>
              .
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed relative"
          >
            <div className="relative">
              <p>{COPY.hero.subheadline}</p>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-lg opacity-30 blur-sm"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Button size="lg" asChild className="text-lg px-8 py-4 relative overflow-hidden">
                <Link href="/pricing">
                  <span className="relative z-10 flex items-center">
                    {COPY.hero.primaryCta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 hover:opacity-10 transition-opacity duration-300"
                    whileHover={{ opacity: 0.1 }}
                  />
                </Link>
              </Button>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg opacity-20 blur-sm pointer-events-none"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-4 relative overflow-hidden border-2 border-gradient-to-r from-pink-400 to-purple-400">
                <Link href="/demo">
                  <span className="relative z-10">
                    {COPY.hero.secondaryCta}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 hover:opacity-10 transition-opacity duration-300"
                    whileHover={{ opacity: 0.1 }}
                  />
                </Link>
              </Button>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg opacity-15 blur-sm"
                animate={{
                  opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400"
          >
            {COPY.hero.trustBadges.map((badge, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-2 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </motion.div>
                <div className="relative">
                  {badge}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded px-1 opacity-0 hover:opacity-50 transition-opacity duration-300"
                    whileHover={{ opacity: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
