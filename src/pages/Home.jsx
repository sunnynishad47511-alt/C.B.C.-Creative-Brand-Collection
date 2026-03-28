import { motion } from 'framer-motion'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <Hero />
      
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-neon text-neon-green glow-text mb-6">
              FEATURED COLLECTION
            </h2>
            <p className="text-gray-300 text-lg font-cyber max-w-2xl mx-auto">
              Discover our latest cyberpunk streetwear drops, curated for the digital generation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-square bg-gradient-to-br from-neon-green/20 to-neon-blue/20 rounded-lg overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full bg-cyber-dark flex items-center justify-center text-neon-green font-cyber text-2xl"
                  >
                    ITEM {item}
                  </motion.div>
                </div>
                <h3 className="text-neon-green font-cyber text-xl mt-4">Collection Item {item}</h3>
                <p className="text-gray-400 font-cyber">$99.99</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
