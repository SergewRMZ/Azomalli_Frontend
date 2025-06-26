import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from 'react-native';
import { useRouter } from 'expo-router';
import { Button, ActivityIndicator } from 'react-native-paper';
import { useAuth } from '../context/AuthContext';
import { Animo } from '../services/animo.service';
import { getMensajePorEmocion } from '../services/messages';
import styles from '../styles/AnimoScreen';

export default function AnimoScreen() {
  const [feelingText, setFeelingText] = useState('Me siento decepcionado por mis propios errores.');
  const [isLoading, setIsLoading] = useState(false);
  const [respuestaAzo, setRespuestaAzo] = useState(null);
  const { token } = useAuth();
  const router = useRouter();

  const handleSubmitFeeling = async () => {
    if (!feelingText.trim()) {
      return alert("Por favor, expresa cómo te sientes.");
    }

    setIsLoading(true);

    try {
      const formData = { text: feelingText };
      const response = await Animo.analyzer(formData, token);
      const message = getMensajePorEmocion(response.emotion);

      setRespuestaAzo({
        emocion: response.emotion,
        mensaje: message,
      });
    } catch (error) {
      console.error("Error al enviar el estado de ánimo", error);
      alert("Hubo un error al procesar tu estado. Intenta más tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={require('../assets/logoSinFondo.png')} style={styles.logo} />
        <Text style={styles.title}>Yo soy Azomalli, ¿Cómo te sientes hoy?</Text>
        <Text style={styles.subtitle}>
          Tu mensaje no será almacenado. Se usará solo para recomendarte actividades que mejoren tu bienestar emocional.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe aquí tus pensamientos o emociones..."
          multiline
          value={feelingText}
          onChangeText={setFeelingText}
          placeholderTextColor="#A1A1A1"
        />

        {isLoading ? (
          <ActivityIndicator animating={true} color="#8DB986" size="large" />
        ) : (
          <Button
            mode="contained"
            onPress={handleSubmitFeeling}
            icon="send"
            style={styles.button}
          >
            Enviar a Azo
          </Button>
        )}

        {respuestaAzo && (
          <View style={styles.respuestaCard}>
            <Text style={styles.respuestaTitulo}>💬 Azo dice:</Text>
            <Text style={styles.respuestaTexto}>{respuestaAzo.mensaje}</Text>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
