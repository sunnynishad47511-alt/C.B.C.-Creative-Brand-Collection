import { motion } from 'framer-motion'
import { Heart, Instagram, Twitter, Github } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-cyber-dark border-t border-neon-green/20 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-neon text-neon-green glow-text mb-4">VibeCheck</h3>
            <p className="text-gray-400 font-cyber">The ultimate cyberpunk fashion experience.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-cyber text-neon-blue mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 font-cyber">
              <li><a href="/" className="hover:text-neon-green transition-colors">Home</a></li>
              <li><a href="/shop" className="hover:text-neon-green transition-colors">Shop</a></li>
              <li><a href="/quiz" className="hover:text-neon-green transition-colors">Style Quiz</a></li>
              <li><a href="/virtual-closet" className="hover:text-neon-green transition-colors">Virtual Closet</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-cyber text-neon-blue mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 font-cyber">
              <li><a href="#" className="hover:text-neon-green transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-neon-green transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-neon-green transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-neon-green transition-colors">Terms</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-cyber text-neon-blue mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-neon-green"
              >
                <Twitter size={24} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-neon-green"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-neon-green"
              >
                <Github size={24} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neon-green/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 font-cyber text-sm">
            <p className="flex items-center gap-2">
              Made with <Heart size={16} className="text-neon-green" /> by Creative Brand Collection
            </p>
            <p>&copy; {currentYear} VibeCheck. All rights reserved.</p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
