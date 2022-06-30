import React, { useContext, useState } from 'react';
import { TouchableOpacity, ActivityIndicator, Image, Alert } from 'react-native';
import { Camera, Trash } from 'phosphor-react-native';
import { captureScreen } from 'react-native-view-shot';
import { styles } from './styles';
import { colorsScheme } from '../../theme/colors';
import { ThemeContext } from '../../context/themeContext';

interface ScreenshotButtonProps {
    screenshot: string | null
    onScreenshotTook: (screenshot: string | null) => void
}

export function ScreenshotButton({
    screenshot,
    onScreenshotTook
} : ScreenshotButtonProps) {

    const [ isTakingScreenshot, setIsTakingScreenshot ] = useState<boolean>(false)
    const { theme } = useContext(ThemeContext)

    function handleTakeScreenshot() {
        setIsTakingScreenshot(true)
        captureScreen({
            format: 'jpg',
            quality: 0.8,
        })
        .then((uri) => {
            onScreenshotTook(uri)
            setIsTakingScreenshot(false)
        })
        .catch((err) => {
            Alert.alert(
                'Erro', 
                'Erro ao tentar capturar a tela', 
                [{text: 'Entendi'}]
            )
        })
    }

    return (
        <TouchableOpacity 
            style={[styles.button, {
                backgroundColor: colorsScheme[theme!].surface_secondary,
            }]}
            onPress={() => screenshot ? onScreenshotTook(null) : handleTakeScreenshot()}
        >
            {
                isTakingScreenshot ? (
                    <ActivityIndicator/>
                ) : (
                    (
                        screenshot ? (
                            <>
                                <Image 
                                    source={{uri: screenshot}}
                                    style={styles.image}
                                />
                                <Trash 
                                    size={18}
                                    weight="fill"
                                    color={colorsScheme[theme!].text_secondary}
                                    style={styles.removeIcon}
                                />
                            </>
                        ) : (
                            <Camera 
                                size={24}
                                weight="bold"
                                color={colorsScheme[theme!].text_secondary}
                            />
                        )
                    )
                )
            }

        </TouchableOpacity>
    )
}