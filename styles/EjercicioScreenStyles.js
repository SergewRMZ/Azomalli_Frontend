import { StyleSheet, Platform } from 'react-native';

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
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 40,
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

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#8DB986',
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 12,
    textAlign: 'center',
    marginBottom: 30,
  },

  descriptionBox: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 30,
    width: '100%',
    maxWidth: 360,
  },

  description: {
    fontSize: 14,
    textAlign: 'justify',
    color: '#333',
  },

  videoContainer: {
    width: '100%',
    maxWidth: 360,
    aspectRatio: 16 / 9,
    borderRadius: 12,
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 50,
  },

  thumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
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