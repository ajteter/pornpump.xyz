'use client'

import { motion } from 'framer-motion'
import { Coins, TrendingUp, Users, Shield } from 'lucide-react'

export default function Tokenomics() {
  const tokenFeatures = [
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Creator Tokens",
      description: "Each creator can mint their own social tokens using bonding curve mechanics, ensuring fair price discovery and liquidity."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Platform Token ($PUMP)",
      description: "Utility token for platform fees, governance, and creator incentives. Deflationary mechanics through fee burns."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Fan Participation",
      description: "Token holders get exclusive content access, voting rights, and potential value appreciation as creators grow."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Transparent",
      description: "All transactions on-chain, smart contract audited, and decentralized governance for platform decisions."
    }
  ]

  return (
    <section id="tokenomics" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary <span className="gradient-text">Token Economics</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powered by Pump.fun-style bonding curves and innovative creator tokenization
          </p>
        </motion.div>

        {/* Token Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tokenFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-6 rounded-2xl hover:neon-glow transition-all duration-300"
            >
              <div className="text-primary-500 mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Revenue Model */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-effect p-8 rounded-2xl mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Revenue Distribution Model</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">95%</div>
              <div className="text-white font-semibold mb-2">To Creators</div>
              <div className="text-gray-300 text-sm">Direct revenue from content sales and token appreciation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">3%</div>
              <div className="text-white font-semibold mb-2">Platform Fee</div>
              <div className="text-gray-300 text-sm">Minimal platform maintenance and development costs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">2%</div>
              <div className="text-white font-semibold mb-2">Token Burns</div>
              <div className="text-gray-300 text-sm">Deflationary mechanism to increase token value</div>
            </div>
          </div>
        </motion.div>

        {/* Bonding Curve Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-effect p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Bonding Curve Mechanics</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">How It Works:</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  Creator launches their token with initial bonding curve
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  Token price increases as more fans purchase
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  Liquidity automatically provided by smart contract
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  Early supporters benefit from price appreciation
                </li>
              </ul>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-center">
                <div className="text-lg font-semibold text-white mb-4">Token Launch Example</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Initial Price:</span>
                    <span className="text-primary-500">\$0.001</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Market Cap Target:</span>
                    <span className="text-primary-500">\$69,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Graduation to DEX:</span>
                    <span className="text-primary-500">Automatic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
