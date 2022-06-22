import React, { useState } from 'react';
import { ArrowLeft } from 'phosphor-react-native';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { FeedbackType } from '../..';
import { feedbackTypes } from '../../../../utils/feedbackTypes';
import { theme } from '../../../../theme';
import { ScreenshotButton } from '../../../ScreenshotButton';

import { styles } from './styles';
import { SubmitButton } from '../../../SubmitButton';
import { api } from '../../../../libs/api';
import * as FileSystem from 'expo-file-system'

interface FeedbackContentStepProps {
    feedbackType: FeedbackType
    onFeedbackRestartRequested: () => void
    onFeedbackSent: () => void
}

export function FeedbackContentStep({
    feedbackType, 
    onFeedbackRestartRequested,
    onFeedbackSent
} : FeedbackContentStepProps) {

    const feedbackTypeInfo = feedbackTypes[feedbackType]
    const [ screenshot, setScreenshot ] = useState<string | null>(null)
    const [ comment, setComment ] = useState<string>('')
    const [ isSendingFeedback, setIsSendingFeedback ] = useState<boolean>(false)

    async function handleFeedbackSubmit() {
        if (isSendingFeedback) {
            return
        }

        setIsSendingFeedback(true)

        try {
            const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(
                screenshot,
                {
                    encoding: 'base64'
                }
            )

            const feedback = {
                type: feedbackType,
                comment,
                screenshot: screenshot ? `data:image/png;base64,${screenshotBase64}` : null
            }

            await api.post('/feedbacks', feedback)
            setIsSendingFeedback(false)
            onFeedbackSent()

        } catch (err) {
            Alert.alert(
                'Erro', 
                'Erro ao tentar enviar seu feedback, tente novamente mais tarde',
                [{text: 'Entendi'}]
            )
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onFeedbackRestartRequested}
                style={styles.backButton}
            >
                <ArrowLeft 
                    size={24}
                    weight="bold"
                    color={theme.colors.text_secondary}
                />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Image
                    source={feedbackTypeInfo.image.source}
                    style={styles.titleImage}
                />
                <Text
                    style={styles.titleText}
                >{feedbackTypeInfo.title}</Text>
            </View>

            <TextInput 
                multiline
                style={styles.commentInput}
                placeholder={feedbackTypeInfo.placeholder}
                placeholderTextColor={theme.colors.text_secondary}
                value={comment}
                onChangeText={(text) => {setComment(text)}}
                autoCorrect={false}
            />

            <View style={styles.buttonsContainer}>
                <ScreenshotButton
                    screenshot={screenshot}
                    onScreenshotTook={setScreenshot}
                />
                
                <SubmitButton
                    isLoading={isSendingFeedback}
                    isDisabled={comment === '' || isSendingFeedback ? true : false}
                    onPress={handleFeedbackSubmit}
                />
            </View>
        </View>
    );
}