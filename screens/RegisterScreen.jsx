import { View, ImageBackground } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useState } from 'react';
import CustomInput from '../components/CustomInput';
import { styles } from '../styles/RegisterScreenStyles';
import { colors } from '../styles/colors';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Registrando:', { name, email, password });
  };

  const themeColors = {
    primary: colors.greenLight,
    onSurfaceVariant: 'rgba(255,255,255,0.9)',
    background: 'rgba(0,0,0,1)',
  };

  return (
    <ImageBackground
      source={require('../assets/Fondo_Register.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.formCard}>
          <Text style={styles.title}>Registrarse</Text>

          
          <CustomInput
            label="Nombre"
            value={name}
            onChangeText={setName}
            icon="account"
            style={styles.input}
            themeColors={themeColors}
          />

          <CustomInput
            label="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            icon="email"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            themeColors={themeColors}
          />

          <CustomInput
            label="Contraseña"
            value={password}
            onChangeText={setPassword}
            icon="lock"
            secureTextEntry
            style={styles.input}
            themeColors={themeColors}
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
