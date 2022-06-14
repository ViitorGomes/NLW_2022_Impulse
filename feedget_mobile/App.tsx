import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import Widget from './src/components/Widget';
import { theme } from './src/theme';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

export default function App() {

  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <StatusBar 
        style="light" 
        backgroundColor="transparent"
        translucent
      />

      <Widget/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  }
});