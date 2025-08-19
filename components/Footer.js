import Link from 'next/link';
import { motion } from 'framer-motion';
import { Twitter, Github, Mail, ExternalLink, MessageCircle } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/pornpump',
      icon: Twitter
    },
    {
      name: 'Telegram',
      href: 'https://t.me/pornpump',
      icon: MessageCircle // 使用 MessageCircle 替代 Telegram
    },
    {
      name: 'GitHub',
      href: 'https://github.com/pornpump',
      icon: Github
    },
    {
      name: 'Email',
      href: 'mailto:hello@pornpump.xyz',
      icon: Mail
    }
  ];

  const footerLinks = [
    {
      title: 'Platform',
      links: [
        { name: 'For Creators', href: '/creators' },
        { name: 'For Fans', href: '/fans' },
        { name: 'Marketplace', href: '/marketplace' },
        { name: 'Analytics', href: '/analytics' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Help Center', href: '/help' },
        { name: 'Community', href: '/community' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press Kit', href: '/press' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'DMCA', href: '/dmca' }
      ]
    }
  ];

  return (
    <footer className="bg-dark-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PP</span>
              </div>
              <span className="text-xl font-bold text-white">PornPump.xyz</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              The next generation adult entertainment platform built on Web3 technology. 
              Empowering creators and revolutionizing fan engagement.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500/20 transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="glass-effect p-6 rounded-2xl mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm">
                Get the latest updates on platform development and launch announcements.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/20 rounded-l-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 flex-1 md:w-64"
              />
              <button className="bg-gradient-to-r from-primary-500 to-orange-500 text-white px-6 py-2 rounded-r-lg font-semibold hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 PornPump.xyz. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span className="flex items-center">
              🔞 18+ Only
            </span>
            <span className="flex items-center">
              🛡️ Secure Platform
            </span>
            <span className="flex items-center">
              🌐 Global Access
            </span>
          </div>
        </div>

        {/* Age Verification Notice */}
        <div className="mt-6 p-4 bg-orange-500/20 border border-orange-500/30 rounded-lg">
          <p className="text-orange-200 text-sm text-center">
            <strong>Age Verification Required:</strong> This platform contains adult content. 
            You must be 18 years or older to access this site. By using this platform, 
            you confirm that you are of legal age in your jurisdiction.
          </p>
        </div>
      </div>
    </footer>
  );
}
