import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import CustomInput from '../components/CustomInput';
import { styles } from '../styles/RegisterScreenStyles';
import { colors } from '../styles/colors';
import { Usuario } from '../services/auth/Usuario';
import CustomAlert from '../components/CustomAlert'; // Importamos el CustomAlert

export default function RegisterScreen() {
  const [username, setUsername] = useState('Sergew');
  const [email, setEmail] = useState('serge.martinez@gmail.com');
  const [password, setPassword] = useState('serge+12E');
  const [confirmPassword, setConfirmPassword] = useState('serge+12E');
  const [errorRegister, setErrorRegister] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false); 
  const [alertMessage, setAlertMessage] = useState(''); 
  const [alertTitle, setAlertTitle] = useState(''); 
  const router = useRouter();

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const storeUserData = (username, email, password) => {
    const userData = { username, email, password };
    return userData;
  };

  const handleRegister = async () => {
    if (!username || !email || !password || !confirmPassword) {
      setAlertTitle('Campos incompletos');
      setAlertMessage('Por favor, completa todos los campos.');
      setAlertVisible(true);
      return;
    }

    if (!isValidEmail(email)) {
      setAlertTitle('Correo inválido');
      setAlertMessage('Ingresa un correo electrónico válido.');
      setAlertVisible(true);
      return;
    }

    if (password.length < 6) {
      setAlertTitle('Contraseña débil');
      setAlertMessage('La contraseña debe tener al menos 6 caracteres.');
      setAlertVisible(true);
      return;
    }

    if (password !== confirmPassword) {
      setAlertTitle('Error');
      setAlertMessage('Las contraseñas no coinciden.');
      setAlertVisible(true);
      return;
    }

    try {
      const formData = storeUserData(username, email, password);
      const data = await Usuario.register(formData);
      setAlertTitle('Éxito')
      setAlertMessage('Usuario registrado exitósamente');
      setAlertVisible(true);
      setErrorRegister(false);
    } catch (error) {
      setAlertTitle('Ha ocurrido un error');
      setAlertMessage(error.data.error);
      setAlertVisible(true);
      setErrorRegister(true);
      console.log(error.data[0]);
    }
  };

  const handleRedirect = () => {
    if(!errorRegister) {
      router.push('/login');
      setAlertVisible(false); 
    }
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
            value={username}
            onChangeText={setUsername}
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

      {/* Usamos el componente CustomAlert */}
      <CustomAlert
        visible={alertVisible}
        error={errorRegister}
        onDismiss={() => setAlertVisible(false)}
        title={alertTitle}
        message={alertMessage}
        buttonText="Aceptar"
        onButtonPress={handleRedirect}
      />
    </ImageBackground>
  );
}
