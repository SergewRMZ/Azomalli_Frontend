import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Estilo para el contenedor principal (ScrollView)
  background: {
    flexGrow: 1, // Permite que el contenido crezca para llenar la pantalla
    backgroundColor: '#EFEAE4', // Color de fondo gris claro
    padding: 20, // Espaciado interno uniforme
  },

  // Estilo para el título principal "AZOMALLI"
  title: {
    fontSize: 28, // Tamaño grande de fuente
    fontWeight: 'bold', // Negrita
    alignSelf: 'center', // Centrado horizontal
    marginBottom: 20, // Espaciado inferior
    color: '#fa4e77', // Color rosa fuerte
  },

  // Contenedor de la tarjeta del formulario
  formCard: {
    backgroundColor: '#FFFFFF', // Fondo blanco
    borderRadius: 10, // Bordes redondeados
    padding: 20, // Espaciado interno
    elevation: 5, // Sombra en Android (efecto de tarjeta elevada)
  },

  // Estilo para las etiquetas de los campos
  label: {
    fontSize: 16, // Tamaño de texto medio
    marginBottom: 5, // Espacio debajo del texto
    fontWeight: '500', // Seminegrita
    color: '#333333', // Color gris oscuro
  },

  // Estilo compartido para los campos TextInput y Picker
  input: {
    borderWidth: 1, // Borde con grosor 1
    borderColor: '#CCCCCC', // Color gris claro para el borde
    borderRadius: 5, // Bordes ligeramente redondeados
    padding: 10, // Espaciado interno del campo
    marginBottom: 15, // Espacio debajo del campo
    backgroundColor: '#FAFAFA', // Fondo gris muy claro
  },

  // Contenedor para organizar elementos en fila (edad y género)
  row: {
    flexDirection: 'row', // Dirección horizontal
    justifyContent: 'space-between', // Espaciado uniforme entre elementos
    gap: 10, // Espacio entre las columnas (requiere React Native >= 0.71)
  },

  // Cada columna ocupa el mismo ancho
  column: {
    flex: 1, // Ocupa el mismo espacio que sus pares
  },

  // Estilo para el botón de continuar
  button: {
    backgroundColor: '#8db986', // Azul fuerte
    padding: 15, // Espaciado interno
    borderRadius: 8, // Bordes redondeados
    alignItems: 'center', // Centrar contenido (texto) horizontalmente
    marginTop: 20, // Espacio arriba del botón
  },

  // Texto dentro del botón
  buttonText: {
    color: '#FFFFFF', // Texto blanco
    fontWeight: 'bold', // Negrita
    fontSize: 16, // Tamaño medio
  },
});
