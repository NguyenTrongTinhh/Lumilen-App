import React from 'react';
import { SafeAreaView } from 'react-native';
import SignUp from './Screen/SignUp_Screen.js'; // Import màn hình từ thư mục screens

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SignUp />
    </SafeAreaView>
  );
};

export default App;
