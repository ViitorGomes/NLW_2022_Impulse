import { StyleSheet } from 'react-native';
import { fonts } from '../../../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    marginTop: 40,
    marginBottom: 8,
  },
  text: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: fonts.medium,
    marginBottom: 24,
  },
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    borderRadius: 4,
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: fonts.medium,
  }
});