import { inputColor } from '../../helpers/colors';
import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

const InputText = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        style={styles.textInput}
        placeholderTextColor={inputColor}
      />
    </View>
  );
};

export default InputText;
