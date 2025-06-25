import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#f4f0eb',
    alignItems: 'center'
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#a3c08c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  backText: {
    color: 'white',
    fontWeight: 'bold',
  },
  headerBox: {
    backgroundColor: '#91bf86',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 30,
  },
  headerText: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginBottom: 10,
    fontWeight: '600',
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
  },
  imageContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginBottom: 30,
    elevation: 2, // sombra para Android
    shadowColor: '#000', // sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: 300,
    height: 150,
    borderRadius: 15,
  },
});
