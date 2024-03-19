import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, Modal } from 'react-native';
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
  const [name, setName] = useState('');
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    retrieveSelectedImage();
    const getName = async () => {
      try {
        const storedName = await AsyncStorage.getItem('firstName');
        setName(storedName);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    getName();
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
    const token = await AsyncStorage.getItem('token');
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('firstName');
    console.log(token);
    navigation.navigate('Login');
  };

  const handleShowLogoutModal = () => {
    setShowLogoutModal(!showLogoutModal);
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
        <TouchableOpacity onPress={handleShowLogoutModal}>
          <Image source={ImagePath.More} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileImageContainer}>
      <TouchableOpacity onPress={() => showImagePickerOptions()}>
      
        <View>
          <Image source={selectedImage ? { uri: selectedImage } : require('../../assets/profilePhoto.png')} style={styles.profileImage} />
        </View>
        
        <View>
            <Image source={ImagePath.cameraIcon} style={styles.cameraIcon} />
          
        </View>
        </TouchableOpacity>

        <View>
          <Text style={styles.userName}>{name}</Text>
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={showLogoutModal}
        onRequestClose={() => setShowLogoutModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, { height: '30%' }]}>
            <Text style={styles.modalText}>Are you sure you want to logout?</Text>
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity style={styles.modalButton} onPress={handleLogout}>
                <Text style={styles.modalButtonText}>Logout</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={() => setShowLogoutModal(false)}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
     
    </ScrollView>
  </View>
  );
};


export default Profile;
