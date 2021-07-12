import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import InputText from '../../components/InputText/InputText';
import ListaCategorias from './ListaCategorias/ListaCategorias';
import BannerCarousel from './BannerCarousel/BannerCarousel';
import ProdutosLista from './ProdutosLista/ProdutosLista';

const Home = (props) => {
  const [pesquisar, setPesquisar] = useState('');
  const [categoriaSelecionadaIndex, setCategoriaSelecionadaIndex] = useState(0);

  useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      headerLeft: () => (
        <Icon
          name='menu'
          size={20}
          style={styles.headerLeft}
          onPress={() => props.navigation.openDrawer()}
        />
      ),
      headerTitle: () => (
        <Image source={require('../../assets/png/Logo.png')} style={styles.headerTitle} />
      ),
      headerTitleAlign: 'center',
      headerRight: () => (
        <Image source={require('../../assets/png/Avatar.png')} style={styles.headerRight} />
      ),
    });
  }, [props.navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container} nestedScrollEnabled>
      <View style={styles.subContainer}>
        <View style={styles.textoContainer}>
          <Text style={styles.olaTexto}>Hi, Andrea</Text>
          <Text style={styles.perguntaTexto}>What are you looking for today?</Text>
        </View>
        <InputText
          placeholder='Search headphone'
          iconName='search-web'
          value={pesquisar}
          onChangeText={setPesquisar}
          containerStyle={styles.barraPesquisa}
        />
      </View>
      <ListaCategorias
        categoriaSelecionadaIndex={categoriaSelecionadaIndex}
        setCategoriaSelecionadaIndex={setCategoriaSelecionadaIndex}
      />
      <BannerCarousel />
      <ProdutosLista />
    </ScrollView>
  );
};

export default Home;
