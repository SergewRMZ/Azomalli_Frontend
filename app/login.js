import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function LoginScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Login</Text>
      <Link href="/register">
        <Text style={{ color: 'blue', marginTop: 10 }}>¿No tienes cuenta? Regístrate</Text>
      </Link>
    </View>
  );
}
