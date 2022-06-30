import { StyleSheet } from 'react-native';
import { fonts } from '../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
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
    marginTop: 8,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: fonts.medium,
  }
});