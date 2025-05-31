import { View, ImageBackground } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { Link } from 'expo-router';
import { useState } from 'react';
import { styles } from '../styles/RegisterScreenStyles';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Registrando:', { name, email, password });
  };

  return (
    <ImageBackground
      source={require('../assets/Fondo_Home.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.formContainer}>
          <Text variant="headlineMedium" style={styles.title}>
            Crear cuenta
          </Text>

          <TextInput
            label="Nombre"
            value={name}
            onChangeText={setName}
            style={styles.input}
            mode="outlined"
          />

          <TextInput
            label="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            mode="outlined"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            label="Contraseña"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            mode="outlined"
            secureTextEntry
          />

          <Button mode="contained" onPress={handleRegister} style={styles.button}>
            Registrarse
          </Button>

          <Link href="/login">
            <Text style={styles.loginLink}>¿Ya tienes cuenta? Inicia sesión</Text>
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
}
