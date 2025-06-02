import { View, Text, TextInput, ScrollView, Pressable } from 'react-native';
import { styles } from '../styles/DatosPersonalesStyles';
import { useState } from 'react';

import { useRouter } from 'expo-router'; //  Importa el router


export default function DatosPersonales() {

  const router = useRouter(); //  Inicializa el router


  const [nombre, setNombre] = useState('');
  const [apellido1, setApellido1] = useState('');
  const [apellido2, setApellido2] = useState('');
  const [programa, setPrograma] = useState('');
  const [edad, setEdad] = useState('');
  const [genero, setGenero] = useState('');
  const [telefono, setTelefono] = useState('');
  const [telEmergencia, setTelEmergencia] = useState('');

  const handleContinuar = () => {
    router.push('/encuesta1'); //  Navega a encuesta1.js
  };


  return (
    <ScrollView contentContainerStyle={styles.background}>
      <Text style={styles.title}>AZOMALLI</Text>

      <View style={styles.formCard}>
        <Text style={styles.label}>Nombre(s)</Text>
        <TextInput style={styles.input} value={nombre} onChangeText={setNombre} />

        <Text style={styles.label}>Primer Apellido</Text>
        <TextInput style={styles.input} value={apellido1} onChangeText={setApellido1} />

        <Text style={styles.label}>Segundo Apellido</Text>
        <TextInput style={styles.input} value={apellido2} onChangeText={setApellido2} />

        <Text style={styles.label}>Programa de Estudio</Text>
        <TextInput style={styles.input} value={programa} onChangeText={setPrograma} />

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Edad:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={edad}
              onChangeText={setEdad}
            />
          </View>

          <View style={styles.column}>
            <Text style={styles.label}>Género:</Text>
            <TextInput
              style={styles.input}
              value={genero}
              onChangeText={setGenero}
            />
          </View>
        </View>

        <Text style={styles.label}>Teléfono:</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          value={telefono}
          onChangeText={setTelefono}
        />

        <Text style={styles.label}>Teléfono de un amigo o familiar:</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          value={telEmergencia}
          onChangeText={setTelEmergencia}
        />

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Continuar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
