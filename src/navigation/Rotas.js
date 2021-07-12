import React, { useContext } from 'react';
import { UsuarioLogado } from '../contexto/contextUsuario';
import RotaAutenticacao from './RotaAutenticacao';
import DrawerNavegacao from './DrawerNavegacao';

const Rotas = () => {
  const { usuario } = useContext(UsuarioLogado);

  return usuario ? <DrawerNavegacao /> : <RotaAutenticacao />;
};

export default Rotas;
