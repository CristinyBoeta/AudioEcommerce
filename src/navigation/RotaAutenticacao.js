import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Cadastro from '../screens/Cadastro/Cadastro';

const Stack = createStackNavigator();

const RotaAutenticacao = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Cadastro' component={Cadastro} />
    </Stack.Navigator>
  );
};

export default RotaAutenticacao;
