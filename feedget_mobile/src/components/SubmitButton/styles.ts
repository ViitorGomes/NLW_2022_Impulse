import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: theme.colors.brand,
        height: 40,
    },
    buttonDisabled: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5,
        borderRadius: 4,
        backgroundColor: theme.colors.brand,
        height: 40,
    },
    buttonText: {
        color: theme.colors.text_primary,
        fontSize: 14,
        lineHeight: 24,
        fontFamily: theme.fonts.medium,
    }
});