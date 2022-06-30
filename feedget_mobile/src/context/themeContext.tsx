import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance } from "react-native";

const initialContextValue = {
    theme: null,
    handleThemeChange: () => {}
}

type ThemeContextType = {
    theme: 'dark' | 'light' | null
    handleThemeChange: () => void
}

interface ThemeProviderProps {
    children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContextType>(initialContextValue)

export function ThemeProvider({children} : ThemeProviderProps) {
    const [theme, setTheme] = useState<'dark' | 'light' | null>('dark')

    function handleThemeChange() {
        setTheme((prevTheme) => {
            return prevTheme === 'light' ? 'dark' : 'light'
        })
    }

    // Function to get theme preferences or dark as default
    async function getThemePreferences() {
        const storedTheme = await AsyncStorage.getItem('theme')

        if (storedTheme) {
            setTheme(storedTheme === 'light' ? 'light' : 'dark')

            return
        }

        const deviceThemePreferences = Appearance.getColorScheme()

        setTheme(deviceThemePreferences === 'light' ? 'light' : 'dark')
    }

    // Function to store theme preferences on local storage
    async function storeThemePreferences() {
        if (!theme) {
            return
        }

        await AsyncStorage.setItem('theme', theme)
    }

    useEffect(() => {
        getThemePreferences()
    }, [])
    
    useEffect(() => {
        storeThemePreferences()
    }, [theme])

    return theme ? (
        <ThemeContext.Provider value={{
            theme,
            handleThemeChange
        }}>
            {children}
        </ThemeContext.Provider>
    ) : null
}