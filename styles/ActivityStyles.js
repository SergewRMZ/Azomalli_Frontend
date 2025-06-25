// styles/ActivityScreenStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F3EFEC',
    flexGrow: 1,
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#A3C18F',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  backText: {
    color: 'white',
    fontSize: 16,
  },
  titleBox: {
    backgroundColor: '#89B97F',
    borderRadius: 12,
    padding: 15,
    marginVertical: 20,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
  descriptionBox: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    width: '100%',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: '#000',
    textAlign: 'justify',
  },
  videoContainer: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    position: 'relative',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  playButtonOverlay: {
    position: 'absolute',
    top: '40%',
    left: '45%',
    transform: [{ translateX: -15 }, { translateY: -15 }],
    backgroundColor: '#00000088',
    borderRadius: 30,
    padding: 10,
  },
  playIcon: {
    color: 'white',
    fontSize: 24,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 35,
    marginBottom: 30,
  },
  buttonNotCompleted: {
    backgroundColor: '#89B97F',
  },
  buttonCompleted: {
    backgroundColor: '#007BFF',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
