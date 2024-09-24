import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  image: {
    width: 110,
    height: 150,
    borderRadius: 15,
    margin: 5,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 80,
    height: 80,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  buttonGroup: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  signUpButton: {
    backgroundColor: '#e60023',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginBottom: 15,
  },
  signUpText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logInButton: {
    backgroundColor: '#f1f1f1',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
  },
  logInText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  termsContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  termsText: {
    color: '#333',
    fontSize: 12,
  },
  linkText: {
    color: '#e60023',
    fontWeight: 'bold',
  },
});

export default styles;
