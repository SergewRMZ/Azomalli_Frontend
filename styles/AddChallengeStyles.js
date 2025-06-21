import { StyleSheet } from 'react-native';

// Exporta un conjunto de estilos reutilizables
export default StyleSheet.create({

  // Contenedor principal de la pantalla
  container: {
    flex: 1, // Ocupa todo el espacio disponible
    backgroundColor: '#b8aa9b', // Color de fondo general
  },

  // Contenido dentro del ScrollView
  scrollContent: {
    flexGrow: 1, // Permite que el contenido crezca dentro del ScrollView
    justifyContent: 'center', // Centra verticalmente el contenido
    alignItems: 'center', // Centra horizontalmente el contenido
    paddingVertical: 40, // Espacio arriba y abajo del contenido
    padding: 5, // Espacio interno general (puede sobrescribir el vertical)
  },

  // Tarjeta contenedora del formulario
  card: {
    backgroundColor: '#f0eae3', // Color de fondo de la tarjeta
    width: '85%', // Ocupa el 85% del ancho del contenedor padre
    borderRadius: 10, // Bordes redondeados
    padding: 20, // Espacio interior
    elevation: 4, // Sombra en Android
  },

  // Encabezado de la tarjeta (barra superior con texto)
  header: {
    backgroundColor: '#8ab783', // Color de fondo del encabezado
    borderRadius: 8, // Bordes redondeados
    paddingVertical: 10, // Espaciado vertical interno
    marginBottom: 20, // Espacio debajo del encabezado
    alignItems: 'center', // Centra el texto horizontalmente
  },

  // Texto del encabezado
  headerText: {
    color: 'white', // Texto blanco
    fontWeight: 'bold', // Negrita
    fontSize: 20, // Tamaño de fuente grande
  },

  // Etiqueta de cada campo del formulario
  label: {
    fontSize: 14, // Tamaño de fuente
    marginBottom: 5, // Espacio debajo de la etiqueta
    fontWeight: 'bold', // Texto en negrita
  },

  // Campo de entrada de texto de una sola línea
  input: {
    backgroundColor: '#ffffff', // Fondo blanco
    borderRadius: 5, // Bordes redondeados
    paddingHorizontal: 10, // Padding lateral
    paddingVertical: 8, // Padding vertical
    marginBottom: 15, // Espacio debajo del input
  },

  // Área de texto para varias líneas (descripcion)
  textarea: {
    backgroundColor: '#ffffff', // Fondo blanco
    borderRadius: 5, // Bordes redondeados
    paddingHorizontal: 10, // Padding lateral
    paddingVertical: 8, // Padding vertical
    textAlignVertical: 'top', // Texto alineado arriba (en Android)
    marginBottom: 20, // Espacio debajo del textarea
    height: 120, // Altura fija del área de texto
  },

  // Botón de enviar/crear
  button: {
    backgroundColor: '#8ab783', // Fondo verde
    paddingVertical: 10, // Espaciado vertical interno
    borderRadius: 5, // Bordes redondeados
    alignItems: 'center', // Centra el texto dentro del botón
  },

  // Texto dentro del botón
  buttonText: {
    color: '#ffffff', // Texto blanco
    fontSize: 16, // Tamaño de fuente,
    fontWeight: 'bold',
  },
});
