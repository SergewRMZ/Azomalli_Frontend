// HomeScreen.styles.js
import { StyleSheet } from 'react-native';

// Exporta un objeto de estilos creado con StyleSheet
export default StyleSheet.create({
  
  header: {
    marginBottom: 25,
    alignItems: 'center',
    width: '100%',
  },
  logoContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center', 
  },
  container: {
    flex: 1,
    backgroundColor: '#fbefdf',
    alignItems: 'center',
    padding: 16,
  },

  // Estilo del logo superior
  logo: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 10,
  },

  // Título de la app
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#D9005A',
    marginVertical: 10,
  },

  // Contenedor del estado emocional
  emotionalContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    alignItems: 'center',
    width: '100%',
  },

  // Imagen de estado emocional
  emotionalImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 20,
  },

  // Contenedor de los textos del estado emocional
  emotionalTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Etiqueta de estado emocional
  emotionalLabel: {
    fontSize: 14,
    color: '#244d2f',
  },

  // Texto del estado emocional
  emotionalStatus: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
  },

  // Contenedor del botón con imagen de fondo
  buttonCard: {
    width: '100%',
    height: 60,
    marginVertical: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },

  // Imagen de fondo del botón
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Capa de opacidad sobre la imagen de fondo
  imageOverlay: {
    opacity: 0.6,
  },

  // Texto dentro del botón con imagen de fondo
  buttonText: {
    fontSize: 18,
    color: '#252525',
    fontWeight: '700',
    textAlign: 'center',
  },

  // Estilo del contenido del botón del menú inferior
  iconButtonContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
  },

  // Estilo del texto (label) del botón del menú inferior
  iconLabel: {
    fontSize: 14,
    color: '#ffffff',
  },

  // Contenedor del menú inferior
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#95C47D',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 30,
  },

  // Estilo de cada ítem individual del menú
  menuItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
  },

  // Etiqueta del menú inferior
  menuLabel: {
    marginTop: 4,
    fontSize: 12,
    color: '#ffffff',
    textAlign: 'center',
  }
});
