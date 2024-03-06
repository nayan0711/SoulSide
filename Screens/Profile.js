import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import CustomBtn from './components/customBtn/CustomBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import ImagePath from './constants/ImagePath';
import colors from './constants/colors';
import { moderateScale, scale } from 'react-native-size-matters';
import TextInputWithLabel from './components/textInputwithLabel/TextInputwithLabel';
import { ScrollView } from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
//import { useSafeAreaFrame } from 'react-native-safe-area-context';

const Profile = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null); // Initialize selectedImage state as null

  useEffect(() => {
    // Retrieve the previously selected image from storage when the component mounts
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
    await AsyncStorage.removeItem('token');
    console.log('Token deleted');
    navigation.navigate('Login');
  };

  const showImagePickerOptions = () => {
    Alert.alert(
      'Choose Image Source',
      'Would you like to take a photo or select one from your gallery?',
      [
        {
          text: 'Take Photo',
          onPress: () => takePhoto(),
        },
        {
          text: 'Select from Gallery',
          onPress: () => selectImage(),
        },
        {
          text: 'Cancel',
          style: 'cancel',
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
          <Text style={styles.title}>Profile</Text>
          <TouchableOpacity>
            <Image source={ImagePath.More} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.profileImageContainer}>
          <View>
          <Image source={selectedImage ? { uri: selectedImage } : require('../assets/profilePhoto.png')} style={styles.profileImage} />
          </View>
          <View>
            <TouchableOpacity onPress={()=>showImagePickerOptions()}>
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
              <Text style={styles.titleText}>Get your mental wellness score</Text>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>Get your mental wellness score for the week.</Text>
                <Image source={ImagePath.chevronRight} style={styles.iconRight} />
              </View>
            </View>
          </View>
          </TouchableOpacity>
        </View>
      </View>
      

      <ScrollView style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>

        <View style={styles.inputContainer}>
          <TextInputWithLabel
            label="Email Address"
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInputWithLabel
            label="Mobile no."
            placeholder="9109365511"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInputWithLabel
            label="Current Status"
            placeholder="Pregnant"
            keyboardType="default"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInputWithLabel
            label="Member Since"
            placeholder="Enter Date"
            isdate={true}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInputWithLabel
            label="Due Date"
            placeholder="Enter Date"
            isdate={true}
          />
        </View>

        <View style={{alignItems:'center'}}>
        <CustomBtn label={'Logout'} onPress={handleLogout} />
        </View>
        

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.themeColor,
  },
  headerContainer: {
    height: moderateScale(150),
    marginTop: moderateScale(18),
    marginHorizontal:moderateScale(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: scale(20),
    fontWeight: '500',
    color: colors.white,
    marginLeft: moderateScale(24),
  },
  icon: {
    height: scale(24),
    width: scale(24),
    marginRight: moderateScale(24),
  },
  profileImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: moderateScale(-70),
  },
  profileImage: {
    height: moderateScale(88),
    width: moderateScale(88),
    borderRadius: moderateScale(81),
  },
  cameraIcon: {
    position: 'absolute',
    top: moderateScale(-25),
    left: moderateScale(20),
    height: moderateScale(30),
    width: moderateScale(30),
  },
  userName: {
    color: colors.white,
    fontSize: scale(20),
    padding: scale(10),
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  inputContainer: {
    marginHorizontal: moderateScale(8),
  },
  shadowContainer: {
    backgroundColor: colors.white,
    marginTop: moderateScale(-30),
  },
  shadowBox: {
    top:moderateScale(-30),
    marginHorizontal: moderateScale(16),
    borderRadius: moderateScale(8),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
    padding: moderateScale(16),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginRight: moderateScale(10),
  },
  textContainer: {
    flex: 1,
  },
  titleText: {
    fontWeight: '600',
    fontSize: scale(12),
    color: colors.black,
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: scale(12),
    color: colors.black,
    marginRight: moderateScale(5),
  },
  iconRight: {
    height: scale(12),
    width: scale(12),
  },
});

export default Profile;
