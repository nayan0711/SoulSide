import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import CustomBtn from '../components/customBtn/CustomBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import ImagePath from '../constants/ImagePath';
import TextInputWithLabel from '../components/textInputwithLabel/TextInputwithLabel';
import { ScrollView } from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { text } from '../constants/Strings';
import {styles} from './Styles'
const Profile = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null); 

  useEffect(() => {
    retrieveSelectedImage();
  }, []);

  const retrieveSelectedImage = async () => {
    try {
      const storedImageUri = await AsyncStorage.getItem('selectedImage');
      if (storedImageUri !== null) {
        setSelectedImage(storedImageUri);
      }
    } catch (error) {
      console.error('Error retrieving stored image:', error);
    }
  };

  const saveSelectedImage = async (uri) => {
    try {
      await AsyncStorage.setItem('selectedImage', uri);
    } catch (error) {
      console.error('Error saving selected image:', error);
    }
  };

  const handleLogout = async () => {
    const token=await AsyncStorage.getItem('token');
    await AsyncStorage.removeItem('token');
    console.log(token);
    navigation.navigate('Login');
  };

  const showImagePickerOptions = () => {
    Alert.alert(
      'Choose Image Source',
      'Would you like to take a photo or select one from your gallery?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Take Photo',
          onPress: () => takePhoto(),
        },
        {
          text: 'Select from Gallery',
          onPress: () => selectImage(),
        },
      ],
      { cancelable: true }
    );
  };

  const takePhoto = () => {
    launchCamera({ mediaType: 'photo' }, response => {
      if (!response.didCancel && response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        setSelectedImage(uri);
        saveSelectedImage(uri); // Save the selected image URI
      } else {
        console.log('No image selected or an error occurred');
      }
    });
  };

  const selectImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        setSelectedImage(uri);
        saveSelectedImage(uri); // Save the selected image URI
      } else {
        console.log('No image selected or an error occurred');
      }
    });
  };    
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{text.TITLE}</Text>
        <TouchableOpacity>
          <Image source={ImagePath.More} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileImageContainer}>
        <View>
          <Image source={selectedImage ? { uri: selectedImage } : require('../../assets/profilePhoto.png')} style={styles.profileImage} />
        </View>
        <View>
          <TouchableOpacity onPress={() => showImagePickerOptions()}>
            <Image source={ImagePath.cameraIcon} style={styles.cameraIcon} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.userName}>Jhon Abraham</Text>
        </View>
      </View>
    </View>

    <View style={styles.shadowContainer}>
      <View style={styles.shadowBox}>
        <TouchableOpacity>
          <View style={styles.rowContainer}>
            <Image source={ImagePath.meditationRound} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>{text.GET_WELLNESS_SCORE_TITLE}</Text>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>{text.GET_WELLNESS_SCORE_DESCRIPTION}</Text>
                <Image source={ImagePath.chevronRight} style={styles.iconRight} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>

    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <View style={styles.inputContainer}>
        <TextInputWithLabel
          label={text.EMAIL_LABEL}
          placeholder={text.EMAIL_PLACEHOLDER}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInputWithLabel
          label={text.MOBILE_LABEL}
          placeholder={text.MOBILE_PLACEHOLDER}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInputWithLabel
          label={text.STATUS_LABEL}
          placeholder={text.STATUS_PLACEHOLDER}
          keyboardType="default"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInputWithLabel
          label={text.MEMBER_SINCE_LABEL}
          placeholder={text.MEMBER_SINCE_PLACEHOLDER}
          isdate={true}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInputWithLabel
          label={text.DUE_DATE_LABEL}
          placeholder={text.DUE_DATE_PLACEHOLDER}
          isdate={true}
        />
      </View>

      <View style={{ alignItems: 'center' }}>
        <CustomBtn label={text.LOGOUT} onPress={handleLogout} />
      </View>
    </ScrollView>
  </View>
  );
};


export default Profile;
