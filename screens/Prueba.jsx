import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

const ZonaAdministrador = () => {
  const router = useRouter();

  // Lista de vistas existentes
  const vistas = [
    { nombre: 'Añadir Actividad', ruta: '/activity' },
    { nombre: 'Challenge', ruta: '/challenge' },
    { nombre: 'Configuración', ruta: '/configuracion' },
    { nombre: 'Consejos diarios', ruta: '/dailyTip' },
    { nombre: 'Encuesta 1', ruta: '/encuesta1' },
    { nombre: 'Login', ruta: '/login' },
    { nombre: 'Pantalla Principal', ruta: '/pantallaPrincipal' },
    { nombre: 'Pedir Datos', ruta: '/pedirDatos' },
    { nombre: 'Perfil', ruta: '/perfil' },
    { nombre: 'Registro', ruta: '/register' },
    { nombre: 'Términos', ruta: '/terminos' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Zona del{"\n"}Administrador</Text>

      <ScrollView contentContainerStyle={styles.buttonContainer} showsVerticalScrollIndicator={false}>
        {vistas.map((vista, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => router.push(vista.ruta)}
          >
            <Text style={styles.buttonText}>{vista.nombre}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ZonaAdministrador;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5ccc3',
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#88b777',
    color: '#0d5c0d',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginVertical: 20,
    alignSelf: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: 20,
    gap: 15,
  },
  button: {
    backgroundColor: '#88b777',
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#0d5c0d',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
