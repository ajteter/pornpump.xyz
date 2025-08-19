import { motion } from 'framer-motion';
import { 
  Wallet, 
  Shield, 
  Users, 
  Zap, 
  TrendingUp, 
  Heart,
  Lock,
  Coins
} from 'lucide-react';

export default function Features() {
  const creatorFeatures = [
    {
      icon: Wallet,
      title: "Instant Revenue, Full Control",
      description: "No more waiting for lengthy payment cycles or enduring up to 20% middleman fees. Your content, your tokens, your income."
    },
    {
      icon: Shield,
      title: "True Ownership",
      description: "Every video and photo you create is minted as a unique token asset. You are the owner, not a tenant."
    },
    {
      icon: Users,
      title: "Direct Fan Interaction",
      description: "Your fans can unlock exclusive content, participate in community decisions, and build unprecedented deep connections by holding your tokens."
    }
  ];

  const fanFeatures = [
    {
      icon: Heart,
      title: "Direct Support, Deep Participation",
      description: "Every support you give to creators becomes a digital asset that represents owning part of their work."
    },
    {
      icon: Lock,
      title: "Unlock Exclusive Content",
      description: "Hold creator tokens to access their most intimate and exclusive content."
    },
    {
      icon: TrendingUp,
      title: "Invest in Creator Economy",
      description: "Your love for creators is no longer just consumption. Token value may grow with creator influence, making you part of their success story."
    }
  ];

  return (
    <section className="py-20 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* For Creators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built for <span className="gradient-text">Creators</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take control of your content and earnings like never before
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {creatorFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <feature.icon className="h-12 w-12 text-primary-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* For Fans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Empowering <span className="gradient-text">Fans</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              More than consumption - become part of the creator's journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fanFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <feature.icon className="h-12 w-12 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
