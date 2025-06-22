import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Contenedor principal de toda la pantalla
  container: {
    flex: 1,
    backgroundColor: '#EFEAE4', // Color de fondo suave (azul muy claro)
    padding: 20,
    justifyContent: 'center',
  },

  // Título principal (nombre de la app)
  title: {
    fontSize: 28,
    color: '#F653A2', // Rosa fuerte (color de marca)
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  // Subtítulo debajo del nombre de la app
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  // Caja con scroll para mostrar los términos y condiciones
  scrollBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    height: 280, // Altura definida para permitir el scroll
    marginBottom: 20,
  },

  // Estilo del texto de los términos
  text: {
    fontSize: 14,
    color: '#333', // Gris oscuro para buena legibilidad
    lineHeight: 20, // Espaciado entre líneas
    textAlign: 'justify',
  },

  // Contenedor para el checkbox y su texto
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },

  // Margen para el ícono del checkbox
  checkbox: {
    marginTop: 3,
    marginRight: 8,
  },

  // Tamaño del ícono del checkbox (✅ o ⬜)
  checkboxIcon: {
    fontSize: 22,
  },

  // Texto al lado del checkbox (condiciones y política)
  checkboxLabel: {
    fontSize: 13,
    color: '#333',
    flex: 1,
    flexWrap: 'wrap', // Permite que el texto salte de línea
  },

  // Enlace subrayado y de color
  link: {
    color: '#F653A2',
    textDecorationLine: 'underline',
  },

  // Botón "Finalizar"
  button: {
    backgroundColor: '#D42B66', // Rosa oscuro
    borderRadius: 10,
  },
});

export default styles;
