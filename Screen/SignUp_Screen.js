import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../Css/SignUp_css'; 

const SignUp = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.imageGrid}>
        <Image style={styles.image} source={require('../Picture/image_1.png')} />
<<<<<<< HEAD

        <Image style={styles.image} source={require('../Picture/image_2.png')} />
        <Image style={styles.image} source={require('../Picture/image_2.png')} />
        <Image style={styles.image} source={require('../Picture/image_2.png')} />
        <Image style={styles.image} source={require('../Picture/image_2.png')} />


=======
        <Image style={styles.image} source={require('../Picture/image_2.png')} />
        <Image style={styles.image} source={require('../Picture/image_1.png')} />
>>>>>>> 9b61e21a22db53c2a9ddba8df4bd673a3787ef34
        <Image style={styles.image} source={require('../Picture/image_1.png')} />
        <Image style={styles.image} source={require('../Picture/image_2.png')} />
        <Image style={styles.image} source={require('../Picture/image_1.png')} />
        <Image style={styles.image} source={require('../Picture/image_1.png')} />
<<<<<<< HEAD
        <Image style={styles.image} source={require('../Picture/image_1.png')} />
        <Image style={styles.image} source={require('../Picture/image_1.png')} />
        <Image style={styles.image} source={require('../Picture/image_1.png')} />
=======
        <Image style={styles.image} source={require('../Picture/image_2.png')} />
>>>>>>> 9b61e21a22db53c2a9ddba8df4bd673a3787ef34
        <Image style={styles.image} source={require('../Picture/image_1.png')} />
      </View>

  
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../Picture/image_1.png')} /> 
        <Text style={styles.welcomeText}>Welcome to Pinterest</Text>
      </View>


      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logInButton}>
          <Text style={styles.logInText}>Log in</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>By continuing, you agree to Pinterest&apos;s</Text>
        <Text style={styles.linkText}>Terms of Service</Text>
        <Text style={styles.termsText}> and acknowledge you&apos;ve read our </Text>
        <Text style={styles.linkText}>Privacy Policy</Text>
      </View>
    </ScrollView>
  );
};

export default SignUp;
