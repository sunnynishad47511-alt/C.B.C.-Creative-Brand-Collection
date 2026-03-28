import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from './components/ui/Toaster.jsx'
import { CartProvider } from './hooks/useCart.js'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// Pages
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import ProductPage from './pages/ProductPage.jsx'
import StyleQuiz from './pages/StyleQuiz.jsx'
import Checkout from './pages/Checkout.jsx'
import VirtualCloset from './pages/VirtualCloset.jsx'

function AppContent() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-cyber-black text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/quiz" element={<StyleQuiz />} />
          <Route path="/virtual-closet" element={<VirtualCloset />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <Toaster />
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}

export default App
