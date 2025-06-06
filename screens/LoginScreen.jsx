import { View, Text, TextInput, Pressable, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { styles } from '../styles/LoginScreenStyles';

export default function LoginScreen() {
  return (
    <ImageBackground
      source={require('../assets/FondoLogin.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.formCard}>
          <Text style={styles.title}>Iniciar sesión</Text>

          <Text style={styles.label}>Usuario</Text>
          <TextInput style={styles.input} placeholder="" />

          <Text style={styles.label}>Contraseña</Text>
          <TextInput style={styles.input} placeholder="" secureTextEntry />

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Iniciar</Text>
          </Pressable>

          <View style={styles.registerLink}>
            <Text style={styles.registerText}>¿No tienes una cuenta?</Text>
            <Link href="/register">
              <Text style={[styles.registerText, styles.registerBold]}>Regístrate</Text>
            </Link>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
