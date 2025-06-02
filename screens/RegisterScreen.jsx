import { View, ImageBackground, Alert } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useState } from 'react';
import { useRouter } from 'expo-router'; // ✅ Para navegación programática
import CustomInput from '../components/CustomInput';
import { styles } from '../styles/RegisterScreenStyles';
import { colors } from '../styles/colors';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const router = useRouter(); // ✅ Hook de navegación

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    console.log('Registrando:', { name, email, password });
    // ✅ Navegar a la pantalla de datos personales
    router.push('/pedirDatos');
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
