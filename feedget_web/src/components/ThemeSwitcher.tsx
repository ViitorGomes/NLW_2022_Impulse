import { Moon, Sun } from "phosphor-react"
import { ThemeTypes } from "../App"

interface ThemeSwitcherProps {
    handleThemeChange: () => void
    theme: ThemeTypes
}

export function ThemeSwitcher({
    handleThemeChange,
    theme
} : ThemeSwitcherProps) {

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