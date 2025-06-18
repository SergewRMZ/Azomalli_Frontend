import { 
  View, 
  Text, 
  Pressable, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  Linking,
  SafeAreaView 
} from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/EjercicioScreenStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function EjercicioScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleOpenYoutube = () => {
    Linking.openURL('https://www.youtube.com/watch?v=HZn7SwU-lN8');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f0eae4' }}>
      <ScrollView 
        contentContainerStyle={[
          styles.container,
          { paddingBottom: insets.bottom + 100 }
        ]}
      >
        {/* Botón de regreso */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backText}>← Regresar</Text>
          </Pressable>
        </View>

        {/* Título */}
        <Text style={styles.title}>Yoga</Text>

        {/* Descripción */}
        <View style={styles.descriptionBox}>
          <Text style={styles.description}>
            El yoga es una práctica antigua de la India que combina posturas, respiración y meditación
            para fortalecer el cuerpo, aumentar la flexibilidad y favorecer la relajación, logrando un
            equilibrio entre mente y cuerpo.
          </Text>
        </View>

        {/* Video */}
        <Pressable onPress={handleOpenYoutube} style={styles.videoContainer}>
          <Image
            source={{ uri: 'https://img.youtube.com/vi/HZn7SwU-lN8/0.jpg' }}
            style={styles.thumbnail}
            resizeMode="cover"
          />
        </Pressable>
      </ScrollView>

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