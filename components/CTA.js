import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect p-12 rounded-3xl"
        >
          <Rocket className="h-16 w-16 text-primary-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="gradient-text">Revolutionize</span> Adult Entertainment?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the future of creator economy. Own your content, maximize your earnings, 
            and build deeper connections with your audience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-primary-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center">
              Get Early Access
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="glass-effect text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Join Community
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            🔞 Must be 18+ to participate. Platform launching Q2 2024.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
