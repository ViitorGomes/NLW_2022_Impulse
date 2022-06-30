import { StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1000,
    top: 16,
    right: 16,
    marginTop: StatusBar.currentHeight,
  }
});