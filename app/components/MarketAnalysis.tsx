'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Globe, DollarSign } from 'lucide-react'

export default function MarketAnalysis() {
  const marketData = [
    {
      icon: <DollarSign className="w-12 h-12" />,
      value: "\$287B",
      label: "Adult Entertainment Market",
      growth: "+8.5% YoY"
    },
    {
      icon: <Users className="w-12 h-12" />,
      value: "\$250B",
      label: "Creator Economy Market",
      growth: "+22% YoY"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      value: "\$2.3T",
      label: "Web3 Market Potential",
      growth: "+67% YoY"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      value: "170M+",
      label: "Content Creators Worldwide",
      growth: "+15% YoY"
    }
  ]

  const painPoints = [
    "High platform fees (up to 20% on OnlyFans)",
    "Payment delays and restrictions",
    "Content censorship risks",
    "Limited creator ownership",
    "Lack of fan investment opportunities"
  ]

  const advantages = [
    "Decentralized ownership through tokenization",
    "Higher revenue share (95% to creators)",
    "Instant blockchain-based payments",
    "Fan participation through token ownership",
    "Censorship-resistant infrastructure"
  ]

  return (
    <section id="market" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-dark-900/50 to-dark-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Massive <span className="gradient-text">Market Opportunity</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Disrupting a multi-billion dollar industry with Web3 innovation
          </p>
        </motion.div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {marketData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-effect p-8 rounded-2xl text-center hover:neon-glow transition-all duration-300"
            >
              <div className="text-primary-500 mb-4 flex justify-center">{item.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-2">{item.value}</div>
              <div className="text-white font-semibold mb-2">{item.label}</div>
              <div className="text-green-400 text-sm">{item.growth}</div>
            </motion.div>
          ))}
        </div>

        {/* Pain Points vs Advantages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Current Pain Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              Current Market Pain Points
            </h3>
            <ul className="space-y-4">
              {painPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-gray-300 flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Advantages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              PornPump.xyz Advantages
            </h3>
            <ul className="space-y-4">
              {advantages.map((advantage, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-gray-300 flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  {advantage}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
