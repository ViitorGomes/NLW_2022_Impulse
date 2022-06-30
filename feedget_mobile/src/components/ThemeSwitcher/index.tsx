import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../context/themeContext';
import { styles } from './styles';
import { colorsScheme } from '../../theme/colors';
import { Moon, Sun } from 'phosphor-react-native';

export function ThemeSwitcher() {
    const { theme, handleThemeChange } = useContext(ThemeContext)

    return (
        <TouchableOpacity 
            style={[styles.button, {
                backgroundColor: colorsScheme[theme!].brand,
            }]}
            onPress={handleThemeChange}
        >
            {
                theme === 'light' ? (
                    <Sun
                        weight='bold'
                        size={18}
                        color={colorsScheme[theme!].text_on_brand_color}
                    />
                ) : (
                    <Moon
                        weight='bold'
                        size={18}
                        color={colorsScheme[theme!].text_on_brand_color}
                    />
                )
            }
        </TouchableOpacity>
    );
}