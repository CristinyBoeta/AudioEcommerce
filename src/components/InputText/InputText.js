import { inputColor } from '../../helpers/colors';
import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const InputText = (props) => {
  return (
    <View style={styles.container}>
      <Icon name={props.iconName} size={20} color={inputColor} />
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
