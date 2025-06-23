import { Platform, Dimensions, StyleSheet } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbefdf',
    padding: 16,
    paddingBottom: Platform.select({
      android: 120,
      ios: 100
    }),
    alignItems: 'center',
  },

  logo: {
    width: 120,
    height: 80,
    resizeMode: 'contain',
    marginTop: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D9005A',
    marginVertical: 10,
  },

  emotionalContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    alignItems: 'center',
    width: '100%',
  },

  emotionalImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 20,
  },

  emotionalTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  emotionalLabel: {
    fontSize: 14,
    color: '#244d2f',
  },

  emotionalStatus: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
  },

  buttonCard: {
    width: '100%',
    height: 60,
    marginVertical: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },

  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageOverlay: {
    opacity: 0.6,
  },

  buttonText: {
    fontSize: 16,
    color: '#244d2f',
    fontWeight: '600',
    textAlign: 'center',
  },

  iconButtonContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
  },

  iconLabel: {
    fontSize: 14,
    color: '#ffffff',
  },

  bottomMenuFixed: {
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
