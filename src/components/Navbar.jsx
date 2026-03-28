import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react'
import { useCart } from '../hooks/useCart.js'

const NavLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Quiz', path: '/quiz' },
  { name: 'Virtual Closet', path: '/virtual-closet' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { cartItems } = useCart()
  const location = useLocation()

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-cyber-black/95 backdrop-blur-md border-b border-neon-green/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div 
              className="w-10 h-10 bg-gradient-to-r from-neon-green to-neon-blue rounded-xl flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-lg font-bold font-cyber text-cyber-black">VC</span>
            </motion.div>
            <span className="text-2xl font-neon text-neon-green glow-text tracking-wider">
              VibeCheck
            </span>
            <span className="text-sm text-neon-blue font-cyber">on C.B.C.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative group font-cyber text-lg transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-neon-green glow-text'
                    : 'text-gray-300 hover:text-neon-blue'
                }`}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-green to-neon-blue transition-all duration-300 group-hover:w-full ${
                    location.pathname === link.path ? 'w-full' : ''
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-300 hover:text-neon-blue transition-colors"
            >
              <Search size={20} />
            </motion.button>
            
            <Link to="/checkout">
              <motion.div 
                className="relative p-2"
                whileHover={{ scale: 1.1 }}
              >
                <ShoppingCart size={20} className="text-gray-300 hover:text-neon-green" />
                {cartItems.length > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-5 h-5 bg-neon-green text-cyber-black text-xs rounded-full flex items-center justify-center font-bold"
                  >
                    {cartItems.length}
                  </motion.span>
                )}
              </motion.div>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-neon-green"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-neon-green/20"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {NavLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 font-cyber text-lg border-l-4 ${
                      location.pathname === link.path
                        ? 'border-neon-green bg-neon-green/10 text-neon-green'
                        : 'border-transparent text-gray-300 hover:border-neon-blue hover:text-neon-blue'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
