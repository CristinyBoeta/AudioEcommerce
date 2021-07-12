import { StyleSheet } from 'react-native';
import { backgroundColor, inputColor } from '../../../helpers/colors';
import { windowWidth } from '../../../helpers/dimensions';

const styles = StyleSheet.create({
  button: {
    width: 107,
    height: 25,
    borderRadius: 50,
    backgroundColor: backgroundColor,
    borderWidth: 0.5,
    borderColor: inputColor,
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 12,
    color: inputColor,
  },
  flatlist: {
    paddingHorizontal: windowWidth / 15,
  },
  itemSeparator: {
    width: 11,
  },
});

export default styles;
