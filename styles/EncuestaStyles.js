import { StyleSheet, Dimensions } from 'react-native';

// Obtener ancho de la pantalla para usar en estilos responsivos
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  // Contenedor principal de la pantalla
  container: {
    backgroundColor: '#EFEAE4', // Fondo claro azulado para un look fresco y tranquilo
    paddingVertical: 30,         // Espaciado vertical alrededor del contenido
    paddingHorizontal: 20,       // Espaciado horizontal
    alignItems: 'center',        // Centrar horizontalmente los elementos hijos
    minHeight: '100%',           // Asegura que ocupe toda la altura disponible
  },

  // Contenedor para el encabezado (título, subtítulo, sección)
  header: {
    marginBottom: 25,            // Separación debajo del header
    alignItems: 'center',        // Centrar textos horizontalmente
  },

  // Estilo para el título principal
  title: {
    fontSize: 24,                // Tamaño de letra grande para destacar
    fontWeight: 'bold',          // Texto en negrita
    color: '#8DB986',            // Azul oscuro para contraste y legibilidad
    letterSpacing: 1.2,          // Espaciado entre letras para un toque estilizado
    marginBottom: 6,             // Separación debajo del título
    textAlign: 'center',    // Asegura que se centre el texto

  },

  // Estilo para el subtítulo debajo del título
  subtitle: {
    fontSize: 16,                // Tamaño moderado para subtítulo
    color: '#A0A0A0',            // Gris suave para tono secundario
    marginBottom: 4,             // Separación debajo del subtítulo
    fontWeight: '600',           // Texto semi-negrita para mayor peso visual
  },

  // Texto que indica la sección actual de la encuesta
  section: {
    fontSize: 14,                // Tamaño pequeño para menos protagonismo
    color: '#fc7796',            // Gris suave
    fontWeight: 'bold',          // Texto en negrita para importancia
  },

  // Contenedor que simula el "visor" o área de escaneo
  scannerFrame: {
    backgroundColor: '#EFEAE4',     // Fondo muy oscuro para contraste con texto y botones
    borderRadius: 16,            // Bordes redondeados para suavizar visual
    padding: 20,                 // Espacio interno para que contenido no pegue a bordes
    width: width * 0.95,         // Ancho responsivo al 95% del dispositivo
    shadowOffset: { width: 0, height: 0 }, // Sombra centrada (sin desplazamiento)
    shadowOpacity: 0.8,          // Opacidad de sombra bastante visible
    shadowRadius: 10,            // Radio amplio para difuminar sombra
    marginBottom: 25,            // Separación debajo del "visor"
    
  },

  // Bloque que contiene cada pregunta individual
  questionBlock: {
    marginBottom: 28,            // Espaciado entre preguntas para mejor legibilidad
  },

  // Texto de la pregunta
  questionText: {
    color: '#000000',            // Gris claro para buen contraste sobre fondo oscuro
    fontSize: 16,                // Tamaño legible para preguntas
    marginBottom: 12,            // Separación debajo del texto de pregunta
    fontWeight: '600',           // Semi-negrita para importancia
  },

  // Contenedor para las opciones de respuesta en fila
  optionsRow: {
    flexDirection: 'row',        // Distribuir botones en fila horizontal
    justifyContent: 'space-between', // Separar botones uniformemente
  },

  // Estilo básico para cada botón de opción
  optionButton: {
    width: 42,                   // Tamaño cuadrado para botones
    height: 42,
    borderRadius: 21,            // Botones redondeados (círculo)
    justifyContent: 'center',    // Centrar texto verticalmente
    alignItems: 'center',        // Centrar texto horizontalmente
    marginHorizontal: 4,         // Espaciado horizontal entre botones
    opacity: 0.8,                // Ligeramente transparente para menos peso visual
  },

  // Estilo aplicado al botón cuando está seleccionado
  selectedOption: {
    borderWidth: 3,              // Borde grueso para resaltar selección
    borderColor: '#8DB986',      // Color verde neón para visibilidad
    opacity: 1,                  // Opacidad completa para destacar
  },

  // Texto dentro de los botones de opción
  optionText: {
    color: '#121212',            // Texto oscuro para contraste sobre fondo claro
    fontWeight: 'bold',          // Negrita para legibilidad
    fontSize: 16,                // Tamaño adecuado para números
  },

// Colores pastel para las opciones según el nivel (de verde a rojo)
green: { backgroundColor: '#A8E6CF' },       // Verde pastel
lightGreen: { backgroundColor: '#DCEFCB' },  // Verde muy claro, casi menta
yellow: { backgroundColor: '#FFF9B0' },      // Amarillo pastel
orange: { backgroundColor: '#FFD3B6' },      // Naranja pastel
red: { backgroundColor: '#FFB6B9' },         // Rojo pastel


  // Botón para continuar a la siguiente sección
  continueButton: {
    backgroundColor: '#8DB986', 
    paddingVertical: 14,          
    paddingHorizontal: 50,       
    borderRadius: 30,            
    elevation: 5,               
  },

  // Texto dentro del botón continuar
  continueText: {
    fontSize: 18,               // Tamaño grande para visibilidad
    fontWeight: 'bold',         // Negrita para destacar
    color: '#121212',           // Texto oscuro para contraste con botón claro
  },

questionCard: {
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 16,
  marginBottom: 16,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
},


});

