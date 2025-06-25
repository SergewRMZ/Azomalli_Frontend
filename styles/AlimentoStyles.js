import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingHorizontal: 20,
    backgroundColor: '#f4f0eb',
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
    fontSize: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
    backgroundColor: '#D9D9D9',
    paddingVertical: 10,
    borderRadius: 10,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tab: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  tabSelected: {
    backgroundColor: '#ccc',
  },
  tabText: {
    fontSize: 14,
    color: '#444',
  },
  tabTextSelected: {
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 160,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrow: {
    fontSize: 18,
  },
  cardBody: {
    backgroundColor: '#f9f9b6',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  description: {
    fontSize: 14,
    color: '#333',
  },
});
