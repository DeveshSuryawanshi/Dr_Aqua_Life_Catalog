'use client'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches

    if (saved === 'dark' || (!saved && prefersDark)) {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }
  }, [])

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark')
    const newTheme = isDark ? 'dark' : 'light'
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  return (
    <>
      <div className="prose-h1:text-2xl prose-h1:font-extrabold flex items-center justify-between p-5 bg-blue-100 dark:bg-background sticky top-0 z-50">
        <div>
          <h1 className='text-primary'>Dr Aqua Life</h1>
        </div>
        <div className='flex items-center gap-4 md:gap-8'>
          <ul className="hidden md:flex gap-4 text-lg md:gap-8 cursor-pointer">
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Inquiry</li>
          </ul>
          <Button onClick={toggleTheme} variant="outline" size="icon">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>
      </div>
    </>
  )
}
