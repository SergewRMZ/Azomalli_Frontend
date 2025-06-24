import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0eae4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  backButton: {
  backgroundColor: 'transparent', // ← así se quita el color
  paddingHorizontal: 14,
  paddingVertical: 6,
  borderRadius: 8,
},
  backText: {
    color: '#fff',
    fontSize: 18,
  },
  titleBox: {
    backgroundColor: '#8DB986',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 16,
    marginBottom: 100,
    marginTop: 20,
  },
  titleText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: 28,
  },
  tipCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    maxWidth: 320,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  tipText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
    lineHeight: 20,
  },
  bottomMenu: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#95C47D',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
  },
  menuLabel: {
    marginTop: 4,
    fontSize: 12,
    color: '#ffffff',
    textAlign: 'center',
  },
  header: {
  alignSelf: 'flex-start',
  marginTop: 40,
  marginBottom: 20,
},



backText: {
  color: '#000',
  fontSize: 18,
},

});