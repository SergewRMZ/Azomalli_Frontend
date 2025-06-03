import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import styles from '../styles/EncuestaStyles';

import { useRouter } from 'expo-router';

// Cuestionario 1
const questions = [
  "¿Con qué frecuencia sientes que tienes demasiadas tareas o responsabilidades que manejar al mismo tiempo?",
  "¿Qué tan a menudo te sientes incapaz de cumplir con tus compromisos académicos, laborales o personales?",
  "¿Qué tan difícil es para ti relajarte después de un día ajetreado?",
  "¿Con qué frecuencia te sientes agotado física o mentalmente al final del día?",
  "¿Qué tan a menudo tienes problemas para dormir debido a preocupaciones o ansiedad?",
];

const StressSurveySection = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const router = useRouter();


  const handleAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleContinue = () => {
    if (answers.includes(null)) {
      Alert.alert("Por favor responde todas las preguntas antes de continuar.");
    } else {
      Alert.alert("Sección completada", "Avanzando a la siguiente sección...");
          // Ir a la siguiente vista: /encuesta2
      router.push('/encuesta2');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
        <Text style={styles.title}>Midiendo tu nivel de estrés</Text>
        <Text style={styles.section}>Encuesta: Sección 1 de 4</Text>
      </View>

      {questions.map((q, i) => (
        <View key={i} style={styles.questionCard}>
          <View style={styles.questionBlock}>
            <Text style={styles.questionText}>{q}</Text>
            <View style={styles.optionsRow}>
              {[1, 2, 3, 4, 5].map((value) => (
                <TouchableOpacity
                  key={value}
                  style={[
                    styles.optionButton,
                    answers[i] === value && styles.selectedOption,
                    value === 1 && styles.green,
                    value === 2 && styles.lightGreen,
                    value === 3 && styles.yellow,
                    value === 4 && styles.orange,
                    value === 5 && styles.red,
                  ]}
                  onPress={() => handleAnswer(i, value)}
                >
                  <Text style={styles.optionText}>{value}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continuar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default StressSurveySection;
