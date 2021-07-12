import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../../helpers/dimensions';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: windowHeight / 20,
  },
  headerLeft: {
    marginLeft: windowWidth / 15,
  },
  headerTitle: {
    width: 100,
    resizeMode: 'contain',
  },
  headerRight: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    marginRight: windowWidth / 15,
  },
  subContainer: {
    marginHorizontal: windowWidth / 15,
  },
  textoContainer: {
    marginBottom: windowHeight / 30,
  },
  olaTexto: {
    fontSize: 16,
  },
  perguntaTexto: {
    fontSize: windowWidth / 15,
    fontWeight: 'bold',
    marginTop: 5,
  },
  barraPesquisa: {
    marginBottom: windowHeight / 20,
    width: windowWidth / 1.15,
  },
});

export default styles;
