import { StyleSheet } from 'react-native';
import { backgroundColor, inputColor } from '../../../helpers/colors';
import { windowWidth, windowHeight } from '../../../helpers/dimensions';

const styles = StyleSheet.create({
  card: {
    width: windowWidth / 2.5,
    height: windowHeight / 3.5,
    padding: windowWidth / 20,
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 2,
  },
  cardImage: {
    width: windowWidth / 3.5,
    resizeMode: 'contain',
  },
  nome: {
    fontSize: 14,
    fontWeight: '400',
  },
  flatlist: {
    paddingHorizontal: windowWidth / 15,
    paddingVertical: 10,
  },
  itemSeparator: {
    width: 15,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: windowWidth / 15,
    marginBottom: windowHeight / 40,
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 16,
  },
  textButton: {
    fontSize: 14,
    color: inputColor,
  },
  seeAllButton: {
    padding: 5,
  },
});

export default styles;
