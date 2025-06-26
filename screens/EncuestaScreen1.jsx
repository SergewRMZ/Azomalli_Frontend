import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import styles from '../styles/EncuestaStyles';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';
import { Survey } from '../services/encuesta.service';
import { Modal, TextInput } from 'react-native-paper';

const questions = [
  "1.¿Con qué frecuencia sientes que no puedes controlar tus emociones?",
  "2.¿Qué tan seguido te encuentras preocupado por el futuro o tus responsabilidades?",
  "3.¿Tiendes a sentir que no logras manejar las tensiones diarias de tu vida?", 
  "4.¿Te resulta común tener dificultades para encontrar momentos de relajación durante la semana?",
  "5.¿Sueles sentirte insatisfecho con la calidad de tu sueño?",
  "6.¿Qué tan seguido te despiertas sintiéndote cansado o sin energía?",
  "7.¿Qué tan a menudo sientes que las demandas de tus estudios o trabajo son abrumadoras?",
  "8.¿Qué tan frecuentemente los plazos o las expectativas te generan ansiedad?",
  "9.¿Notas con frecuencia que tienes bajos niveles de energía a lo largo del día?",
  "10.¿Qué tan seguido experimentas dolores físicos relacionados con la tensión o el estrés?",
  "11.¿Tienes la sensación de no contar con apoyo emocional en momentos estresantes?",
  "12.¿Las situaciones sociales te generan incomodidad o aumentan tu nivel de estrés?",
  "13.¿Sientes que rara vez tienes tiempo suficiente para dedicarte a actividades que disfrutas?",
  "14.¿Qué tan común es que percibas un desequilibrio entre tus obligaciones y tu vida personal?",
  "15.¿Consideras que tu forma de enfrentar el estrés suele ser poco efectiva?",
  "16.¿Tiendes a descuidar prácticas relajantes como la meditación o la respiración consciente?",
  "17.¿Sueles sentir que no manejas adecuadamente las situaciones imprevistas?",
  "18.¿Te ocurre que pierdes el control frente a eventos difíciles o repentinos?",
  "19.¿Notas que te cuesta concentrarte en tus actividades diarias?",
  "20.¿Te ves desmotivado para realizar cosas que normalmente te resultan placenteras?",
];

const StressSurveySection = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(3));
  const [showErrors, setShowErrors] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const router = useRouter();
  const { token, password } = useAuth();
  const handleAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const getSurveyResults = () => {
    // const responses = {};
    // answers.forEach((value, index) => {
    //   responses[`q${index + 1}`] = value;
    // });
    // return {
    //   responses,
    // };
    return answers;
  };

  const handleContinue = async  () => {
    if (answers.includes(null)) {
      setShowErrors(true);
      Alert.alert("Responde todo antes de seguir.");
    } else {
      setShowErrors(false);
      setIsModalVisible(true);
      const surveyData = getSurveyResults();

      try {
        const formData = {
          answers: surveyData, 
          password
        };
        const response = await Survey.save(formData, token);
        Alert.alert("Sección completada", response.message);
      } catch (error) {
        
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
        <Text style={styles.title}>Encuesta sobre Manejo del Estrés</Text>
        <Text style={styles.intro}>
          A continuación, responde a cada una de las preguntas según la frecuencia con la que experimentas cada situación.
        </Text>
        <Text style={styles.scaleTitle}>Utiliza la siguiente escala:</Text>

        <View style={styles.scaleContainer}>
          {[
            { value: 1, label: 'Nunca' },
            { value: 2, label: 'Rara vez' },
            { value: 3, label: 'A veces' },
            { value: 4, label: 'Frecuentemente' },
            { value: 5, label: 'Siempre' },
          ].map(({ value, label }) => (
            <View key={value} style={styles.scaleRow}>
              <View style={[styles.scaleBullet, styles[`color${value}`]]}>
                <Text style={styles.scaleBulletText}>{value}</Text>
              </View>
              <Text style={styles.scaleLabel}>{label}</Text>
            </View>
          ))}
        </View>
      </View>

      {questions.map((q, i) => (
        <View
          key={i}
          style={[
            styles.questionCard,
            showErrors && answers[i] === null && styles.errorHighlight
          ]}
        >
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
