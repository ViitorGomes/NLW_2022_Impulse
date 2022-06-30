import React, { useContext } from 'react';
import { View, Image, Text, TouchableOpacity,  } from 'react-native';

import { styles } from './styles';
import successImage from '../../../../assets/success.png'
import { colorsScheme } from '../../../../theme/colors';
import { ThemeContext } from '../../../../context/themeContext';

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested: () => void
}

export function FeedbackSuccessStep({ onFeedbackRestartRequested } : FeedbackSuccessStepProps) {
    const { theme } = useContext(ThemeContext)

    return (
        <View style={styles.container}>
            <Image
                source={successImage}
                style={styles.image}
            />
            <Text style={[styles.text, {
                color: colorsScheme[theme!].text_primary,
            }]}>Agradecemos o feedback!</Text>
            <TouchableOpacity 
                style={[styles.button, {
                    backgroundColor: colorsScheme[theme!].surface_secondary,
                }]}
                onPress={onFeedbackRestartRequested}
            >
                <Text style={[styles.buttonText, {
                    color: colorsScheme[theme!].text_primary,
                }]}>Quero enviar outro</Text>
            </TouchableOpacity>
        </View>
    );
    }