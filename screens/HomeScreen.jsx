import { View, ImageBackground } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { Link } from 'expo-router';
import { styles } from '../styles/HomeScreenStyles';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/Fondo_Home.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.textContainer}>
          <Text variant="headlineMedium" style={styles.title}>
            Azomalli
          </Text>

          <Text variant="bodyMedium" style={styles.subtitle}>
            Tu espacio para respirar, relajarte y reconectar contigo mismo.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Link href="/login" asChild>
            <Button mode="contained" style={styles.button}>Iniciar sesión</Button>
          </Link>

          <Link href="/register" asChild>
            <Button mode="outlined" style={styles.button}>Registrarse</Button>
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
}

