'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Eliminate the
            <span className="gradient-text"> Middleman</span>
            <br />
            Next-Gen Adult Entertainment
            <br />
            <span className="gradient-text">For Creators & Fans</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            At PornPump.xyz, we deeply integrate adult content with Web3 economics. 
            Creators own their work, fans have direct support channels and investment opportunities. 
            This is a revolution that liberates creators and disrupts traditional platforms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 neon-glow"
            >
              Launch Platform <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 border border-primary-500/30"
            >
              <Play size={20} /> Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="glass-effect p-6 rounded-2xl">
              <div className="text-3xl font-bold gradient-text mb-2">\$287B</div>
              <div className="text-gray-300">Adult Entertainment Market</div>
            </div>
            <div className="glass-effect p-6 rounded-2xl">
              <div className="text-3xl font-bold gradient-text mb-2">\$250B</div>
              <div className="text-gray-300">Creator Economy Market</div>
            </div>
            <div className="glass-effect p-6 rounded-2xl">
              <div className="text-3xl font-bold gradient-text mb-2">95%</div>
              <div className="text-gray-300">Creator Revenue Share</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-1/3 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  )
}
