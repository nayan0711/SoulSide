import React, { useState } from 'react';
import { Alert, Image, Text, View, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../components/customInputField/InputField';
import CustomBtn from '../components/customBtn/CustomBtn';
import styles from './Styles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import ImagePath from '../constants/ImagePath';
import { text } from '../constants/Strings';

const YOUR_API_ENDPOINT = 'https://reqres.in/api/login';

const Login = () => {
  const navigation = useNavigation();
  const [isVisible, setVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [load, isLoading] = useState(false);
  const [name, setName] = useState('');

  const isValidEmail = (email) => {
    const expression = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    return expression.test(email);
  };

  const getNameFromEmail = (email) => {
    const atIndex = email.indexOf('@');
    if (atIndex !== -1) {
      const namePart = email.substring(0, atIndex);
      return namePart;
    } else {
      return '';
    }
  };

  const handleLogin = async () => {
    if (email.trim() === '' && pass.trim() === '') {
      Alert.alert(text.LOGIN_ERROR_TITLE, text.LOGIN_ERROR_MESSAGE_EMPTY);
    } else if (email.trim() === '' || !isValidEmail(email)) {
      Alert.alert(text.LOGIN_ERROR_TITLE, text.LOGIN_ERROR_MESSAGE_INVALID_EMAIL);
    } else if (pass.trim() === '') {
      Alert.alert(text.LOGIN_ERROR_TITLE, text.LOGIN_ERROR_MESSAGE_EMPTY_PASSWORD);
    } else {
      try {
        isLoading(true);
        const response = await axios.post(YOUR_API_ENDPOINT, {
          email: email,
          password: pass,
        });
        console.log(response);
        if (response.status === 200 && response.data.token) {
          await AsyncStorage.setItem('token', response.data.token);
          const extractedName = getNameFromEmail(email);
          await AsyncStorage.setItem('firstName', extractedName); // Store first name
          console.log(text.LOGIN_SUCCESS_MESSAGE);
          console.log(response.data.token);
          navigation.navigate('Main');
        } else {
          Alert.alert(text.LOGIN_ERROR_TITLE, text.LOGIN_ERROR_MESSAGE_INVALID_CREDENTIALS);
        }
      } catch (error) {
        console.error('Error occurred during login:', error);
        Alert.alert(text.LOGIN_ERROR_TITLE, text.LOGIN_ERROR_MESSAGE_GENERIC);
      } finally {
        isLoading(false);
      }
    }
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    const extractedName = getNameFromEmail(text);
    setName(extractedName);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Image source={ImagePath.loginImg} style={styles.headerText} />
      </View>
      <View style={styles.signInContainer}>
        <View style={styles.signInTextContainer}>
          <Text style={styles.signInText}>Sign In to continue</Text>
        </View>
        <InputField
          placeholder={'Text@gmail.com'}
          onChangeText={handleEmailChange}
          keyboardType={'email-address'}
        />
        <InputField
          secureTextEntry={isVisible}
          placeholder={'Password'}
          onChangeText={(text) => setPass(text)}
          rightIcon={isVisible ? ImagePath.hideEye : ImagePath.showEye}
          onPress={() => setVisible(!isVisible)}
        />
        <CustomBtn label={'Login'} onPress={handleLogin} />
        <ActivityIndicator animating={load} />
      </View>
    </SafeAreaView>
  );
}

export default Login;
