import { backgroundColor, inputColor } from '../../helpers/colors';
import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../../helpers/dimensions';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: inputColor,
    borderWidth: 1,
    width: windowWidth / 1.1,
    height: windowHeight / 14,
    flexDirection: 'row',
    paddingHorizontal: 15,
    backgroundColor: backgroundColor,
    alignItems: 'center',
    marginTop: windowHeight / 35,
  },
  textInput: {
    fontSize: 14,
    color: inputColor,
  },
});

export default styles;
