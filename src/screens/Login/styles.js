import { backgroundColor, primaryColor } from '../../helpers/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  buttonStyles: {
    backgroundColor: 'transparent',
  },
  accountQuestionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountText: {
    color: backgroundColor,
    fontSize: 14,
    textAlign: 'center',
  },
  singUpButton: {
    width: 'auto',
    height: 'auto',
  },
  singUpText: {
    color: primaryColor,
    textDecorationStyle: 'solid',
    textDecorationColor: primaryColor,
    textDecorationLine: 'underline',
  },
});

export default styles;
