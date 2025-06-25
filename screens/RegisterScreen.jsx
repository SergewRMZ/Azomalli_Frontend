import { View, ImageBackground, Alert } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import CustomInput from '../components/CustomInput';
import { styles } from '../styles/RegisterScreenStyles';
import { colors } from '../styles/colors';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const router = useRouter();

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const storeUserData = (name, email, password) => {
    const userData = {
      name,
      email,
      password,
    };

    const userDataJSON = JSON.stringify(userData);
    console.log('Datos del usuario en JSON:', userDataJSON);

    // Aquí podrías almacenar en AsyncStorage, enviarlo al backend, etc.
    return userDataJSON;
  };

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Campos incompletos', 'Por favor, completa todos los campos.');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Correo inválido', 'Ingresa un correo electrónico válido.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Contraseña débil', 'La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    // Guardar y mostrar los datos en formato JSON
    const jsonData = storeUserData(name, email, password);

    // Navegar a la siguiente pantalla
    router.push('/pruebas');
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
            label="Usuario"
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

          <CustomInput
            label="Confirmar contraseña"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            icon="lock-check"
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
