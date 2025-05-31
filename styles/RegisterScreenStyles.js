import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formCard: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: 'rgba(0,0,0,0.6)', // fondo oscuro semitransparente
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
    backgroundColor: 'transparent',

  },
  button: {
    marginTop: 12,
    borderRadius: 8,
    backgroundColor: colors.blue,

  },

  buttonLabel: {
    fontSize: 18,       
    fontWeight: 'bold',  
    color: '#fff',       
  },
});
