'use client'

import { motion } from 'framer-motion'
import { 
  Coins, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  Lock, 
  Globe, 
  Heart,
  DollarSign,
  Star
} from 'lucide-react'

export default function Features() {
  const creatorFeatures = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Revenue, Full Control",
      description: "No more waiting for lengthy payment cycles, no more enduring up to 20% middleman fees. Your work, your tokens, your income."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "True Ownership",
      description: "Every video, every photo will be minted as unique token assets. You are the owner, not a tenant."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Direct Fan Interaction",
      description: "Your fans can unlock exclusive content by holding your tokens, participate in community decisions, and build unprecedented deep connections."
    }
  ]

  const fanFeatures = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Direct Support, Deep Participation",
      description: "Every support you give to creators will be converted into digital assets that own part of their work."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Unlock Exclusive Content",
      description: "Hold creator tokens to access their most private and exclusive content."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Invest in Creator Economy",
      description: "Your love for creators is no longer just consumption. Token value may grow with creator influence, making you part of their success story."
    }
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built for <span className="gradient-text">Creators & Fans</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary features that empower creators and engage fans like never before
          </p>
        </motion.div>

        {/* Creator Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-8 h-8 text-primary-500" />
            <h3 className="text-3xl font-bold text-white">Built for Creators</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {creatorFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-8 rounded-2xl hover:neon-glow transition-all duration-300"
              >
                <div className="text-primary-500 mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-4">{feature.title}</h4>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fan Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-8 h-8 text-orange-500" />
            <h3 className="text-3xl font-bold text-white">Empowering Fans</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fanFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-8 rounded-2xl hover:neon-glow transition-all duration-300"
              >
                <div className="text-orange-500 mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-4">{feature.title}</h4>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
