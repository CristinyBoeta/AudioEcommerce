import { StyleSheet } from 'react-native';
import { backgroundColor, primaryColor } from '../../../helpers/colors';
import { windowHeight, windowWidth } from '../../../helpers/dimensions';

const styles = StyleSheet.create({
  shopTexto: {
    fontSize: 14,
    color: primaryColor,
    fontWeight: '700',
  },
  banner: {
    display: 'flex',
    height: windowHeight / 5,
    flexDirection: 'row',
    marginHorizontal: 24,
    padding: windowWidth / 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: windowWidth / 1.15,
    elevation: 2,
    backgroundColor: backgroundColor,
  },
  bannerLeft: {
    flex: 2,
  },
  bannerImage: {
    resizeMode: 'contain',
    width: windowWidth / 3,
    flex: 1,
  },
  flatlist: {
    marginVertical: windowHeight / 40,
    paddingVertical: windowHeight / 50,
  },
});

export default styles;
