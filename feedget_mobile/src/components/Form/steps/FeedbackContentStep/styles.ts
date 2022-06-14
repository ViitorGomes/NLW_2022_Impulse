import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme';

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
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },
  commentInput: {
    width: '100%',
    height: 112,
    borderRadius: 4,
    padding: 10,
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.regular,
    textAlignVertical: 'top',
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  }
});