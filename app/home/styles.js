import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: '15%',
    backgroundColor: 'rgba(200, 200, 200, 1)',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  p: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black'
  },
  button: {
    padding: 10,
    paddingHorizontal: 50,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
  },
});
