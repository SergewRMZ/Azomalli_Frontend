import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import styles from '../styles/EncuestaStyles';

import { useRouter } from 'expo-router';


const questions = [
  "¿Con qué frecuencia experimentas tensión física, como dolor de cabeza o rigidez muscular, debido al estrés?",
  "¿Qué tan fácil es para ti mantenerte concentrado en tus tareas diarias?",
  "¿Qué tan a menudo sientes que no tienes el control sobre tu vida o tus decisiones?",
  "¿Con qué frecuencia te sientes irritable o de mal humor debido a la presión que enfrentas?",
  "¿Qué tan seguido te resulta difícil disfrutar de actividades que antes te hacían feliz?",
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
      router.push('/encuesta3');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
        <Text style={styles.title}>Midiendo tu nivel de estrés</Text>
        <Text style={styles.section}>Encuesta: Sección 2 de 4</Text>
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
