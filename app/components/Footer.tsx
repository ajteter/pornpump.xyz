'use client'

import { motion } from 'framer-motion'
import { Twitter, Github, Send, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Send className="w-5 h-5" />, href: "#", label: "Telegram" }, // 使用 Send 替代 Telegram
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Mail className="w-5 h-5" />, href: "#", label: "Email" },
  ]

  const footerLinks = [
    {
      title: "Platform",
      links: [
        { name: "For Creators", href: "#" },
        { name: "For Fans", href: "#" },
        { name: "Tokenomics", href: "#tokenomics" },
        { name: "Roadmap", href: "#roadmap" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Smart Contracts", href: "#" },
        { name: "Audit Reports", href: "#" },
      ]
    },
    {
      title: "Community",
      links: [
        { name: "Discord", href: "#" },
        { name: "Telegram", href: "#" },
        { name: "Twitter", href: "#" },
        { name: "Blog", href: "#" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "DMCA", href: "#" },
      ]
    }
  ]

  return (
    <footer className="bg-dark-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">PornPump.xyz</span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Revolutionizing adult entertainment with Web3 technology. 
                Empowering creators, engaging fans, and building the future of decentralized content.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-pink-500 hover:bg-pink-500/20 transition-all duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-pink-500 transition-colors duration-200 flex items-center gap-1"
                    >
                      {link.name}
                      {link.href.startsWith('http') && <ExternalLink className="w-3 h-3" />}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl mb-12"
        >
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-300">Get the latest updates on platform development and token launches.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:ml-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 PornPump.xyz. All rights reserved. Built with ❤️ for creators and fans.
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>Powered by Web3</span>
            <span>•</span>
            <span>Audited Smart Contracts</span>
            <span>•</span>
            <span>Decentralized</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
