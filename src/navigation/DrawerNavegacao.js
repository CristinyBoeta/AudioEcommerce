import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home/Home';
import { backgroundColor } from '../helpers/colors';

const Drawer = createDrawerNavigator();

const DrawerNavegacao = () => {
  return (
    <Drawer.Navigator sceneContainerStyle={{ backgroundColor: backgroundColor }}>
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Carrinho' component={Home} />
      <Drawer.Screen name='MeuPerfil' component={Home} />
      <Drawer.Screen name='Categorias' component={Home} />
    </Drawer.Navigator>
  );
};

export default DrawerNavegacao;
