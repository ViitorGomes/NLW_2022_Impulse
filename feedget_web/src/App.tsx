import { useEffect, useState } from "react"
import { ThemeSwitcher } from "./components/ThemeSwitcher"
import { Widget } from "./components/Widget"

export type ThemeTypes = 'light' | 'dark'

export function App() {

  const [theme, setTheme] = useState<ThemeTypes>(() => {
    const storedTheme = localStorage.getItem('theme')
    
    if (storedTheme) {
      return storedTheme === 'light' ? 'light' : 'dark'
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'
  })

  function handleThemeChange() {
    setTheme((prevTheme) => {
      return prevTheme === 'light' ? 'dark' : 'light'
    })
  }

  useEffect(() => {
    const html = window.document.documentElement
    const prevTheme = theme === 'dark' ? 'light' : 'dark'

    html.classList.remove(prevTheme)
    html.classList.add(theme)

    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <ThemeSwitcher
        theme={theme}
        handleThemeChange={handleThemeChange}
      />
      <Widget/>
    </>
  )
}
