import React from 'react';
import { View, Image, Text, TouchableOpacity,  } from 'react-native';

import { styles } from './styles';
import successImage from '../../../../assets/success.png'

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested: () => void
}

export function FeedbackSuccessStep({ onFeedbackRestartRequested } : FeedbackSuccessStepProps) {
  return (
    <View style={styles.container}>
        <Image
            source={successImage}
            style={styles.image}
        />
        <Text style={styles.text}>Agradecemos o feedback!</Text>
        <TouchableOpacity 
            style={styles.button}
            onPress={onFeedbackRestartRequested}
        >
            <Text style={styles.buttonText}>Quero enviar outro</Text>
        </TouchableOpacity>
    </View>
  );
}