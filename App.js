import React, {useState} from "react";
import { StyleSheet, Text, View, Image, useWindowDimensions } from "react-native";
import Logo from './assets/grafik1.png';
import CustomInput from "./src/CustomInput";
import CustomButton from "./src/CustomButton";



const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  return (
    <View style={style.root}>
      <Image source={Logo} 
      style={[style.logo, {height: height * 0.3}]}
      resizeMode="contain" />

      <Text>Username</Text>
      <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
      <Text>Password</Text>
      <CustomInput placeholder="Password" value={password} setPassword={setPassword} secureTextEntry={true}/> 
      <CustomButton/>
    </View>
  );
};

const style = StyleSheet.create({
 root: {
  
  padding: 20,
  backgroundColor: 'white'
 },
 logo: {
  resizeMode: 'contain',
  alignSelf: 'center',
  width: '70%',
  maxWidth: 200,
  maxHeight: 100,
  // marginTop: 200
 },


});

export default SignInScreen;