import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image } from 'react-native';
import { styles } from '../styles/PlanComidaStyles';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function PlanComidaScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleBack = () => router.back();

  return (
    <View style={{ flex: 1, backgroundColor: '#f4f0eb' }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          padding: 20,
          alignItems: 'center',
          paddingTop: insets.top + 20,
          paddingBottom: insets.bottom + 20,
        }}
      >
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backText}>← Regresar</Text>
        </TouchableOpacity>

        <View style={styles.headerBox}>
          <Text style={styles.headerText}>Planes{'\n'}alimenticios</Text>
        </View>

        <Text style={styles.sectionTitle}>Comida</Text>
        <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => router.push('/alimento')}
            >
            <Image
                source={require('../assets/comida.jpg')}
                style={styles.image}
                resizeMode="contain"
            />
            </TouchableOpacity>

        <Text style={styles.sectionTitle}>Bebida</Text>
        <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => router.push('/bebida')}
        >
        <Image
            source={require('../assets/bebida.jpg')}
            style={styles.image}
            resizeMode="contain"
        />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
