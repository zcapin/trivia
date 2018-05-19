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
  questionView: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: '25%',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
  },
  p: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black'
  },
  buttonGroup: {
    marginTop: 10,
    flexDirection: 'row',
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
  step: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
    paddingVertical: 30,
  }
});
