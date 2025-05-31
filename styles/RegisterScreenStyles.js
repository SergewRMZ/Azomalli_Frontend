import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Capa oscura con opacidad
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formContainer: {
    width: '100%',
    maxWidth: 350,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Roboto_700Bold',
    textAlign: 'center',
    marginBottom: 24,
    color: colors.white,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 12,
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
  loginLink: {
    marginTop: 16,
    color: colors.accent,
    textAlign: 'center',
    fontFamily: 'Roboto_400Regular',
  },
});
