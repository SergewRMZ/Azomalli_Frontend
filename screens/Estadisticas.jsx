import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { Usuario } from '../services/Usuario';
import { useAuth } from '../context/AuthContext';
import { colors } from '../styles/colors';

const emotionColors = {
  sadness: '#1976d2',
  nervousness: '#e53935',
  joy: '#fdd835',
  excitement: '#00acc1',
  pride: '#8e24aa',
  relief: '#43a047',
  approval: '#fb8c00',
  disapproval: '#6d4c41',
  disappointment: '#ff7043',
  gratitude: '#00c853',
  grief: '#546e7a',
  confusion: '#ab47bc',
  fear: '#c62828',
  caring: '#ef6c00',
  admiration: '#1e88e5',
  realization: '#5e35b1',
  remorse: '#8d6e63',
  disgust: '#9e9d24',
  embarrassment: '#f06292',
  anger: '#b71c1c',
};

const emotionIcons = {
  sadness: '😢',
  nervousness: '😰',
  joy: '😊',
  excitement: '🤩',
  pride: '😎',
  relief: '😌',
  approval: '👍',
  disapproval: '👎',
  disappointment: '😞',
  gratitude: '🙏',
  grief: '💔',
  confusion: '😕',
  fear: '😱',
  caring: '🤗',
  admiration: '😍',
  realization: '💡',
  remorse: '😔',
  disgust: '🤢',
  embarrassment: '😳',
  anger: '😡',
};

export default function EstadisticasScreen() {
  const { token } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const maxValue = Math.max(...data.map(d => d.total || 0), 1); // para escalar barras

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await Usuario.getStatistics(token);
        const processed = res.map(item => ({
          date: item.date.slice(5),
          value: item.total,
          emotion: item.dominantEmotion,
        }));
        setData(processed);
      } catch (err) {
        console.error('Error al obtener estadísticas:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ padding: 16, backgroundColor: '#f5f5f5', flexGrow: 1 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 20, textAlign: 'center', color: colors.primary}}>
        Historial de emociones
      </Text>

      {loading ? (
        <ActivityIndicator size="large" color="#1976d2" />
      ) : data.length === 0 ? (
        <Text style={{ textAlign: 'center' }}>No hay datos disponibles.</Text>
      ) : (
        data.map((item, idx) => (
          <View
            key={idx}
            style={{
              backgroundColor: '#fff',
              borderRadius: 12,
              padding: 12,
              marginBottom: 16,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <Text style={{ fontSize: 16, marginBottom: 6 }}>
              📅 {item.date} –{' '}
              <Text style={{ fontWeight: 'bold', color: emotionColors[item.emotion] || '#000' }}>
                {emotionIcons[item.emotion] || '❓'} {item.emotion}
              </Text>
            </Text>

            <View
              style={{
                backgroundColor: '#e0e0e0',
                height: 20,
                borderRadius: 10,
                overflow: 'hidden',
              }}
            >
              <View
                style={{
                  height: '100%',
                  width: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: emotionColors[item.emotion] || '#aaa',
                  borderRadius: 10,
                }}
              />
            </View>

            <Text style={{ fontSize: 12, color: '#555', marginTop: 6 }}>
              Total de emociones: {item.value}
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}
