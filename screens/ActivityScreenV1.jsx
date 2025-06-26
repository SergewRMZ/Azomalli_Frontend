import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/ActivityStyles';
import { Usuario } from '../services/Usuario';
import { useAuth } from '../context/AuthContext';

export default function ActivityScreen() {
  const navigation = useNavigation();
  const [completed, setCompleted] = useState(false);
  const [activities, setActivities] = useState([]);

  const { token } = useAuth();
  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await Usuario.getActivites(token);
        setActivities(res.activities);
      } catch (error) {
        console.error('Error fetching activities', error);
        Alert.alert('Error', 'No se pudieron cargar las actividades.');
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);


  const handlePlayVideo = async () => {
    const videoUrl = 'https://www.youtube.com/watch?v=FU4OTllcOXM'; // Cambia este enlace si quieres otro video
    const supported = await Linking.canOpenURL(videoUrl);
    if (supported) {
      Linking.openURL(videoUrl);
    } else {
      Alert.alert('Error', 'No se puede abrir el enlace del video.');
    }
  };

  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  const getYoutubeId = (url) => {
    const match = url.match(/v=([a-zA-Z0-9_-]+)/);
    return match ? match[1] : '';
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backText}>← Regresar</Text>
      </TouchableOpacity>

      <View style={styles.titleBox}>
        <Text style={styles.title}>Actividad</Text>
      </View>

      <View style={styles.descriptionBox}>
        <Text style={styles.description}>
          Esta es una actividad de ejemplo que puede representar cualquier práctica, ejercicio o tarea que desees realizar. Puedes cambiar esta descripción para ajustarla a la actividad real.
        </Text>
      </View>

      <TouchableOpacity style={styles.videoContainer} onPress={handlePlayVideo}>
        <Image
          source={{ uri: 'https://img.youtube.com/vi/FU4OTllcOXM/hqdefault.jpg' }}
          style={styles.thumbnail}
        />
        <View style={styles.playButtonOverlay}>
          <Text style={styles.playIcon}>▶</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, completed ? styles.buttonCompleted : styles.buttonNotCompleted]}
        onPress={toggleCompleted}
      >
        <Text style={styles.buttonText}>{completed ? 'Cumplido' : 'Realizar'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

