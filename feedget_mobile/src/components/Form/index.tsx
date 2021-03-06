import React, { useContext, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { styles } from './styles';
import { FeedbackTypeStep } from './steps/FeedbackTypeStep'
import { FeedbackContentStep } from './steps/FeedbackContentStep'
import { FeedbackSuccessStep } from './steps/FeedbackSuccessStep'
import { colorsScheme } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import { ThemeContext } from '../../context/themeContext';

export type FeedbackType = keyof typeof feedbackTypes

export function Form() {

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false)
  const { theme } = useContext(ThemeContext)

  function handleFeedbackTypeReset() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  function handleFeedbackSent() {
    setFeedbackSent(true)
  }

  return (
    <View style={styles.container}>
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleFeedbackTypeReset}
        />
      ) : (
        !feedbackType ? (
          <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
        ) : (
          <FeedbackContentStep
            feedbackType={feedbackType}
            onFeedbackRestartRequested={handleFeedbackTypeReset}
            onFeedbackSent={handleFeedbackSent}
          />
        )
      )}
      <Text style={[styles.copyRight, {
        color: colorsScheme[theme!].text_secondary,
        fontFamily: fonts.medium,
      }]}>Feito com ♥ pela Rocketseat</Text>
    </View>
  );
}