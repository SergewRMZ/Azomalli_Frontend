import { View, Text, Image, Pressable, SafeAreaView, TouchableOpacity } from 'react-native';
import { styles } from '../styles/ConsejoScreenStyles';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect } from 'react';

export default function ConsejoScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f0eae4' }}>
      <View style={[styles.container, { paddingBottom: insets.bottom + 120 }]}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>← Regresar</Text>
        </Pressable>

        <View style={styles.titleBox}>
          <Text style={styles.titleText}>Consejo del día</Text>
        </View>

        <Image
          source={require('../assets/ConsejoImagen.jpg')}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.tipCard}>
          <Text style={styles.tipText}>
            Recuerda: un consejo es solo el primer paso; el verdadero cambio requiere acción y compromiso.
          </Text>
        </View>
      </View>

      {/* Menú inferior */}
      <View style={[
        styles.bottomMenu,
        { marginBottom: insets.bottom }
      ]}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/ajustes')}
        >
          <Icon name="cog" size={28} color="#fff" />
          <Text style={styles.menuLabel}>Ajustes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/perfil')}
        >
          <Icon name="account" size={28} color="#fff" />
          <Text style={styles.menuLabel}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/notificaciones')}
        >
          <Icon name="bell" size={28} color="#fff" />
          <Text style={styles.menuLabel}>Notificaciones</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}