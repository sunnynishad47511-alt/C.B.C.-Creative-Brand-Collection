import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '../hooks/useCart'
import { showToast } from '../components/ui/Toaster'

const products = [
  { id: 1, name: 'Cyber Hoodie', price: 79.99, category: 'tops' },
  { id: 2, name: 'Tech Pants', price: 89.99, category: 'bottoms' },
  { id: 3, name: 'Neon Sneakers', price: 129.99, category: 'shoes' },
  { id: 4, name: 'Holo Jacket', price: 159.99, category: 'jackets' },
  { id: 5, name: 'LED Vest', price: 149.99, category: 'vests' },
  { id: 6, name: 'Chrome Goggles', price: 49.99, category: 'accessories' },
]

export default function Shop() {
  const { addToCart } = useCart()
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', ...new Set(products.map(p => p.category))]
  const filteredProducts = selectedCategory === 'all' ? products : products.filter(p => p.category === selectedCategory)

  const handleAddToCart = (product) => {
    addToCart(product)
    showToast(`${product.name} added to cart!`)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-neon text-neon-green glow-text mb-4 text-center"
        >
          SHOP
        </motion.h1>
        <p className="text-center text-gray-300 text-lg font-cyber mb-12">
          Curated cyberpunk collection
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 font-cyber rounded-full transition-all ${
                selectedCategory === cat
                  ? 'bg-neon-green text-cyber-black'
                  : 'border border-neon-green/50 text-neon-green hover:bg-neon-green/10'
              }`}
            >
              {cat.toUpperCase()}
            </motion.button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-neon-green/10 to-neon-blue/10 mb-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square flex items-center justify-center text-neon-green font-cyber text-2xl bg-cyber-dark"
                >
                  {product.name.charAt(0)}
                </motion.div>
              </div>
              <h3 className="text-neon-green font-cyber text-lg mb-2">{product.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-neon-blue font-cyber text-lg">${product.price}</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAddToCart(product)}
                  className="p-2 bg-neon-green text-cyber-black rounded-lg hover:shadow-glow transition-all"
                >
                  <ShoppingCart size={20} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
