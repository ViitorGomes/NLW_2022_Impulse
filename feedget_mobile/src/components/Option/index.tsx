import React, { useContext } from 'react';
import { TouchableOpacity, TouchableOpacityProps, Image, ImageProps, Text } from 'react-native';
import { ThemeContext } from '../../context/themeContext';
import { colorsScheme } from '../../theme/colors';
import { styles } from './styles';

interface Props extends TouchableOpacityProps {
    title: String
    image: ImageProps
}

export function Option({title, image, ...rest} : Props) {

  const { theme } = useContext(ThemeContext)

  return (
    <TouchableOpacity 
        style={[styles.container, {
          backgroundColor: colorsScheme[theme!].surface_secondary,
        }]}
        {...rest}
    >
        <Image
          source={image}
          style={styles.image}
        />

        <Text style={[styles.text, {
          color: colorsScheme[theme!].text_primary,
        }]}>{title}</Text>
    </TouchableOpacity>
  );
}