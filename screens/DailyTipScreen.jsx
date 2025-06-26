import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import styles from '../styles/DailyTipStyles';
import { Usuario } from '../services/Usuario';
import { useAuth } from '../context/AuthContext';

const ConsejoDelDia = () => {
  const router = useRouter();
  const { token } = useAuth();
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [acceptedTips, setAcceptedTips] = useState({}); // para marcar los aceptados

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const res = await Usuario.getDailyTips(token);
        setTips(res.tips || []);
      } catch (err) {
        console.error('Error al obtener consejos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTips();
  }, []);

  const toggleConsejo = (id) => {
    setAcceptedTips(prev => ({ ...prev, [id]: !prev[id] }));
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#1976d2" />
      </View>
    );
  }

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

      {/* Tarjetas de consejos */}
      {tips.map((tip) => (
        <View key={tip.id} style={styles.card}>
          <Text style={styles.cardTitle}>Consejo del día</Text>
          <Text style={styles.subTitle}>Relacionado con: {tip.emotion}</Text>

          <Image
            source={{ uri: `http://192.168.100.29:5000/uploads/dailytips/${tip.image_dailyTip}` }}
            style={styles.image}
          />

          <Text style={styles.cardHeading}>Sugerencia emocional</Text>
          <Text style={styles.cardText}>{tip.tip}</Text>

          <TouchableOpacity
            style={[
              styles.actionButton,
              acceptedTips[tip.id] && styles.actionButtonAccepted
            ]}
            onPress={() => toggleConsejo(tip.id)}
          >
            <Text style={styles.actionButtonText}>
              {acceptedTips[tip.id] ? 'Consejo aceptado' : 'Tomar consejo'}
            </Text>
          </TouchableOpacity>
        </View>
      ))}

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
