import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Register'>;
};

const RegisterForm: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Correo electrónico" style={styles.input} />
      <TextInput placeholder="Usuario" style={styles.input} />
      <TextInput placeholder="Contraseña" style={styles.input} secureTextEntry />
      <Button title="Registrar" onPress={() => {}} />
      <Text style={styles.navText} onPress={() => navigation.navigate('Login')}>
        ¿Ya tienes una cuenta? Inicia sesión ahora
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  navText: {
    color: 'blue',
    marginTop: 10,
  },
});

export default RegisterForm;
