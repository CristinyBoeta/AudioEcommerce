import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import InputText from '../../components/InputText/InputText';
import Button from '../../components/Button/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <View style={styles.container}>
      <Text>Audio</Text>
      <Text>It's modular and designed to last</Text>
      <InputText value={email} onChangeText={setEmail} placeholder='Email' />
      <InputText value={senha} onChangeText={setSenha} placeholder='Password' />
      <Button titulo='Sign inForgot Password' buttonStyles={styles.buttonStyles} />
      <Button titulo='Sign in' />
      <View style={styles.accountQuestionContainer}>
        <Text style={styles.accountText}>Didn’t have any account?</Text>
        <Button
          titulo='Sing Up here'
          tituloStyles={[styles.accountText, styles.singUpText]}
          buttonStyles={[styles.buttonStyles, styles.singUpButton]}
        />
      </View>
    </View>
  );
};

export default Login;
