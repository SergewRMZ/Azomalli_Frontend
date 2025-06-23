import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEAE4',
    padding: 20,
    paddingTop: 40,
    flexGrow: 1,
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    backgroundColor: '#7BB074',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 20,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 6,
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 16,
  },
  cardHeading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  actionButton: {
    backgroundColor: '#7BB074',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignSelf: 'center',
  },
  actionButtonAccepted: {
    backgroundColor: '#4B8F3F',
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footerNote: {
    backgroundColor: '#EAF1FB',
    padding: 16,
    borderRadius: 12,
  },
  footerText: {
    color: '#333',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default styles;
