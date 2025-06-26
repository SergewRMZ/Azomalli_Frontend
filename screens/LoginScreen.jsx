import { View, Text, TextInput, Pressable, ImageBackground } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { styles } from '../styles/LoginScreenStyles';
import CustomInput from '../components/CustomInput';
import { useState } from 'react';
import { colors } from '../styles/colors';
import { Button } from 'react-native-paper';
import CustomAlert from '../components/CustomAlert';
import { Usuario } from '../services/Usuario';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen() {

  const [email, setEmail] = useState('serge.martinez.r@gmail.com');
  const [password, setPassword] = useState('Serge+12');

  const [errorRegister, setErrorRegister] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false); 
  const [alertMessage, setAlertMessage] = useState(''); 
  const [alertTitle, setAlertTitle] = useState(''); 

  const { login } = useAuth();
  const router = useRouter();

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const storeUserData = (email, password) => {
    const userData = { email, password };
    return userData;
  };

  const handleLogin = async () => {
    if (!email || !password) {
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

    try {
      const formData = storeUserData(email, password);
      const data = await Usuario.login(formData);
      
      await login(data.account, password, data.token);

      if(data.account.surveyCompleted && data.account.termsAccepted) {
        router.push('/pantallaPrincipal');
      }
      else {
        router.push('/encuesta1');
      }
      setErrorRegister(false);
    } catch (error) {
      setAlertTitle('Ha ocurrido un error');
      setAlertMessage(error.data.error);
      setAlertVisible(true);
      setErrorRegister(true);
      console.log(error.data[0]);
    }
  };

  const themeColors = {
      primary: colors.greenLight,
      onSurfaceVariant: 'rgba(255,255,255,0.9)',
      background: 'rgba(0,0,0,1)',
      outlineColor: colors.primaryLight
    };
  return (
    <ImageBackground
      source={require('../assets/FondoLogin.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.formCard}>
          <Text style={styles.title}>Iniciar sesión</Text>

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
            onPress={handleLogin}
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            Iniciar
          </Button>

          <View style={styles.registerLink}>
            <Text style={styles.registerText}>¿No tienes una cuenta?</Text>
            <Link href="/register">
              <Text style={[styles.registerText, styles.registerBold]}>Regístrate</Text>
            </Link>
          </View>
        </View>
      </View>

       <CustomAlert
        visible={alertVisible}
        error={errorRegister}
        onDismiss={() => setAlertVisible(false)}
        title={alertTitle}
        message={alertMessage}
        buttonText="Aceptar"
        onButtonPress={() => setAlertVisible(false)}
      />
    </ImageBackground>
  );
}
