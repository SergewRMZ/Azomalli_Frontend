import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import styles from '../styles/EncuestaStyles';

import { useRouter } from 'expo-router';


const questions = [
  "¿Qué tan a menudo te preocupas por problemas que están fuera de tu control?",
  "¿Qué tan seguido sientes que necesitas perfeccionar todo lo que haces para sentirte satisfecho contigo mismo?",
  "¿Qué tan a menudo sientes que el estrés afecta negativamente tus relaciones interpersonales?",
  "¿Qué tan fácil te resulta priorizar tus tareas cuando te enfrentas a varias responsabilidades?",
  "¿Qué tan seguido te sientes abrumado por el futuro o por incertidumbres relacionadas con tu vida?",
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
      router.push('/terminos');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
        <Text style={styles.title}>Midiendo tu nivel de estrés</Text>
        <Text style={styles.section}>Encuesta: Sección 4 de 4</Text>
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
