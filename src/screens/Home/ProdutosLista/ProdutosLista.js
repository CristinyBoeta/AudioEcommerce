import React from 'react';
import { FlatList, View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ProdutosLista = () => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.subTitle}>Featured Products</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.textButton}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={produtosData}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.nome}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatlist}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
};

export default ProdutosLista;

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
