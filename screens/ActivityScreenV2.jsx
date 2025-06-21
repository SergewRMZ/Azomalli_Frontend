import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles/ActivityStyles';

export default function ActivityScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { activityId } = route.params;

  const [activity, setActivity] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://tu-servidor.com/api/activities/${activityId}`)
      .then((response) => response.json())
      .then((data) => {
        setActivity(data);
        setCompleted(data.is_completed);
        setLoading(false);
      })
      .catch((error) => {
        Alert.alert('Error', 'No se pudo cargar la actividad');
        setLoading(false);
      });
  }, [activityId]);

  const handleBack = () => {
    if (!activity || loading) {
      Alert.alert('Espera', 'La actividad no está lista todavía.');
      return;
    }

    navigation.goBack();
  };

  const handlePlayVideo = async () => {
    if (activity?.url) {
      const supported = await Linking.canOpenURL(activity.url);
      supported
        ? Linking.openURL(activity.url)
        : Alert.alert('Error', 'No se puede abrir el enlace del video.');
    }
  };

  const toggleCompleted = async () => {
    const newStatus = !completed;

    try {
      const response = await fetch(`https://tu-servidor.com/api/activities/${activityId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ is_completed: newStatus }),
      });

      if (!response.ok) {
        throw new Error('No se pudo actualizar el estado.');
      }

      const updatedActivity = await response.json();
      setCompleted(updatedActivity.is_completed);
    } catch (error) {
      Alert.alert('Error', 'No se pudo actualizar el estado de la actividad.');
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#89B97F" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  if (!activity) return null;

  const youtubeId = getYoutubeId(activity.url);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backText}>← Regresar</Text>
      </TouchableOpacity>

      <View style={styles.titleBox}>
        <Text style={styles.title}>{activity.title}</Text>
      </View>

      <View style={styles.descriptionBox}>
        <Text style={styles.description}>{activity.description}</Text>
      </View>

      {youtubeId ? (
        <TouchableOpacity style={styles.videoContainer} onPress={handlePlayVideo}>
          <Image
            source={{ uri: `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` }}
            style={styles.thumbnail}
          />
          <View style={styles.playButtonOverlay}>
            <Text style={styles.playIcon}>▶</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <Text style={{ marginVertical: 20, color: '#888' }}>
          No hay un video disponible o el enlace no es válido.
        </Text>
      )}

      <TouchableOpacity
        style={[styles.button, completed ? styles.buttonCompleted : styles.buttonNotCompleted]}
        onPress={toggleCompleted}
      >
        <Text style={styles.buttonText}>{completed ? 'Cumplido' : 'Realizar'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Función para extraer el ID de un video de YouTube
function getYoutubeId(url) {
  if (!url) return null;
  const regex =
    /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}
