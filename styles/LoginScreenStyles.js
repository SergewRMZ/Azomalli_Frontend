import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  formCard: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 50,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    marginBottom: 20,
    paddingVertical: 6,
    fontSize: 16,
  },
  button: {
  backgroundColor: '#8DB986',
  paddingVertical: 12,
  paddingHorizontal: 90,
  borderRadius: 25,
  alignItems: 'center',
  marginTop: 10,
  alignSelf: 'center',
},
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  registerLink: {
    alignItems: 'center',
    marginTop: 20,
  },
  registerText: {
    fontSize: 13,
    color: '#333',
  },
  registerBold: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
