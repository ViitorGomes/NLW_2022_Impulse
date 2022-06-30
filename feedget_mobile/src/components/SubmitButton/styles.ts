import { StyleSheet } from 'react-native';
import { fonts } from '../../theme/fonts';

export const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        height: 40,
    },
    buttonText: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: fonts.medium,
    }
});