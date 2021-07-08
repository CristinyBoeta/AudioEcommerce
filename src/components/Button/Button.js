import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = (props) => {
  return (
    <TouchableOpacity style={[styles.container, props.buttonStyles]} onPress={props.onPress}>
      <Text style={[styles.titulo, props.tituloStyles]}>{props.titulo}</Text>
    </TouchableOpacity>
  );
};

export default Button;
