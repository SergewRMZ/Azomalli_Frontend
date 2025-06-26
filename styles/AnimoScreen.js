import { StyleSheet, Dimensions } from 'react-native';
import { colors } from './colors';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f9f4',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 60,
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1D3F22',
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  subtitle: {
    fontSize: 16,
    color: '#6c6c6c',
    marginBottom: 25,
    textAlign: 'center',
    lineHeight: 22,
  },
  input: {
    width: '100%',
    height: 160,
    borderColor: '#8DB986',
    borderWidth: 1.5,
    borderRadius: 16,
    padding: 16,
    backgroundColor: '#ffffff',
    fontSize: 16,
    color: '#333',
    textAlignVertical: 'top',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#8DB986',
    width: '100%',
    borderRadius: 30,
    elevation: 2,
  },

  respuestaCard: {
  backgroundColor: '#DFF0D8',
  borderLeftWidth: 5,
  borderLeftColor: '#8DB986',
  borderRadius: 12,
  padding: 16,
  marginTop: 24,
  width: '100%',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 2,
},
respuestaTitulo: {
  fontWeight: 'bold',
  fontSize: 16,
  marginBottom: 6,
  color: colors.primary,
},
respuestaTexto: {
  fontSize: 15,
  color: '#4F4F4F',
  lineHeight: 22,
},

});
