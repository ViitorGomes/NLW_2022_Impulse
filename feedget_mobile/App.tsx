import 'react-native-gesture-handler'
import Widget from './src/components/Widget';
import { ThemeSwitcher } from './src/components/ThemeSwitcher'
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { ThemeProvider } from './src/context/themeContext';
import { AppContainer } from './src/components/AppContainer';

export default function App() {

  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider>
      <AppContainer>
        <ThemeSwitcher />
        <Widget />
      </AppContainer>
    </ThemeProvider>
  );
}