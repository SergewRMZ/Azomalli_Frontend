import { StyleSheet } from 'react-native';
import { colors } from './colors';
export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textContainer: {
    paddingHorizontal: 20,
    maxWidth: 320,
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    fontFamily: 'Roboto_700Bold',
    color: '#fff',
    textAlign: 'left',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 30,
    color: colors.gray,
  },
  buttonContainer: {
    gap: 12,
    width: '80%',
  },
  button: {
    borderRadius: 10,
  },
});
