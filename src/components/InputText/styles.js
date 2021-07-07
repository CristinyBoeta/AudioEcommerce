import { inputColor } from '../../helpers/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: inputColor,
    borderWidth: 1,
    width: 326,
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  textInput: {
    fontSize: 14,
    color: inputColor,
  },
});

export default styles;
