import React from 'react';
import { FlatList, View } from 'react-native';
import Button from '../../../components/Button/Button';
import { backgroundColor, primaryColor } from '../../../helpers/colors';
import styles from './styles';

const ListaCategorias = (props) => {
  //categoriaSelecionadaIndex
  //setCategoriaSelecionadaIndex
  return (
    <FlatList
      data={categoriasData}
      renderItem={({ item, index }) => (
        <Button
          titulo={item}
          buttonStyles={[
            styles.button,
            props.categoriaSelecionadaIndex === index && { backgroundColor: primaryColor },
          ]}
          tituloStyles={[
            styles.titulo,
            props.categoriaSelecionadaIndex === index && { color: backgroundColor },
          ]}
          onPress={() => props.setCategoriaSelecionadaIndex(index)}
        />
      )}
      keyExtractor={(item, index) => index}
      horizontal
      contentContainerStyle={styles.flatlist}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ListaCategorias;

const categoriasData = ['Headphone', 'Headband', 'Earpads', 'Cable'];
