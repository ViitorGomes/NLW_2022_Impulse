import React, { useContext, useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from "phosphor-react-native";
import { styles } from './styles';
import BottomSheet from '@gorhom/bottom-sheet'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Form } from '../Form';
import { colorsScheme } from '../../theme/colors'
import { ThemeContext } from '../../context/themeContext';
import { getBottomSpace } from 'react-native-iphone-x-helper';

function Widget() {

  const bottomSheetRef = useRef<BottomSheet>(null)
  const { theme } = useContext(ThemeContext)

  function handleOpenBottomSheet() {
    bottomSheetRef.current?.expand()
  }
  
  return (
    <>
      <TouchableOpacity 
        style={[styles.button, {
          backgroundColor: colorsScheme[theme!].brand,
          shadowColor: colorsScheme[theme!].brand,
        }]}
        onPress={handleOpenBottomSheet}
      >
        <ChatTeardropDots
          size={32}
          weight="bold"
          color={colorsScheme[theme!].text_on_brand_color}

        />
      </TouchableOpacity>
      <BottomSheet
        style={{
          marginTop: 1
        }}
        ref={bottomSheetRef}
        snapPoints={[1, 281]}
        backgroundStyle={{
          backgroundColor: colorsScheme[theme!].surface_primary,
          paddingBottom: getBottomSpace() + 16,
        }}
        handleIndicatorStyle={{
          backgroundColor: colorsScheme[theme!].text_primary,
          width: 56,
        }}
      >
        <Form />
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget)