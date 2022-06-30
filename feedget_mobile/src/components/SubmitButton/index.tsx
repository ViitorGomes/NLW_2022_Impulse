import React, { useContext } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { ThemeContext } from '../../context/themeContext';
import { colorsScheme } from '../../theme/colors';
import { styles } from './styles';

interface SubmitButtonProps extends TouchableOpacityProps {
    isLoading: boolean
    isDisabled: boolean
}

export function SubmitButton({
    isLoading,
    isDisabled,
    ...rest
} : SubmitButtonProps) {

    const { theme } = useContext(ThemeContext)

    return (
        <TouchableOpacity
            disabled={isDisabled ? true : false}
            style={[styles.button, {
                backgroundColor: colorsScheme[theme!].brand,
                opacity: isDisabled ? 0.5 : 1
            }]}
            {...rest}
        >
            {isLoading ? (
                <ActivityIndicator
                    color={colorsScheme[theme!].text_on_brand_color}
                />
            ) : (
                <Text style={[styles.buttonText, {
                    color: colorsScheme[theme!].text_on_brand_color,
                }]}>Enviar feedback</Text>
            )}
        </TouchableOpacity>
    );
}