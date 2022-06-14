import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  copyRight: {
    color: theme.colors.text_secondary,
    fontSize: 12,
    lineHeight: 16,
    fontFamily: theme.fonts.medium,
  }
});