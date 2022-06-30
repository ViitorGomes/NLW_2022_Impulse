import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    button: {
        width: 58,
        height: 58,
        borderRadius: 29,
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 1,
        elevation: 8,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: getBottomSpace() + 16,
        right: 16,
    }
});