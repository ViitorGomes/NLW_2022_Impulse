import { StyleSheet } from 'react-native';
import { fonts } from '../../../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
        alignItems: 'center',
        marginBottom: 48,
    },
    heading: {
        fontSize: 20,
        lineHeight: 24,
        fontFamily: fonts.medium,
        marginBottom: 32,
    },
    options: {
        flexDirection: 'row',
    },
});