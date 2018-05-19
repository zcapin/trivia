import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: '5%',
    backgroundColor: 'rgba(200, 200, 200, 1)',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingVertical: 5,
  },
  questionRecap: {
    marginBottom: 5,
  },
  p: {
    fontSize: 15,
    fontWeight: 'normal',
    color: 'black',
  },
  notice: {
    fontSize: 10,
    color: 'black',
    marginTop: 5,
  },
  marker: {
    fontWeight: 'bold',
  },
  playAgainButton: {
    margin: 20,
    paddingVertical: 5,
    paddingHorizontal: 50,
  },
  playAgainButtonText: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
  },
});
