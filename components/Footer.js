import Link from 'next/link';
import { Zap, Twitter, Github, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold gradient-text">
                PornPump.xyz
              </span>
            </Link>
            <p className="text-gray-400 max-w-md">
              The next generation of adult entertainment. Empowering creators and fans 
              through Web3 technology and decentralized ownership.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link href="/creators" className="text-gray-400 hover:text-white transition-colors">For Creators</Link></li>
              <li><Link href="/fans" className="text-gray-400 hover:text-white transition-colors">For Fans</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Tokenomics</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Roadmap</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Age Verification</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Compliance</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PornPump.xyz. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              18+ Only. Please verify your age before entering.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
