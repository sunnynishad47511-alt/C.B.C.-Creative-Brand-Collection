import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { ShoppingCart, Heart } from 'lucide-react'
import { useCart } from '../hooks/useCart'
import { showToast } from '../components/ui/Toaster'

export default function ProductPage() {
  const { id } = useParams()
  const { addToCart } = useCart()

  const product = {
    id: parseInt(id) || 1,
    name: 'Premium Cyber Jacket',
    price: 199.99,
    category: 'jackets',
    rating: 4.8,
    reviews: 127,
    description: 'Experience the ultimate in cyberpunk style with our premium cyber jacket. Made from cutting-edge synthetic materials with integrated LED strips.',
    features: [
      'Neon LED strip integration',
      'Water-resistant coating',
      'Adjustable fit with tech velcro',
      'Multiple pockets for accessories',
      'Anti-static fabric'
    ],
    inStock: true
  }

  const handleAddToCart = () => {
    addToCart(product)
    showToast('Added to cart! 🛒')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-lg"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="aspect-square bg-gradient-to-br from-neon-green/20 to-neon-blue/20 flex items-center justify-center text-neon-green font-neon text-6xl"
            >
              {product.name.charAt(0)}
            </motion.div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-neon text-neon-green glow-text mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl text-neon-blue font-cyber">${product.price}</span>
              <div className="flex items-center gap-2">
                <span className="text-neon-purple font-cyber">★ {product.rating}</span>
                <span className="text-gray-400 font-cyber">({product.reviews} reviews)</span>
              </div>
            </div>

            <p className="text-gray-300 mb-8 font-cyber text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="mb-8">
              <h3 className="text-neon-green font-cyber mb-4">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 font-cyber flex items-center gap-2">
                    <span className="text-neon-green">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-neon-green to-neon-blue text-cyber-black font-cyber text-lg py-4 rounded-lg flex items-center justify-center gap-2 hover:shadow-glow"
              >
                <ShoppingCart /> Add to Cart
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 border-2 border-neon-purple text-neon-purple font-cyber rounded-lg hover:bg-neon-purple/10"
              >
                <Heart />
              </motion.button>
            </div>

            {product.inStock ? (
              <p className="text-neon-green font-cyber mt-4">✓ In Stock</p>
            ) : (
              <p className="text-neon-purple font-cyber mt-4">Out of Stock</p>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
