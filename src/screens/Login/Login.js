import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import InputText from '../../components/InputText/InputText';
import Button from '../../components/Button/Button';
import { UsuarioLogado } from '../../contexto/contextUsuario';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { usuario, login } = useContext(UsuarioLogado);
  console.log('usuario => ', usuario);

  const fazerLogin = () => {
    // requisição
    const usuarioCadastrado = {
      email: 'email@email',
      idade: 22,
      id: 1,
      premium: true,
      nome: 'Não sei',
    };
    login(usuarioCadastrado);
  };
  return (
    <ImageBackground
      source={require('../../assets/png/backgroundImage.png')}
      style={styles.container}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Audio</Text>
        <Text style={styles.secondaryTitle}>It's modular and designed to last</Text>
      </View>
      <View>
        <InputText
          value={email}
          onChangeText={setEmail}
          placeholder='Email'
          iconName='email-outline'
        />
        <InputText
          value={senha}
          onChangeText={setSenha}
          placeholder='Password'
          iconName='lock-outline'
        />
        <Button titulo='Forgot Password' buttonStyles={styles.buttonStyles} />
        <Button titulo='Sign in' onPress={fazerLogin} />
        <View style={styles.accountQuestionContainer}>
          <Text style={styles.accountText}>Didn’t have any account?</Text>
          <Button
            titulo='Sing Up here'
            tituloStyles={[styles.accountText, styles.singUpText]}
            buttonStyles={[styles.buttonStyles, styles.singUpButton]}
            onPress={() => props.navigation.navigate('Cadastro')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
