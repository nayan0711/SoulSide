import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImagePath from './ImagePath';
import Btn from './Btn';
import ModalComponent from './Modal';

export default function HomeScreen() {
  const handlePress = () => {
    console.log('Add to calendar');
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const [isGroupModalVisible, setIsGroupModalVisible] = useState(false);

  const toggleGroupModal = () => {
    setIsGroupModalVisible(!isGroupModalVisible);
  };

  const modalaboutContainer = {
    width: 230,
    height: 150,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    lineHeight: 20,
  };

  const txtStyle1 = {
    fontSize: 22,
    fontWeight: '500',
    fontFamily: 'Inter',
    color: '#646464',
    top: 10,
  };
  const txtStyle2 = {
    fontSize: 22,
    fontWeight: '500',
    fontFamily: 'Inter',
    color: '#646464',
    top: 30,
    marginLeft: 10,
  };
  const txtStyle3 = {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 18,
    color: '#4D4D4D',
    lineHeight: 22,
  };

  const txtStyle4 = {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 18,
    color: '#666666',
    textAlign: 'center',
  };
  const bgTxt = {
    justifyContent: 'center',
    alignItems: 'center',
  };

  const contentTxt = {
    width: 365,
    height: 210,
    marginLeft: 25,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    top: 0,
  };

  const modalContainer = {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 5,
  };

  const rectangle = {
    width: 420,
    height: 165,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    borderBottomEndRadius: 0,
    borderBottomLeftRadius: 0,
  };

  const bigRectangle = {
    width: 420,
    height: 225,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    borderBottomEndRadius: 0,
    borderBottomLeftRadius: 0,
  };

  const lineImage = {
    height: 5,
    top: 8,
    left: 175,
  };

  const aboutImage = {
    left: 40,
    top: 50,
  };

  const writeImage = {
    left: 40,
    top: 85,
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.TopContainer}>
          <Text style={styles.momText}>Power Moms</Text>
          <TouchableOpacity onPress={toggleModal}>
            <Image source={ImagePath.formkit} style={styles.imageformkit} />
          </TouchableOpacity>
          {isModalVisible && (
            <ModalComponent
              line={ImagePath.Line}
              write={ImagePath.About}
              about={ImagePath.Write}
              text1={'About Us'}
              text2={'Write to Us'}
              modalaboutContainer={modalaboutContainer}
              txtStyle1={txtStyle1}
              txtStyle2={txtStyle2}
              modalContainer={modalContainer}
              rectangle={rectangle}
              toggleModal={toggleModal}
              lineImage={lineImage}
              aboutImage={aboutImage}
              writeImage={writeImage}
            />
          )}
        </View>
        <View style={styles.midContainer}>
          <Text style={styles.greetingText}>Good Afternoon,</Text>
          <Text style={styles.nameText}>Sarina!</Text>
        </View>
      </View>
      <Text style={styles.upcomingcontainer}>Upcoming Session</Text>
      <View style={styles.bgRectangle}>
        <View style={styles.bgText}>
          <Text style={styles.bgText1}>
            Thursday
            <LinearGradient colors={['#333333', '#333333']}></LinearGradient>
          </Text>

          <View style={styles.liveTag}>
            <Image source={ImagePath.Tag} style={styles.imageTag} />
            <View style={styles.iImage}>
              <TouchableOpacity onPress={toggleGroupModal}>
                <Image source={ImagePath.Group} style={styles.imageGroup} />
              </TouchableOpacity>
              {isGroupModalVisible && (
                <ModalComponent
                  text3={'Thursday-Upcoming Session'}
                  text4={
                    'The session link appears here 15 minutes before the session starts. Meanwhile, fill out the Mood Questionnaire and get your Mental Wellness Score now.'
                  }
                  txtStyle3={txtStyle3}
                  txtStyle4={txtStyle4}
                  bgTxt={bgTxt}
                  contentTxt={contentTxt}
                  toggleModal={toggleGroupModal}
                  modalContainer={modalContainer}
                  bigRectangle={bigRectangle}
                  line={ImagePath.Line}
                  lineImage={lineImage}
                  letsButton={true}
                  letsButtonStyle={{top: 80, left: 0}}
                  letsBtntxtStyle={{textColor: '#304F6D'}}
                />
              )}
            </View>
          </View>
        </View>
        <View style={styles.bgdate}>
          <Text style={styles.bgText2}>
            Oct 7th, 2023, 10:00 pm ET
            <LinearGradient colors={['#333333', '#333334']}></LinearGradient>
          </Text>
          <Text style={styles.bgText3}>6 going</Text>
          <View style={styles.profiles}>
            <Image
              source={ImagePath.One}
              style={[styles.images, styles.bottomImage]}
            />
            <Image
              source={ImagePath.Two}
              style={[styles.images, styles.secondImage]}
            />
            <Image
              source={ImagePath.Three}
              style={[styles.images, styles.thirdImage]}
            />
            <Image
              source={ImagePath.Four}
              style={[styles.images, styles.topImage]}
            />
          </View>

          <Text style={styles.bgText4}>By Aimée Williams</Text>
          <Image source={ImagePath.lady} style={styles.lady} />
        </View>

        <View style={styles.btnContainer}>
          <Btn
            label="Add to Calendar"
            onPress={handlePress}
            textColor={'#304F6D'}
            style={styles.btn}
          />
          <Btn
            label="Mark RSVP"
            onPress={handlePress}
            backgroundColor="#304F6D"
            textColor="#FFFFFF"
            style={styles.btn}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 415,
    height: 199,
    backgroundColor: '#304F6D',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  TopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: 120,
    height: 27,
    top: 42,
    left: 15,
  },

  momText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '800',
  },
  imageformkit: {
    left: 228,
    height: 30,
    width: 30,
  },

  midContainer: {
    width: 250,
    height: 48,
    top: 60,
    left: 15,
  },

  greetingText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: 'Alegreya',
    fontWeight: '700',
  },

  nameText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'Alegreya',
    fontWeight: '900',
  },
  upcomingcontainer: {
    width: 343,
    height: 250,
    color: '#4D4D4D',
    fontWeight: '700',
    fontFamily: 'Inter',
    fontSize: 24,
    left: 17,
    top: 12,
  },

  bgRectangle: {
    width: 375,
    height: 274,
    backgroundColor: '#FEF3E7',
    borderRadius: 20,
    marginLeft: 19,
    bottom: 189,
  },
  bgText: {
    height: 130,
    width: 360,
  },
  bgText1: {
    fontWeight: '500',
    fontSize: 32,
    lineHeight: 36,
    letterSpacing: 2,
    left: 15,
    top: 20,
  },

  imageTag: {
    left: 180,
    bottom: 8,
    height: 25,
    width: 70,
  },

  liveTag: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  imageGroup: {
    paddingLeft: 2,
    height: 25,
    width: 25,
    top: 0,
  },
  iImage: {
    zIndex: 6,
    paddingVertical: 0,
    bottom: 20,
  },
  bgText2: {
    fontWeight: '500',
    fontSize: 16,
    left: 19,
    bottom: 60,
  },
  bgText3: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 15,
    color: '#000000',
    left: 21,
    bottom: 40,
  },
  bgText4: {
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 25,
    color: '#333333',
    left: 21,
    bottom: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    right: 135,
    bottom: 25,
  },

  lady: {
    position: 'absolute',
    bottom: 25,
    right: 10,
    width: 100,
    height: 100,
  },

  profiles: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 60,
    right: 210,
  },
  images: {
    position: 'relative',
    resizeMode: 'cover',
    height: 25,
    width: 20,
  },

  bottomImage: {
    zIndex: 1,
  },
  secondImage: {
    zIndex: 2,
  },
  thirdImage: {
    zIndex: 3,
  },
  topImage: {
    zIndex: 4,
  },
});

export {HomeScreen};
