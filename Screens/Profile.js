import { View, Text } from 'react-native'
import React from 'react'
import CustomBtn from './Components/CustomBtn/CustomBtn'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
const Profile = () => {
  const navigation=useNavigation();
  const handleLogout= async()=>{
    await AsyncStorage.removeItem('token');
    console.log('Token deleted');
    navigation.navigate('Login');
  }
  return (
    <View>
      <CustomBtn label={'Logout'} onPress={handleLogout} />
    </View>
  )
}

export default Profile