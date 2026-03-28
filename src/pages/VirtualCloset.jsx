import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Trash2 } from 'lucide-react'

const clothingItems = [
  { id: 1, name: 'Cyber Hoodie', src: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', category: 'top' },
  { id: 2, name: 'Tech Pants', src: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400', category: 'bottom' },
  { id: 3, name: 'Neon Sneakers', src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', category: 'shoes' },
  { id: 4, name: 'Holo Jacket', src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400', category: 'outerwear' },
]

export default function VirtualCloset() {
  const [avatarClothes, setAvatarClothes] = useState([])
  const [draggedItem, setDraggedItem] = useState(null)
  const avatarRef = useRef(null)

  const handleDragStart = useCallback((item) => {
    setDraggedItem(item)
  }, [])

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    if (draggedItem) {
      setAvatarClothes(prev => {
        const exists = prev.find(c => c.id === draggedItem.id)
        if (!exists) {
          return [...prev, draggedItem]
        }
        return prev
      })
    }
  }, [draggedItem])

  const removeItem = (itemId) => {
    setAvatarClothes(prev => prev.filter(c => c.id !== itemId))
  }

  const clearOutfit = () => {
    setAvatarClothes([])
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
          VIRTUAL CLOSET
        </motion.h1>
        <p className="text-center text-gray-300 text-lg font-cyber mb-12">
          Mix and match your perfect outfit
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Avatar Canvas */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div
              ref={avatarRef}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className="aspect-square rounded-lg bg-gradient-to-br from-neon-green/10 to-neon-blue/10 border-2 border-dashed border-neon-green/30 flex flex-col items-center justify-center overflow-hidden relative"
            >
              <AnimatePresence>
                {avatarClothes.length === 0 ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-gray-400 font-cyber"
                  >
                    <Plus size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Drag items here to build your outfit!</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="outfit"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full flex flex-col items-center justify-center gap-4 p-4"
                  >
                    {avatarClothes.map((item, idx) => (
                      <motion.div
                        key={item.id}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="text-sm font-cyber text-neon-green bg-neon-green/10 px-3 py-1 rounded-full flex items-center gap-2"
                      >
                        {item.name}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="hover:text-neon-purple"
                        >
                          <X size={16} />
                        </button>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {avatarClothes.length > 0 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clearOutfit}
                className="w-full mt-4 px-6 py-3 bg-neon-purple/20 border border-neon-purple text-neon-purple font-cyber rounded-lg hover:bg-neon-purple/30 flex items-center justify-center gap-2"
              >
                <Trash2 size={20} /> Clear Outfit
              </motion.button>
            )}
          </motion.div>

          {/* Clothing Items */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div>
              <h3 className="text-2xl font-cyber text-neon-blue mb-6">Available Items</h3>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                {clothingItems.map((item) => (
                  <motion.div
                    key={item.id}
                    draggable
                    onDragStart={() => handleDragStart(item)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group cursor-move"
                  >
                    <div className="relative overflow-hidden rounded-lg aspect-square bg-cyber-dark mb-3 border-2 border-neon-green/30 group-hover:border-neon-green transition-all">
                      <img
                        src={item.src}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-neon-green font-cyber text-sm">DRAG</span>
                      </div>
                    </div>
                    <h4 className="font-cyber text-neon-green text-sm">{item.name}</h4>
                    <p className="text-gray-400 font-cyber text-xs">{item.category}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
