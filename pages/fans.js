import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Lock, 
  TrendingUp, 
  Users, 
  Star, 
  Gift,
  CheckCircle,
  ArrowRight,
  Coins
} from 'lucide-react';

export default function Fans() {
  const benefits = [
    {
      icon: Heart,
      title: "Direct Creator Support",
      description: "Your support becomes a digital asset that represents real ownership in creator success"
    },
    {
      icon: Lock,
      title: "Exclusive Access",
      description: "Unlock premium content, private streams, and behind-the-scenes material with creator tokens"
    },
    {
      icon: TrendingUp,
      title: "Investment Opportunity", 
      description: "Token values may appreciate as creators grow, making your support potentially profitable"
    },
    {
      icon: Users,
      title: "VIP Community Access",
      description: "Join exclusive token-holder communities and participate in creator decisions"
    },
    {
      icon: Star,
      title: "Collector's Items",
      description: "Own unique NFT content pieces that can become valuable digital collectibles"
    },
    {
      icon: Gift,
      title: "Special Perks",
      description: "Get priority access to new content, custom requests, and personal interactions"
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Browse Creators",
      description: "Discover amazing creators and explore their token-gated content previews"
    },
    {
      step: "02",
      title: "Buy Creator Tokens", 
      description: "Purchase tokens from your favorite creators to support them and unlock content"
    },
    {
      step: "03",
      title: "Unlock & Enjoy",
      description: "Access exclusive content, join VIP communities, and enjoy premium experiences"
    },
    {
      step: "04",
      title: "Grow Together",
      description: "Watch your token value potentially grow as creators become more successful"
    }
  ];

  return (
    <>
      <Head>
        <title>For Fans - PornPump.xyz</title>
        <meta name="description" content="Support your favorite creators and unlock exclusive content with PornPump.xyz fan platform." />
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
                Support Creators,
                <br />
                <span className="gradient-text">Own the Future</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Go beyond just consuming content. Become a true supporter and investor 
                in your favorite creators' success while unlocking exclusive experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-gradient-to-r from-primary-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center">
                  Explore Creators
                  <ArrowRight className="ml-2" size={20} />
                </button>
                <button className="glass-effect text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Secure payments
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Instant access
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  True ownership
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-effect p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Fan Benefits</h3>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-primary-500/20 rounded-xl">
                  <Heart className="h-6 w-6 text-primary-500 mr-3" />
                  <div>
                    <div className="text-white font-semibold">Direct Support</div>
                    <div className="text-sm text-gray-300">95% goes to creator</div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-orange-500/20 rounded-xl">
                  <Lock className="h-6 w-6 text-orange-500 mr-3" />
                  <div>
                    <div className="text-white font-semibold">Exclusive Content</div>
                    <div className="text-sm text-gray-300">Token-gated access</div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-green-500/20 rounded-xl">
                  <TrendingUp className="h-6 w-6 text-green-500 mr-3" />
                  <div>
                    <div className="text-white font-semibold">Investment Potential</div>
                    <div className="text-sm text-gray-300">Tokens may appreciate</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-primary-500/20 to-orange-500/20 rounded-xl text-center">
                <Coins className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-white font-bold">Own Digital Assets</div>
                <div className="text-sm text-gray-300">Your support becomes valuable tokens</div>
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
              More Than Just a <span className="gradient-text">Fan Experience</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Become a true stakeholder in the creator economy
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
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start supporting creators and building your digital asset portfolio today
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
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
              Ready to <span className="gradient-text">Support & Invest?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the revolution where your support for creators becomes a valuable digital asset.
            </p>
            
            <button className="bg-gradient-to-r from-primary-500 to-orange-500 text-white px-12 py-4 rounded-full font-semibold text-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center mx-auto">
              Start Exploring
              <ArrowRight className="ml-2" size={24} />
            </button>

            <p className="text-sm text-gray-400 mt-6">
              🔞 Must be 18+ to participate. Platform launching Q2 2024.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
