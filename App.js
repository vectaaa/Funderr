import React from "react";
import { StyleSheet, Text, View, Image, useWindowDimensions } from "react-native";
import Logo from './assets/grafik1.png';
import CustomInput from "./src/CustomInput";



const SignInScreen = () => {
  const {height} = useWindowDimensions();
  return (
    <View style={style.root}>
      <Image source={Logo} 
      style={[style.logo, {height: height * 0.3}]}
      resizeMode="contain" />

      <CustomInput/>
    </View>
  );
};

const style = StyleSheet.create({
 root: {
  alignItems: 'center',
  padding: 20,
  backgroundColor: '#F9FBFC'
 },
 logo: {
  width: '70%',
  maxWidth: 200,
  maxHeight: 100,
 },
});

export default SignInScreen;