import { backgroundColor, primaryColor } from '../../helpers/colors';
import { StyleSheet } from 'react-native';
import { windowHeight } from '../../helpers/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: windowHeight / 12,
    marginBottom: windowHeight / 3.5,
  },
  title: {
    fontSize: 51,
    color: backgroundColor,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  },
  secondaryTitle: {
    textAlign: 'center',
    fontSize: 14,
    color: backgroundColor,
    fontFamily: 'Roboto-Medium',
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
