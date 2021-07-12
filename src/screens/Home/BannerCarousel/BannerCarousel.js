import React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const BannerCarousel = () => {
  return (
    <FlatList
      data={produtosData}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.banner}>
          <View style={styles.bannerLeft}>
            <Text style={styles.perguntaTexto}>{item.titulo}</Text>
            <Text style={styles.shopTexto}>
              Shop now <Icon name='arrow-right' size={20} />
            </Text>
          </View>
          <Image source={item.image} style={styles.bannerImage} />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatlist}
    />
  );
};

export default BannerCarousel;

const produtosData = [
  {
    id: 0,
    image: require('../../../assets/png/headphone.png'),
    titulo: 'TMA-2 Modular Headphone',
  },
  {
    id: 1,
    image: require('../../../assets/png/headphone.png'),
    titulo: 'TMA-2 Modular Headphone',
  },
  {
    id: 2,
    image: require('../../../assets/png/headphone.png'),
    titulo: 'TMA-2 Modular Headphone',
  },
  {
    id: 3,
    image: require('../../../assets/png/headphone.png'),
    titulo: 'TMA-2 Modular Headphone',
  },
];
