import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Clock, 
  Shield, 
  Users, 
  TrendingUp, 
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function Creators() {
  const benefits = [
    {
      icon: DollarSign,
      title: "95% Revenue Share",
      description: "Keep 95% of your earnings vs 80% on traditional platforms"
    },
    {
      icon: Clock,
      title: "Instant Payments",
      description: "Get paid immediately with blockchain technology"
    },
    {
      icon: Shield,
      title: "Content Ownership",
      description: "Your content becomes tokenized assets you truly own"
    },
    {
      icon: Users,
      title: "Direct Fan Connection",
      description: "Build deeper relationships through token-gated communities"
    },
    {
      icon: TrendingUp,
      title: "Growing Value",
      description: "Your token value can appreciate with your popularity"
    },
    {
      icon: Zap,
      title: "No Censorship Risk",
      description: "Decentralized platform means no arbitrary content removal"
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Create Your Profile",
      description: "Set up your creator profile and verify your identity through our secure Web3 system"
    },
    {
      step: "02", 
      title: "Mint Your Token",
      description: "Launch your personal creator token with our simple one-click deployment"
    },
    {
      step: "03",
      title: "Upload Content",
      description: "Share your content and set token requirements for access"
    },
    {
      step: "04",
      title: "Earn & Engage",
      description: "Start earning instantly while building your token-powered community"
    }
  ];

  return (
    <>
      <Head>
        <title>For Creators - PornPump.xyz</title>
        <meta name="description" content="Maximize your earnings and own your content with PornPump.xyz creator platform." />
      </Head>

      {/* Hero Section */}
      <section className="pt-20 pb-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Your Content,
                <br />
                <span className="gradient-text">Your Empire</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Stop giving away 20% of your hard-earned money to middlemen. 
                With PornPump.xyz, you keep 95% of your revenue and own your content forever.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-gradient-to-r from-primary-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center">
                  Start Creating
                  <ArrowRight className="ml-2" size={20} />
                </button>
                <button className="glass-effect text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  No setup fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Instant payouts
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Full ownership
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-effect p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Revenue Comparison</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-red-500/20 rounded-xl">
                  <span className="text-white">OnlyFans</span>
                  <span className="text-red-400 font-bold">80% (20% fee)</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-500/20 rounded-xl">
                  <span className="text-white">PornPump.xyz</span>
                  <span className="text-green-400 font-bold">95% (5% fee)</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary-500/20 rounded-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">+\$1,500</div>
                  <div className="text-sm text-gray-300">Extra monthly earnings on \$10k revenue</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Creators Choose <span className="gradient-text">PornPump.xyz</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built by creators, for creators. Every feature designed to maximize your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <benefit.icon className="h-12 w-12 text-primary-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get Started in <span className="gradient-text">4 Simple Steps</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Launch your creator economy in minutes, not months
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="glass-effect w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold gradient-text">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-12 rounded-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="gradient-text">Own Your Success?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who've already made the switch to true content ownership and maximum earnings.
            </p>
            
            <button className="bg-gradient-to-r from-primary-500 to-orange-500 text-white px-12 py-4 rounded-full font-semibold text-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center mx-auto">
              Start Your Creator Journey
              <ArrowRight className="ml-2" size={24} />
            </button>

            <p className="text-sm text-gray-400 mt-6">
              🔞 Must be 18+ and provide age verification. Platform launching Q2 2024.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
