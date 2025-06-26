import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable
} from 'react-native';
import { styles } from '../styles/ConfigStyles';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '../context/AuthContext';

export default function PerfilScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { user } = useAuth();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f0eae4' }}>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { paddingBottom: insets.bottom + 120 }
        ]}
      >
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backText}>← Regresar</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionLabel}>Datos</Text>
          <Text style={styles.sectionTitle}>Mi información</Text>

          <View style={styles.item}>
            <MaterialCommunityIcons name="fingerprint" size={20} color="#333" />
            <View style={styles.itemText}>
              <Text style={styles.label}>ID de usuario</Text>
              <Text style={styles.value}>{user?.id ?? 'No disponible'}</Text>
            </View>
          </View>

          <View style={styles.item}>
            <MaterialCommunityIcons name="account-outline" size={20} color="#333" />
            <View style={styles.itemText}>
              <Text style={styles.label}>Nombre</Text>
              <Text style={styles.value}>{user?.username ?? 'No disponible'}</Text>
            </View>
          </View>

          <View style={styles.item}>
            <MaterialCommunityIcons name="email-outline" size={20} color="#333" />
            <View style={styles.itemText}>
              <Text style={styles.label}>Correo electrónico</Text>
              <Text style={styles.value}>{user?.email ?? 'No disponible'}</Text>
            </View>
          </View>

          <View style={styles.item}>
            <MaterialCommunityIcons name="bell-outline" size={20} color="#333" />
            <View style={styles.itemText}>
              <Text style={styles.label}>Notificaciones</Text>
              <Text style={styles.value}>Activadas</Text>
            </View>
          </View>

          <View style={styles.item}>
            <MaterialCommunityIcons name="volume-high" size={20} color="#333" />
            <View style={styles.itemText}>
              <Text style={styles.label}>Sonido</Text>
              <Text style={styles.value}>Activado</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
