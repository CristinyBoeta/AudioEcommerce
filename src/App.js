import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { backgroundColor } from './helpers/colors';
import { UsuarioLogadoProvider } from './contexto/contextUsuario';
import Rotas from './navigation/Rotas';

const App = () => {
  return (
    <SafeAreaProvider style={{ backgroundColor: backgroundColor }}>
      <NavigationContainer>
        <UsuarioLogadoProvider>
          <Rotas />
        </UsuarioLogadoProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
