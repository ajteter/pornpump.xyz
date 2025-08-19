import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  Rocket,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Creator Empowerment",
      description: "We believe creators should own their content and maximize their earnings without middleman interference."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building genuine connections between creators and fans through shared ownership and aligned incentives."
    },
    {
      icon: Globe,
      title: "Decentralized Future",
      description: "Leveraging Web3 technology to create a censorship-resistant, truly global platform."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly pushing boundaries to create new ways for creators and fans to interact and prosper."
    }
  ];

  const roadmap = [
    {
      quarter: "Q1 2024",
      title: "Foundation & Development",
      items: [
        "Core platform development",
        "Smart contract deployment",
        "Security audits",
        "Beta testing program"
      ],
      status: "completed"
    },
    {
      quarter: "Q2 2024", 
      title: "Platform Launch",
      items: [
        "Public platform launch",
        "Creator onboarding",
        "Token marketplace",
        "Mobile app release"
      ],
      status: "current"
    },
    {
      quarter: "Q3 2024",
      title: "Advanced Features",
      items: [
        "Live streaming integration",
        "NFT marketplace",
        "Advanced analytics",
        "Creator collaboration tools"
      ],
      status: "upcoming"
    },
    {
      quarter: "Q4 2024",
      title: "Global Expansion",
      items: [
        "Multi-language support",
        "Regional partnerships",
        "Advanced DeFi features",
        "DAO governance launch"
      ],
      status: "upcoming"
    }
  ];

  const stats = [
    { number: "\$287B", label: "Adult Entertainment Market Size" },
    { number: "95%", label: "Creator Revenue Share" },
    { number: "0%", label: "Platform Censorship Risk" },
    { number: "24/7", label: "Instant Global Access" }
  ];

  return (
    <>
      <Head>
        <title>About - PornPump.xyz</title>
        <meta name="description" content="Learn about PornPump.xyz mission to revolutionize adult entertainment through Web3 technology." />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Revolutionizing Adult Entertainment
              <br />
              <span className="gradient-text">Through Web3</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              PornPump.xyz is building the future of adult content creation where creators 
              truly own their work and fans become stakeholders in the creator economy.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-2xl"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                The adult entertainment industry generates \$287 billion annually, yet creators 
                often struggle with high platform fees, content ownership issues, and 
                censorship risks.
              </p>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We're changing that by creating a decentralized platform where creators 
                keep 95% of their earnings, truly own their content through tokenization, 
                and build deeper relationships with fans through shared economic incentives.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-300">Eliminate middleman exploitation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-300">Enable true content ownership</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-300">Create sustainable creator economy</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-3xl"
            >
              <Target className="h-16 w-16 text-primary-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                A world where adult content creators have complete autonomy over their work, 
                fans can directly support and invest in their favorite creators, and the 
                entire ecosystem operates on principles of fairness, transparency, and 
                mutual prosperity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we build
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <value.icon className="h-12 w-12 text-primary-500 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
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
              Development <span className="gradient-text">Roadmap</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our journey to revolutionize the adult entertainment industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmap.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass-effect p-6 rounded-2xl relative ${
                  phase.status === 'current' ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-primary-500">
                    {phase.quarter}
                  </span>
                  {phase.status === 'completed' && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                  {phase.status === 'current' && (
                    <Rocket className="h-5 w-5 text-primary-500" />
                  )}
                  {phase.status === 'upcoming' && (
                    <TrendingUp className="h-5 w-5 text-gray-400" />
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-4">
                  {phase.title}
                </h3>
                
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-300 flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
