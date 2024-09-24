import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import styles from './Css/styles';
const SignUp = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image grid */}
      <View style={styles.imageGrid}>
        <Image style={styles.image} source={require('../Picture/image.png')} />
        <Image style={styles.image} source={require('../Picture/image.png')} />
        <Image style={styles.image} source={require('../Picture/image.png')} />
        <Image style={styles.image} source={require('../Picture/image.png')} />
        <Image style={styles.image} source={require('../Picture/image.png')} />
        <Image style={styles.image} source={require('../Picture/image.png')} />
        <Image style={styles.image} source={require('../Picture/image.png')} />
        <Image style={styles.image} source={require('../Picture/image.png')} />
        <Image style={styles.image} source={require('../Picture/image.png')} />
      </View>

      {/* Logo and Welcome */}
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('./assets/image.png')} />
        <Text style={styles.welcomeText}>Welcome to Pinterest</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logInButton}>
          <Text style={styles.logInText}>Log in</Text>
        </TouchableOpacity>
      </View>

      {/* Terms and Privacy */}
      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>By continuing, you agree to Pinterest's</Text>
        <Text style={styles.linkText}>Terms of Service</Text>
        <Text style={styles.termsText}> and acknowledge you've read our </Text>
        <Text style={styles.linkText}>Privacy Policy</Text>
      </View>
    </ScrollView>
  );
};

export default SignUp;
