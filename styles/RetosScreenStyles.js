import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    backgroundColor: '#8DB986',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    textAlign: 'center',
    overflow: 'hidden',
  },
  retoBox: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  retoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  retoTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  retoContent: {
    marginTop: 12,
  },
  retoDescripcion: {
    fontSize: 14,
    color: '#444',
    marginBottom: 16,
  },
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botonHecho: {
    backgroundColor: '#8DB986',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  botonNoHecho: {
    backgroundColor: '#999999',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
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
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 20,
  marginTop: 60, // ← lo bajamos un poquito (antes estaba en 40)
  marginBottom: 20,
  width: '100%',
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

});
