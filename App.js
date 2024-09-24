import React from 'react';
import { SafeAreaView } from 'react-native';
// import SignUp from './Screen/SignUp_Screen.js'; // Import màn hình từ thư mục screens
import Home from './Screen/Home_Screen.js'; // Import


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Home />
    </SafeAreaView>
  );
};

export default App;
