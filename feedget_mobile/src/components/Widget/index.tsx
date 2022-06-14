import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from "phosphor-react-native";
import { styles } from './styles';
import { theme } from '../../theme';
import BottomSheet from '@gorhom/bottom-sheet'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Form } from '../Form';

function Widget() {

  const bottomSheetRef = useRef<BottomSheet>(null)

  function handleOpenBottomSheet() {
    bottomSheetRef.current?.expand()
  }
  
  return (
    <>
      <TouchableOpacity 
        style={styles.button}
        onPress={handleOpenBottomSheet}
      >
        <ChatTeardropDots
          size={32}
          weight="bold"
          color={theme.colors.text_on_brand_color}

        />
      </TouchableOpacity>
      <BottomSheet
        style={{
          marginTop: 1
        }}
        ref={bottomSheetRef}
        snapPoints={[1, 281]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        <Form />
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget)