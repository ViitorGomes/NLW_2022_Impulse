import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface_secondary,
    width: 104,
    height: 112,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    color: theme.colors.text_primary,
    marginTop: 8,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: theme.fonts.medium,
  }
});