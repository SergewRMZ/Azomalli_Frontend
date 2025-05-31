import { View, ImageBackground } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { Link } from 'expo-router';
import { useState } from 'react';
import { styles } from '../styles/RegisterScreenStyles';
import { colors } from '../styles/colors';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Registrando:', { name, email, password });
  };

  return (
    <ImageBackground
      source={require('../assets/Fondo_Register.avif')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.formCard}>
          <Text style={styles.title}>Registrarse</Text>

          <TextInput
            label="Nombre"
            value={name}
            onChangeText={setName}
            style={styles.input}
            mode="outlined"
            left={<TextInput.Icon icon="account" color={'#fff'}/>}
            textColor='#fff'
            theme={{
              colors: {
                primary: colors.blue,
                onSurfaceVariant: 'rgba(255,255,255,0.9)',
                background: 'rgba(0,0,0,0.6)',
              }
            }}
          />
          <TextInput
            label="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            mode="outlined"
            keyboardType="email-address"
            autoCapitalize="none"
            left={<TextInput.Icon icon="email" color={'#fff'}/>}
            textColor='#fff'
            theme={{
              colors: {
                primary: colors.blue,
                onSurfaceVariant: 'rgba(255,255,255,0.9)',
                background: 'rgba(0,0,0,0.6)',
              }
            }}
          />
          <TextInput
            label="Contraseña"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            mode="outlined"
            secureTextEntry
            left={<TextInput.Icon icon="lock" color={'#fff'}/>}
            textColor='#fff'
            theme={{
              colors: {
                primary: colors.blue,
                onSurfaceVariant: 'rgba(255,255,255,0.9)',
                background: 'rgba(0,0,0,0.6)',
              }
            }}
          />

          <Button 
            mode="contained" 
            onPress={handleRegister} 
            style={styles.button}
            labelStyle={styles.buttonLabel}
            >
              Continuar
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
}
