import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  const bgColor = type === 'success' ? 'bg-neon-green' : 'bg-neon-blue'
  const textColor = type === 'success' ? 'text-cyber-black' : 'text-cyber-black'

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      className={`${bgColor} ${textColor} px-6 py-4 rounded-lg shadow-lg flex items-center justify-between gap-4 font-cyber`}
    >
      <span>{message}</span>
      <button onClick={onClose} className="hover:opacity-70">
        <X size={18} />
      </button>
    </motion.div>
  )
}

export function Toaster() {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const handleAddToast = (e) => {
      const { message, type } = e.detail
      const id = Date.now()
      setToasts(prev => [...prev, { id, message, type }])
    }

    window.addEventListener('add-toast', handleAddToast)
    return () => window.removeEventListener('add-toast', handleAddToast)
  }, [])

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      <AnimatePresence>
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

export function showToast(message, type = 'success') {
  window.dispatchEvent(
    new CustomEvent('add-toast', {
      detail: { message, type }
    })
  )
}
