// HomeScreen.styles.js
import { StyleSheet } from 'react-native';

// Exporta un objeto de estilos creado con StyleSheet
export default StyleSheet.create({
  // Contenedor principal de la pantalla
  container: {
    flex: 1,                         // Ocupa todo el espacio disponible
    backgroundColor: '#fbefdf',     // Color de fondo claro y cálido
    alignItems: 'center',            // Centra los hijos horizontalmente
    padding: 16,                    // Espacio interno alrededor de todo el contenedor
  },

  // Estilo del logo superior
  logo: {
    width: 120,                    // Ancho fijo para el logo
    height: 80,                    // Alto fijo para el logo
    resizeMode: 'contain',         // La imagen mantiene proporción dentro del tamaño dado
    marginTop: 20,                 // Espacio arriba para separar del borde o elementos previos
  },

  // Título de la app
  title: {
    fontSize: 24,                 // Tamaño grande para destacar como título
    fontWeight: 'bold',           // Negrita para enfatizar
    color: '#D9005A',             // Color rosa fuerte para visibilidad y estilo
    marginVertical: 10,           // Espacio arriba y abajo para separar del resto
  },

  // Contenedor del estado emocional
  emotionalContainer: {
    flexDirection: 'row',         // Coloca hijos (imagen y texto) en fila horizontal
    backgroundColor: 'white',     // Fondo blanco para contraste
    borderRadius: 8,              // Bordes redondeados para estética moderna
    padding: 10,                  // Espacio interno para que no pegue el contenido a los bordes
    marginBottom: 16,             // Separación inferior para distanciar de elementos siguientes
    alignItems: 'center',         // Centra verticalmente los hijos
    width: '100%',                // Ocupa todo el ancho del contenedor padre
  },

  // Imagen de estado emocional
  emotionalImage: {
    width: 60,                   // Ancho fijo para icono/imagen pequeña
    height: 60,                  // Alto fijo para mantener proporción cuadrada
    resizeMode: 'contain',       // Imagen dentro del tamaño sin distorsión
    marginRight: 20,             // Espacio a la derecha para separar del texto
  },

  // Contenedor de los textos del estado emocional
  emotionalTextContainer: {
    justifyContent: 'center',    // Centra verticalmente el texto
    alignItems: 'center',        // Centra horizontalmente el texto
  },

  // Etiqueta de estado emocional (por ejemplo: "Estado")
  emotionalLabel: {
    fontSize: 14,                // Tamaño de texto pequeño para etiqueta
    color: '#244d2f',            // Color verde oscuro para texto
  },

  // Texto del estado emocional (por ejemplo: "Estrés alto")
  emotionalStatus: {
    fontSize: 18,                // Tamaño mayor para destacar el estado
    fontWeight: 'bold',          // Texto en negrita para énfasis
    color: '#007BFF',            // Azul para resaltar y diferenciar
  },

  // Contenedor del botón con imagen de fondo
  buttonCard: {
    width: '100%',               // Ancho completo para el botón
    height: 60,                 // Alto fijo para botón grande y cómodo
    marginVertical: 12,          // Espacio arriba y abajo para separar de otros elementos
    borderRadius: 12,            // Bordes redondeados para estilo suave
    overflow: 'hidden',          // Evita que el contenido sobresalga del borde redondeado
  },

  // Imagen de fondo del botón
  imageBackground: {
    flex: 1,                    // Ocupa todo el espacio disponible del botón
    justifyContent: 'center',   // Centra verticalmente el contenido (texto)
    alignItems: 'center',       // Centra horizontalmente el contenido
  },

  // Capa de opacidad sobre la imagen de fondo (para oscurecerla y dar contraste)
  imageOverlay: {
    opacity: 0.6,               // Translucidez para mejorar legibilidad del texto encima
  },

  // Texto dentro del botón con imagen de fondo
  buttonText: {
    fontSize: 16,               // Tamaño de texto mediano
    color: '#244d2f',           // Color verde oscuro para contraste y lectura
    fontWeight: '600',          // Semi negrita para mayor claridad
    textAlign: 'center',        // Centra el texto horizontalmente
  },

  // Estilo del contenido del botón del menú inferior
  iconButtonContent: {
    flexDirection: 'column',    // Organiza ícono arriba y texto debajo
    alignItems: 'center',       // Centra contenido horizontalmente
    justifyContent: 'center',   // Centra contenido verticalmente
    paddingVertical: 6,         // Espacio arriba y abajo dentro del botón
    paddingHorizontal: 12,      // Espacio a los lados dentro del botón
  },

  // Estilo del texto (label) del botón del menú inferior
  iconLabel: {
    fontSize: 14,               // Texto pequeño para etiqueta del botón
    color: '#ffffff',           // Blanco para contraste con fondo oscuro
  },

  // Contenedor del menú inferior
  bottomMenu: {
    flexDirection: 'row',       // Elementos del menú en fila horizontal
    justifyContent: 'space-between', // Espacio equitativo entre elementos
    alignItems: 'center',       // Centra verticalmente los íconos y textos
    width: '100%',              // Ocupa todo el ancho disponible
    backgroundColor: '#95C47D', // Fondo verde claro para el menú
    borderRadius: 20,           // Bordes redondeados para diseño moderno
    paddingVertical: 10,        // Espacio arriba y abajo dentro del menú
    paddingHorizontal: 30,      // Espacio a los lados dentro del menú
    marginTop: 30,              // Separación superior respecto a elementos anteriores
  },

  // Estilo de cada ítem individual del menú
  menuItem: {
    flex: 1,                   // Cada item ocupa espacio equitativo
    alignItems: 'center',      // Centra contenido horizontalmente
    justifyContent: 'center',  // Centra contenido verticalmente
    marginHorizontal: 2,  // Espacio a los lados de cada botón
  },

  // Etiqueta del menú inferior
  menuLabel: {
    marginTop: 4,              // Pequeño espacio arriba para separar del ícono
    fontSize: 12,              // Tamaño pequeño para texto del menú
    color: '#ffffff',          // Texto blanco para visibilidad en fondo verde
    textAlign: 'center',       // Centrado horizontal del texto
  }

});
