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
  ArrowRight,
  CheckCircle,
  Star,
  DollarSign,
  Heart,
  Rocket
} from 'lucide-react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import MarketAnalysis from './components/MarketAnalysis'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
      <Header />
      <Hero />
      <Features />
      <MarketAnalysis />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </main>
  )
}
