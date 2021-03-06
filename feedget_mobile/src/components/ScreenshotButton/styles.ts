import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    padding: 4,
    width: 40,
    height: 40,
    borderRadius: 4,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeIcon: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    zIndex: 1000,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 4,
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 999,
  }
});