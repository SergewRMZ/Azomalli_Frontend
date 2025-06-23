import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0eae4',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  backText: {
    color: '#000',
    fontSize: 18,
  },
  editButton: {
    backgroundColor: '#8DB986',
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 8,
  },
  editText: {
    color: '#fff',
    fontSize: 18,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    maxWidth: 360,
    marginTop: 20,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  sectionLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    gap: 12,
  },
  itemText: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: '#444',
  },
  value: {
    fontSize: 13,
    color: '#777',
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

  saveButton: {
  backgroundColor: '#95C47D',
  paddingHorizontal: 18,
  paddingVertical: 6,
  borderRadius: 8,
  alignSelf: 'center',  // Centra el botón horizontalmente

},
saveText: {
  color: '#fff',
  fontSize: 18,
  textAlign: 'center',  // Centra el texto dentro del botón
},

});