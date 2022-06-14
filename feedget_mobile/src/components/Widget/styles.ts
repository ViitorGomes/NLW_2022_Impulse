import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    button: {
        width: 58,
        height: 58,
        borderRadius: 29,
        backgroundColor: theme.colors.brand,
        shadowColor: theme.colors.brand,
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 1,
        elevation: 8,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: getBottomSpace() + 16,
        right: 16,
    },
    modal: {
        backgroundColor: theme.colors.surface_primary,
        paddingBottom: getBottomSpace() + 16,
    },
    indicator: {
        backgroundColor: theme.colors.text_primary,
        width: 56,
    }
});