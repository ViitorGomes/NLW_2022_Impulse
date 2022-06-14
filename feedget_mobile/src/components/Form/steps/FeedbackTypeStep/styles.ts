import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme';

export const styles = StyleSheet.create({
  container: {
        alignItems: 'center',
        marginBottom: 48,
    },
    heading: {
        fontSize: 20,
        lineHeight: 24,
        fontFamily: theme.fonts.medium,
        color: theme.colors.text_primary,
        marginBottom: 32,
    },
    options: {
        flexDirection: 'row',
    },
});