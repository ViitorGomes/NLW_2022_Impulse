import { Moon, Sun } from "phosphor-react"
import { useState } from "react"

export function ThemeSwitcher() {
    function handleThemeChange() {
        setTheme(() => {
            const newTheme = theme === 'light' ? 'dark' : 'light'

            window.document.documentElement.classList.remove(theme)
            window.document.documentElement.classList.add(newTheme)

            return newTheme
        })
    }

    const [ theme, setTheme ] = useState<'light' | 'dark'>('light')

    return (
        <div
            className="w-8 h-8 absolute cursor-pointer top-4 right-4 flex justify-center items-center rounded-full bg-brand-500"
            onClick={handleThemeChange}
        >
            {
                theme === 'light' ? (
                    <Sun
                        weight="bold"
                        size={18}
                        className="text-white"
                    />
                ) : (
                    <Moon 
                        weight="bold"
                        size={18}
                        className="text-white"
                    />
                )
            }
        </div>
    )
}