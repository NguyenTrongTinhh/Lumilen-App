import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../Css/SignUp_css'; 

const SignUp = () => {
  return (
    <View style={styles.signUp1}>
    <View style={styles.image}>
      <View style={styles.imageParent}>
        <Image style={styles.imageIcon} source={require('../Picture/image_1.png')} />
        <Image style={styles.imageIcon1} source={require('../Picture/image_2.png')} />
        <Image style={styles.imageIcon2} source={require('../Picture/image_3.png')} />
        <Image style={styles.imageIcon3} source={require('../Picture/image_4.png')} />
        <Image style={styles.imageIcon4} source={require('../Picture/image_5.png')} />
        <Image style={styles.imageIcon5} source={require('../Picture/image_6.png')} />
        <Image style={styles.imageIcon6} source={require('../Picture/image_7.png')} />
        <Image style={styles.imageIcon7} source={require('../Picture/image_8.png')} />
        <Image style={styles.imageIcon8} source={require('../Picture/image_9.png')} />
       
      </View>
      <View style={styles.overlay} />
    </View>
    <View style={styles.indicator}>
      <View style={styles.line} />
    </View>
  
    <View style={styles.content}>
      <View style={styles.logo}>
        <Image style={styles.logoIcon} source={require('../Picture/logo.png')} />
        <Text style={styles.welcomeToPinterest}>Welcome to Pinterest</Text>
      </View>
      <View style={styles.buttonGroup}>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttonBase}>
            <Text style={styles.button}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons1}>
          <TouchableOpacity style={styles.buttonBase1}>
            <Text style={styles.button}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.terms}>
        <View style={styles.byContinuingYouAgreeToPiParent}>
          <Text style={styles.byContinuingYou}>By continuing, you agree to Pinterest’s</Text>
          <Text style={styles.termsOfService}>Terms of Service</Text>
          <Text style={styles.byContinuingYou}>and</Text>
        </View>
        <View style={styles.byContinuingYouAgreeToPiParent}>
          <Text style={styles.byContinuingYou}>acknowledge you’ve read our</Text>
          <Text style={styles.termsOfService}>Privacy Policy</Text>
        </View>
      </View>
    </View>
  </View>
);

};

export default SignUp;
