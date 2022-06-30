import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import { ThemeContext } from '../../context/themeContext';
import { colorsScheme } from '../../theme/colors'

interface AppContainerProps {
    children: React.ReactNode
}

export function AppContainer({children} : AppContainerProps) {

    const { theme } = useContext(ThemeContext)

    return (
        <View style={{
            flex: 1,
            backgroundColor: colorsScheme[theme!].background,
        }}>
            <StatusBar 
                style={theme === 'light' ? 'dark' : 'light'} 
                backgroundColor="transparent"
                translucent
            />
            <SafeAreaView style={{
                flex: 1,
            }}>
                {children}
            </SafeAreaView>
        </View>
    );
}