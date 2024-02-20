import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../Components/CustomInputField/InputField';
import CustomBtn from '../Components/CustomBtn/CustomBtn';
import ImagePath from '../Constants/ImagePath';
import styles from './styles'

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Login() {
  const [isVisible, setVisible] = useState(true);
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const [load,isLoading]=useState(false)
  const isValidEmail=(email)=>{
    const expression=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    return expression.test(email)
  }
  const handleLogin=()=>{
    if(email.trim()==='' && pass.trim()===''){
      Alert.alert('Error!','Please enter your Email & Password')
      }
    else if(email.trim()=='' || (!isValidEmail(email))){
      Alert.alert('Error','Please enter valid Email Address')
      
    }
    else if(pass.trim()===''){
      Alert.alert('Error','Please enter your Password')
    }
    isLoading(!load)
    

  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        {/* <Text style={styles.headerText}>Login</Text>
        <Text style={styles.headerText}>Login</Text> */}
        <Image source={ImagePath.loginImg} style={styles.headerText}/>
      </View>
      <View style={styles.signInContainer}>
        <View style={styles.signInTextContainer}>
          <Text style={styles.signInText}>Sign In to continue</Text>
        </View>
        <InputField 
        placeholder={'Text@gmail.com'}
        onChangeText={(text)=>setEmail(text)}
        keyboardType={'email-address'}
        />
        <InputField secureTextEntry={isVisible} placeholder={'Password'}
        onChangeText={(text)=>setPass(text)}
        rightIcon={isVisible ? ImagePath.hideEye: ImagePath.showEye }
        onPress={() => setVisible(!isVisible)}
        />
        <CustomBtn label={'Login'} onPress={handleLogin}/>
        <ActivityIndicator animating={load}/>
      </View>
    </SafeAreaView>
  );
}
