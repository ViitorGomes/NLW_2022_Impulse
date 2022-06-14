import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { theme } from '../../theme';

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
  return (
    <TouchableOpacity
        disabled={isDisabled ? true : false}
        style={isDisabled ? styles.buttonDisabled : styles.button}
        {...rest}
    >
        {isLoading ? (
            <ActivityIndicator
                color={theme.colors.text_on_brand_color}
            />
        ) : (
            <Text style={styles.buttonText}>Enviar feedback</Text>
        )}
    </TouchableOpacity>
  );
}