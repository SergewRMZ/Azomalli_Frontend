import { View, Text, TextInput, ScrollView, Pressable, Alert, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from '../styles/DatosStyles';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DatosPersonales() {
  const [nombre, setNombre] = useState('');
  const [apellido1, setApellido1] = useState('');
  const [apellido2, setApellido2] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [genero, setGenero] = useState('');
  const [telefono, setTelefono] = useState('');
  const [telEmergencia, setTelEmergencia] = useState('');

  const router = useRouter();

  const generosValidos = ['Hombre', 'Mujer', 'No binario'];

  const calcularEdad = (fecha) => {
    const hoy = new Date();
    const edad = hoy.getFullYear() - fecha.getFullYear();
    const mes = hoy.getMonth() - fecha.getMonth();
    const dia = hoy.getDate() - fecha.getDate();
    return mes < 0 || (mes === 0 && dia < 0) ? edad - 1 : edad;
  };

  const guardarDatos = () => {
    const datos = {
      nombre,
      apellido1,
      apellido2,
      fechaNacimiento: fechaNacimiento?.toISOString().split('T')[0],
      genero,
      telefono,
      telEmergencia
    };

    const datosJSON = JSON.stringify(datos);
    console.log('Datos en formato JSON:', datosJSON);
    return datosJSON;
  };

  const validarYContinuar = () => {
    if (!nombre || !apellido1 || !apellido2 || !fechaNacimiento || !genero || !telefono || !telEmergencia) {
      Alert.alert('Campos incompletos', 'Por favor llena todos los campos.');
      return;
    }

    const edadNum = calcularEdad(fechaNacimiento);
    if (isNaN(edadNum) || edadNum < 18 || edadNum > 29) {
      Alert.alert('Edad inválida', 'Debes tener entre 18 y 29 años.');
      return;
    }

    if (!generosValidos.includes(genero)) {
      Alert.alert('Género inválido', 'Selecciona un género válido.');
      return;
    }

    const regexTelefono = /^\d{10}$/;
    if (!regexTelefono.test(telefono) || !regexTelefono.test(telEmergencia)) {
      Alert.alert('Teléfono inválido', 'Los teléfonos deben tener exactamente 10 dígitos.');
      return;
    }

    guardarDatos();
    Alert.alert('Formulario enviado correctamente.');
    router.push('/encuesta1');
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

        <Text style={styles.label}>Fecha de Nacimiento:</Text>
        <Pressable
          onPress={() => setShowDatePicker(true)}
          style={styles.input}
        >
          <Text>
            {fechaNacimiento
              ? fechaNacimiento.toLocaleDateString()
              : 'Selecciona tu fecha de nacimiento'}
          </Text>
        </Pressable>

        {showDatePicker && (
          <DateTimePicker
            value={fechaNacimiento || new Date(2000, 0, 1)}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            maximumDate={new Date()} // no permite fechas futuras
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) {
                setFechaNacimiento(selectedDate);
              }
            }}
          />
        )}

        <Text style={styles.label}>Género:</Text>
        <Picker
          selectedValue={genero}
          style={styles.input}
          onValueChange={(itemValue) => setGenero(itemValue)}
        >
          <Picker.Item label="Selecciona..." value="" />
          {generosValidos.map((g, i) => (
            <Picker.Item key={i} label={g} value={g} />
          ))}
        </Picker>

        <Text style={styles.label}>Teléfono:</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          value={telefono}
          onChangeText={setTelefono}
          maxLength={10}
          placeholder="10 dígitos"
        />

        <Text style={styles.label}>Teléfono de un amigo o familiar:</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          value={telEmergencia}
          onChangeText={setTelEmergencia}
          maxLength={10}
          placeholder="10 dígitos"
        />

        <Pressable style={styles.button} onPress={validarYContinuar}>
          <Text style={styles.buttonText}>Continuar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
