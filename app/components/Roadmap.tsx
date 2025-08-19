'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Circle, Rocket, Users, Zap, Globe } from 'lucide-react'

export default function Roadmap() {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Foundation & MVP",
      status: "completed",
      date: "Q4 2024",
      icon: <CheckCircle className="w-6 h-6" />,
      items: [
        "Smart contract development and audit",
        "Basic platform architecture",
        "Creator onboarding system",
        "Token minting functionality"
      ]
    },
    {
      phase: "Phase 2",
      title: "Platform Launch",
      status: "in-progress",
      date: "Q1 2025",
      icon: <Rocket className="w-6 h-6" />,
      items: [
        "Public beta launch",
        "First 100 creators onboarded",
        "Mobile app development",
        "Community building"
      ]
    },
    {
      phase: "Phase 3",
      title: "Scale & Features",
      status: "upcoming",
      date: "Q2 2025",
      icon: <Users className="w-6 h-6" />,
      items: [
        "Advanced creator tools",
        "NFT marketplace integration",
        "Live streaming features",
        "Cross-chain compatibility"
      ]
    },
    {
      phase: "Phase 4",
      title: "Global Expansion",
      status: "upcoming",
      date: "Q3 2025",
      icon: <Globe className="w-6 h-6" />,
      items: [
        "Multi-language support",
        "Regional partnerships",
        "Advanced analytics",
        "DAO governance launch"
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-500'
      case 'in-progress': return 'text-primary-500'
      default: return 'text-gray-400'
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 border-green-500/30'
      case 'in-progress': return 'bg-primary-500/20 border-primary-500/30'
      default: return 'bg-gray-500/20 border-gray-500/30'
    }
  }

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-dark-900/50 to-dark-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Development <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our journey to revolutionize the adult content industry with Web3 technology
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-orange-500"></div>

          {/* Roadmap Items */}
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center ${getStatusBg(item.status)} ${getStatusColor(item.status)}`}>
                  {item.icon}
                </div>

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="glass-effect p-8 rounded-2xl hover:neon-glow transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-semibold text-primary-500 bg-primary-500/20 px-3 py-1 rounded-full">
                        {item.phase}
                      </span>
                      <span className="text-sm text-gray-400">{item.date}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    
                    <ul className="space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex} className="flex items-start gap-3 text-gray-300">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            item.status === 'completed' ? 'bg-green-500' :
                            item.status === 'in-progress' ? 'bg-primary-500' : 'bg-gray-500'
                          }`}></div>
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
