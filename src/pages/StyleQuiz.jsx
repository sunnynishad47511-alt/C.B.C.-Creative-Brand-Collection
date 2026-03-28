import { useState } from 'react'
import { motion } from 'framer-motion'
import { showToast } from '../components/ui/Toaster'

const quizQuestions = [
  {
    id: 1,
    question: 'What is your style vibe?',
    options: [
      { text: 'Neon & Bold', vibe: 'neon' },
      { text: 'Dark & Mysterious', vibe: 'dark' },
      { text: 'Tech & Minimalist', vibe: 'tech' },
      { text: 'Maximalist & Colorful', vibe: 'colorful' }
    ]
  },
  {
    id: 2,
    question: 'Preferred fit style?',
    options: [
      { text: 'Oversized', vibe: 'oversized' },
      { text: 'Fitted', vibe: 'fitted' },
      { text: 'Relaxed', vibe: 'relaxed' },
      { text: 'Avant-garde', vibe: 'avantgarde' }
    ]
  },
  {
    id: 3,
    question: 'Favorite color palette?',
    options: [
      { text: 'Neon Green & Blue', vibe: 'neon' },
      { text: 'Black & White', vibe: 'monochrome' },
      { text: 'Pastels', vibe: 'pastel' },
      { text: 'Metallics', vibe: 'metallic' }
    ]
  }
]

export default function StyleQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [result, setResult] = useState(null)
  const [vibeCount, setVibeCount] = useState({})

  const handleAnswer = (vibe) => {
    setVibeCount(prev => ({
      ...prev,
      [vibe]: (prev[vibe] || 0) + 1
    }))

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const topVibe = Object.keys(vibeCount).reduce((a, b) => 
        vibeCount[a] > vibeCount[b] ? a : b
      )
      setResult(topVibe)
      showToast('Quiz completed! Check your style vibe!')
    }
  }

  const vibeResults = {
    neon: { title: 'Neon Rebel', description: 'You embrace bold colors and futuristic vibes!' },
    dark: { title: 'Dark Dreamer', description: 'You prefer mysterious and minimalist aesthetics.' },
    tech: { title: 'Tech Pioneer', description: 'You love cutting-edge tech-inspired fashion.' },
    colorful: { title: 'Vibe Creator', description: 'Your style is expressive and unique!' },
    oversized: { title: 'Comfort King', description: 'Relaxed fits are your jam!' },
    fitted: { title: 'Sharp Dresser', description: 'Precision and tailoring matter to you.' },
    relaxed: { title: 'Laid-back Legend', description: 'Comfort meets style in your wardrobe.' },
    avantgarde: { title: 'Fashion Rebel', description: 'You push boundaries with experimental looks.' },
    monochrome: { title: 'Classic Soul', description: 'Timeless black and white is your signature.' },
    pastel: { title: 'Soft Aesthetic', description: 'Gentle colors define your personal style.' },
    metallic: { title: 'Shine Maker', description: 'Reflective and bold materials attract you.' }
  }

  if (result) {
    const vibeData = vibeResults[result] || vibeResults.neon
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-32 pb-20 px-4"
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl font-neon text-neon-green glow-text mb-6">
              {vibeData.title}
            </h1>
            <p className="text-2xl text-gray-300 font-cyber mb-8">
              {vibeData.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setResult(null)
                setCurrentQuestion(0)
                setVibeCount({})
              }}
              className="px-12 py-4 bg-gradient-to-r from-neon-green to-neon-blue text-cyber-black font-cyber text-lg rounded-full"
            >
              RETAKE QUIZ
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-4"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-5xl font-neon text-neon-green">STYLE QUIZ</h1>
            <span className="text-neon-blue font-cyber text-lg">
              {currentQuestion + 1} / {quizQuestions.length}
            </span>
          </div>
          <div className="h-2 bg-cyber-dark rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-neon-green to-neon-blue"
            />
          </div>
        </motion.div>

        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-cyber text-neon-blue mb-8">
            {quizQuestions[currentQuestion].question}
          </h2>

          <div className="space-y-4">
            {quizQuestions[currentQuestion].options.map((option, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(option.vibe)}
                className="w-full p-6 bg-gradient-to-r from-neon-green/10 to-neon-blue/10 border-2 border-neon-green/30 rounded-lg hover:border-neon-green hover:bg-neon-green/20 transition-all text-left group"
              >
                <span className="text-xl font-cyber text-neon-green group-hover:text-neon-blue transition-colors">
                  {option.text}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
