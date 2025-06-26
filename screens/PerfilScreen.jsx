import {
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Alert
} from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../styles/PerfilScreenStyles';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';

export default function PerfilScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { user, logout } = useAuth();
  
  const handleLogout = async () => {
    console.log(user);
    Alert.alert(
      'Cerrar sesión',
      '¿Estás seguro de que deseas cerrar sesión?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sí, salir',
          style: 'destructive',
          onPress: async () => {
            await logout();
            router.replace('/login'); 
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f0e9' }}>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { paddingBottom: insets.bottom + 100 }
        ]}
      >
        {/* Botón regresar */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backText}>← Regresar</Text>
          </Pressable>
        </View>

        {/* Título */}
        <Text style={styles.title}>Seguimiento</Text>

        {/* Foto + nombre */}
        <View style={styles.profileBox}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2202/2202112.png' }}
            style={styles.avatar}
          />
          <Text style={styles.profileName}>{user?.username}{"\n"}</Text>
        </View>

        {/* Barras de progreso */}
        <View style={styles.itemBox}>
          <View style={styles.itemBarRetos}></View>
          <Text style={styles.itemLabel}>Retos</Text>
          <Text style={styles.itemValue}>5</Text>
        </View>

        <View style={styles.itemBox}>
          <View style={styles.itemBarEjercicio}></View>
          <Text style={styles.itemLabel}>Ejercicio</Text>
          <Text style={styles.itemValue}>05</Text>
        </View>

        <View style={styles.itemBox}>
          <View style={styles.itemBarPlan}></View>
          <Text style={styles.itemLabel}>Plan alimenticio</Text>
          <Text style={styles.itemValue}>10</Text>
        </View>

        <View style={styles.itemBox}>
          <View style={styles.itemBarConsejos}></View>
          <Text style={styles.itemLabel}>Consejos</Text>
          <Text style={styles.itemValue}>7</Text>
        </View>

        {/* Días cumplidos */}
        <View style={styles.daysBox}>
          <Text style={styles.daysText}>HAS CUMPLIDO</Text>
          <Text style={styles.daysNumber}>8</Text>
          <Text style={styles.daysSubtext}>DÍAS USANDO LA APLICACIÓN</Text>
        </View>

        {/* Botón Cerrar sesión */}
        <Pressable
          onPress={handleLogout}
          style={{
            marginTop: 40,
            backgroundColor: '#e53935',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>
            Cerrar sesión
          </Text>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  );
}
