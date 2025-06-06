import { View, Text, TextInput, ScrollView, Pressable, Alert, Platform, Image, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from '../styles/DatosStyles';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';

import PerfilDefault from '../assets/Perfil.png';

export default function DatosPersonales() {
  const [imagenUri, setImagenUri] = useState(null);
  const [fechaNacimiento, setFechaNacimiento] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [genero, setGenero] = useState('');
  const [telefono, setTelefono] = useState('');
  const [recibirNotificaciones, setRecibirNotificaciones] = useState(false);

  const router = useRouter();
  const generosValidos = ['Hombre', 'Mujer', 'No binario'];

  const calcularEdad = (fecha) => {
    const hoy = new Date();
    const edad = hoy.getFullYear() - fecha.getFullYear();
    const mes = hoy.getMonth() - fecha.getMonth();
    const dia = hoy.getDate() - fecha.getDate();
    return mes < 0 || (mes === 0 && dia < 0) ? edad - 1 : edad;
  };

  const seleccionarImagen = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'Se necesita permiso para acceder a la galería.');
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
    });

    if (!resultado.canceled) {
      setImagenUri(resultado.assets[0].uri);
    }
  };

  const guardarDatos = () => {
    const datos = {
      imagenUri: imagenUri || 'assets/Perfil.png',
      fechaNacimiento: fechaNacimiento?.toISOString().split('T')[0],
      genero,
      telefono,
      recibirNotificaciones,
    };

    const datosJSON = JSON.stringify(datos);
    console.log('Datos en formato JSON:', datosJSON);
    return datosJSON;
  };

  const validarYContinuar = () => {
    if (!fechaNacimiento || !genero || !telefono) {
      Alert.alert('Campos incompletos', 'Por favor llena todos los campos obligatorios.');
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
    if (!regexTelefono.test(telefono)) {
      Alert.alert('Teléfono inválido', 'El teléfono debe tener exactamente 10 dígitos.');
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
        <Text style={styles.label}>Foto de usuario:</Text>
        <Pressable onPress={seleccionarImagen} style={styles.imagePicker}>
          {imagenUri ? (
            <Image source={{ uri: imagenUri }} style={{ width: 120, height: 120, borderRadius: 60 }} />
          ) : (
            <Image source={PerfilDefault} style={{ width: 120, height: 120, borderRadius: 60 }} />
          )}
        </Pressable>

        <Text style={styles.label}>Fecha de Nacimiento:</Text>
        <Pressable onPress={() => setShowDatePicker(true)} style={styles.input}>
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
            maximumDate={new Date()}
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

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <Text style={styles.label}>¿Deseas recibir notificaciones?</Text>
          <Switch
            value={recibirNotificaciones}
            onValueChange={setRecibirNotificaciones}
            style={{ marginLeft: 10 }}
          />
        </View>

        <Pressable style={styles.button} onPress={validarYContinuar}>
          <Text style={styles.buttonText}>Continuar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
