import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return localStorage.getItem('portfolio-theme') || 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    if (theme === 'light') {
      root.classList.add('light')
      body.classList.add('light')
    } else {
      root.classList.remove('light')
      body.classList.remove('light')
    }
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme, isDark: theme === 'dark' }
}
