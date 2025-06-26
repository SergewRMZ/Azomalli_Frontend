import { Stack } from 'expo-router';
import { Provider as PaperProvider } from 'react-native-paper';
import { Slot } from 'expo-router';
import { AuthContext, AuthProvider } from '../context/AuthContext';
export default function Layout() {
  return (
    <AuthProvider>
      <PaperProvider>
        <Slot />
      </PaperProvider>
    </AuthProvider>
  );
}
