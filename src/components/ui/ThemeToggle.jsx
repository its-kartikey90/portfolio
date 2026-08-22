import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark'

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-14 h-7 rounded-full border border-white/10
                 bg-white/5 backdrop-blur-sm overflow-hidden
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
    >
      {/* Track gradient */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          background: isDark
            ? 'linear-gradient(135deg,#1e1b4b,#312e81)'
            : 'linear-gradient(135deg,#fde68a,#fbbf24)',
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Thumb */}
      <motion.div
        className="absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center
                   bg-white shadow-md z-10"
        animate={{ x: isDark ? 2 : 30 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        <motion.span
          animate={{ rotate: isDark ? 0 : 180, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <Moon size={13} className="text-brand-600" />
          ) : (
            <Sun size={13} className="text-amber-500" />
          )}
        </motion.span>
      </motion.div>
    </motion.button>
  )
}
