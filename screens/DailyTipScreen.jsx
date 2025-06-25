import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import styles from '../styles/DailyTipStyles';

const ConsejoDelDia = () => {
  const router = useRouter();
  const [consejoAceptado, setConsejoAceptado] = useState(false);

  const toggleConsejo = () => {
    setConsejoAceptado(!consejoAceptado);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Botón regresar */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.push('/pantallaPrincipal')}
      >
        <Ionicons name="arrow-back" size={20} color="#fff" />
        <Text style={styles.backText}>Regresar</Text>
      </TouchableOpacity>

      {/* Tarjeta */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Consejo del día</Text>
        <Text style={styles.subTitle}>Tómalo en cuenta</Text>

        <Image
          source={require('../assets/respirar.png')}
          style={styles.image}
        />

        <Text style={styles.cardHeading}>Respirar es importante...</Text>
        <Text style={styles.cardText}>
          Relaja tu cuerpo y mente inhalando lentamente por la nariz y exhalando por la boca. 
          Puedes hacer esto varias veces al día.
        </Text>

        <TouchableOpacity
          style={[
            styles.actionButton,
            consejoAceptado && styles.actionButtonAccepted
          ]}
          onPress={toggleConsejo}
        >
          <Text style={styles.actionButtonText}>
            {consejoAceptado ? 'Consejo aceptado' : 'Tomar consejo'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Frase final */}
      <View style={styles.footerNote}>
        <Text style={styles.footerText}>
          Recuerda: un consejo es solo el primer paso; el verdadero cambio requiere acción y compromiso.
        </Text>
      </View>
    </ScrollView>
  );
};

export default ConsejoDelDia;
