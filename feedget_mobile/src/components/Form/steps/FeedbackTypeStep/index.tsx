import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { feedbackTypes } from '../../../../utils/feedbackTypes';
import { FeedbackType } from "../../"
import { Option } from '../../../Option';
import { styles } from './styles';
import { colorsScheme } from '../../../../theme/colors'
import { ThemeContext } from '../../../../context/themeContext';

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep({onFeedbackTypeChanged}: FeedbackTypeStepProps) {

    const { theme } = useContext(ThemeContext)

    return (
        <View style={styles.container}>
            <Text style={[styles.heading, {
                color: colorsScheme[theme!].text_primary,
            }]}>Deixe seu feedback</Text>
            <View style={styles.options}>
                {Object.entries(feedbackTypes).map(([key, value]) => (
                    <Option 
                        key={key}
                        title={value.title}
                        image={value.image.source}
                        onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
                    />
                ))}
            </View>
        </View>
    );
}