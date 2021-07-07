import { StyleSheet } from 'react-native';
import { backgroundColor, primaryColor } from '../../helpers/colors';

const styles = StyleSheet.create({
  container: {
    width: 326,
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  titulo: {
    fontSize: 16,
    color: backgroundColor,
  },
});

export default styles;
