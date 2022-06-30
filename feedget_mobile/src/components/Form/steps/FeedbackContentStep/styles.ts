import { StyleSheet } from 'react-native';
import { fonts } from '../../../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 24, 
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  titleImage: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  titleText: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: fonts.medium,
  },
  commentInput: {
    width: '100%',
    height: 112,
    borderRadius: 4,
    padding: 10,
    borderWidth: 1,
    fontFamily: fonts.regular,
    textAlignVertical: 'top',
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  }
});