import { motion } from 'framer-motion'
import { useCart } from '../hooks/useCart'
import { Trash2, ShoppingCart } from 'lucide-react'
import { showToast } from '../components/ui/Toaster'

export default function Checkout() {
  const { cartItems, removeFromCart, clearCart } = useCart()

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      showToast('Cart is empty!', 'error')
      return
    }
    showToast('Order placed! 🎉')
    clearCart()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-neon text-neon-green glow-text mb-4 text-center"
        >
          CHECKOUT
        </motion.h1>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <ShoppingCart size={64} className="mx-auto text-neon-green/30 mb-4" />
            <p className="text-gray-400 font-cyber text-lg mb-8">Your cart is empty</p>
            <a
              href="/shop"
              className="inline-block px-8 py-3 bg-neon-green text-cyber-black font-cyber rounded-lg hover:shadow-glow transition-all"
            >
              CONTINUE SHOPPING
            </a>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-cyber-dark rounded-lg p-6 border border-neon-green/20 flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-cyber text-neon-green text-lg">{item.name}</h3>
                      <p className="text-gray-400 font-cyber">
                        Qty: {item.quantity || 1} × ${item.price}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-cyber text-neon-blue">
                        ${(item.price * (item.quantity || 1)).toFixed(2)}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          removeFromCart(item.id)
                          showToast('Item removed')
                        }}
                        className="p-2 text-neon-purple hover:bg-neon-purple/10 rounded transition-colors"
                      >
                        <Trash2 size={20} />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-cyber-dark rounded-lg p-6 border border-neon-green/20 h-fit"
            >
              <h2 className="text-2xl font-cyber text-neon-green mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-300 font-cyber">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300 font-cyber">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-neon-green/20 pt-3 flex justify-between text-neon-green font-cyber text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCheckout}
                className="w-full py-3 bg-gradient-to-r from-neon-green to-neon-blue text-cyber-black font-cyber rounded-lg hover:shadow-glow transition-all"
              >
                COMPLETE PURCHASE
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clearCart}
                className="w-full mt-3 py-3 border-2 border-neon-purple text-neon-purple font-cyber rounded-lg hover:bg-neon-purple/10 transition-all"
              >
                CLEAR CART
              </motion.button>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
