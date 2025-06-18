import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  header: {
  alignSelf: 'flex-start',
  marginTop: 40,
  marginBottom: 20,
},

backButton: {
  backgroundColor: 'transparent', // sin fondo
  paddingHorizontal: 14,
  paddingVertical: 6,
  borderRadius: 8,
},

backText: {
  color: '#000', // texto negro
  fontSize: 18,
  fontWeight: 'bold',
},

  title: {
    backgroundColor: '#d9d9d9',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 14,
    textAlign: 'center',
    overflow: 'hidden',
    marginBottom: 24,
  },

  profileBox: {
    alignItems: 'center',
    marginBottom: 30,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },

  profileName: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  itemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },

  itemBarRetos: {
    height: 20,
    borderRadius: 10,
    backgroundColor: 'linear-gradient(90deg, #6bd2d2, #318686)',
    flex: 1,
    marginRight: 12,
    backgroundColor: '#6bd2d2',
  },

  itemBarEjercicio: {
    height: 20,
    borderRadius: 10,
    backgroundColor: '#f48fb1',
    flex: 1,
    marginRight: 12,
  },

  itemBarPlan: {
    height: 20,
    borderRadius: 10,
    backgroundColor: '#f68e1d',
    flex: 1,
    marginRight: 12,
  },

  itemBarConsejos: {
    height: 20,
    borderRadius: 10,
    backgroundColor: '#b288f0',
    flex: 1,
    marginRight: 12,
  },

  itemLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    width: 100,
  },

  itemValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },

  daysBox: {
    marginTop: 40,
    alignItems: 'center',
  },

  daysText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 6,
  },

  daysNumber: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },

  daysSubtext: {
    fontSize: 14,
    color: '#777',
    marginTop: 6,
    textAlign: 'center',
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

});
