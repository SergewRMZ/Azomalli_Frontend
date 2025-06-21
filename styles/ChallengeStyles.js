import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: '#EFEAE4',
    paddingTop: 45,

  },


  backButton: {
    backgroundColor: '#A5D6A7',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  backText: { color: '#fff', fontWeight: 'bold' },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: '#91C796',
    padding: 12,
    borderRadius: 12,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  scroll: { flex: 1 },
  retoBox: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
  },
  retoTitle: { fontWeight: 'bold', fontSize: 16 },
  retoContenido: { marginTop: 10 },
  botones: { flexDirection: 'row', marginTop: 10, gap: 10 },
  boton: {
    backgroundColor: '#C8E6C9',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  botonActivo: { backgroundColor: '#fc7796' },
  botonNoHechoActivo: { backgroundColor: '#B0BEC5' },
  
  botonTexto: {
  color: '#333',
  fontSize: 16, // Aumenta el tamaño (por ejemplo, de 14 a 16 o más)
    fontWeight: 'bold',
  textAlign: 'center',
    },
  agregarBtn: {
    backgroundColor: '#91C796',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  agregarText: { color: '#fff', fontWeight: 'bold' },

  formulario: {
  backgroundColor: '#fff',
  padding: 12,
  borderRadius: 10,
  marginBottom: 10,
  elevation: 2,
},
input: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  padding: 10,
  marginBottom: 10,
  backgroundColor: '#F9F9F9',
},

botonGuardar: {
  backgroundColor: '#91C796',
  paddingVertical: 14,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
},


});