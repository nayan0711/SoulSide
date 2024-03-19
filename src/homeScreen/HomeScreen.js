import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Share,
  Linking,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImagePath from '../constants/ImagePath';
import Btn from '../components/btn/Btn';
import ModalComponent from '../components/modal/ModalComponent';
import colors from '../constants/Colors';
import { text } from '../constants/Strings';

const { width, height } = Dimensions.get('window');
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
  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: 'Your share message goes here',
        url: 'https://example.com',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared successfully');
        } else {
          console.log('Shared');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Dismissed');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
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
  const handleOpenGoogleCalendar = () => {
  const url = text.CALENDER_URL;
   Linking.openURL(`${url}`)
  .catch((err) => console.error('Error opening email app:', err));
  };
  return (
    <SafeAreaView style={[{ flex: 1 }, styles.mainContainer]}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.TopContainer}>
            <Text style={styles.momText}>{text.POWER_MOMS}</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Image source={ImagePath.formkit} style={styles.imageformkit} />
            </TouchableOpacity>
            {isModalVisible && (
              <ModalComponent
                line={ImagePath.Line}
                write={ImagePath.About}
                about={ImagePath.Write}
                text1={text.ABOUT_US}
                text2={text.WRITE_TO_US}
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
            <Text style={styles.greetingText}>{text.GOOD_AFTERNOON}</Text>
            <Text style={styles.nameText}>{text.SARINA}</Text>
          </View>
        </View>
        <Text style={styles.upcomingcontainer}>{text.UPCOMING_SESSION}</Text>
        <View style={styles.bgRectangle}>
          <View style={styles.bgText}>
            <Text style={styles.bgText1}>
              {text.THURSDAY}
              <LinearGradient colors={['#333333', '#333334']}></LinearGradient>
            </Text>

            <View style={styles.liveTag}>
              <Image source={ImagePath.Tag} style={styles.imageTag} />
              <View style={styles.iImage}>
                <TouchableOpacity onPress={toggleGroupModal}>
                  <Image source={ImagePath.Group} style={styles.imageGroup} />
                </TouchableOpacity>
                {isGroupModalVisible && (
                  <ModalComponent
                    text3={text.THURSDAY_UPCOMING_SESSION}
                    text4={text.THE_SESSION_LINK}
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
                    letsButtonStyle={{ top: 80, left: 0 }}
                    letsBtntxtStyle={{ textColor: '#304F6D' }}
                  />
                )}
              </View>
            </View>
          </View>
          <View style={styles.bgdate}>
            <Text style={styles.bgText2}>
              {text.OCT_7TH_2023_10_PM_ET}
              <LinearGradient colors={['#333333', '#333334']}></LinearGradient>
            </Text>
            <Text style={styles.bgText3}>{text.SIX_GOING}</Text>
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

            <Text style={styles.bgText4}>{text.BY_AIMEE_WILLIAMS}</Text>
            <Image source={ImagePath.lady} style={styles.lady} />
          </View>

          <View style={styles.btnContainer}>
            <Btn
              label={text.ADD_TO_CALENDAR}
              onPress={()=>handleOpenGoogleCalendar()}
              textColor={'#304F6D'}
              style={styles.btn}
            />
            <Btn
              label={text.MARK_RSVP}
              onPress={handlePress}
              backgroundColor="#304F6D"
              textColor="#FFFFFF"
              style={styles.btn}
            />
          </View>
          <View style={styles.scoreContainer}>
            <Text style={styles.mentalText}>{text.MENTAL_WELLNESS_CHECKING}</Text>
          </View>
          <View style={styles.borderBox}>
            <Image source={ImagePath.Yoga} style={styles.yogaImage}></Image>
            <View style={styles.insideText}>
              <Text style={styles.boxText1}>
                {text.GET_YOUR_MENTAL_WELLNESS_SCORE}
              </Text>
              <Text style={styles.boxText2}>
                {text.GET_YOUR_MENTAL_WELLNESS_SCORE_FOR_THE_WEEK}
              </Text>
          </View>
          </View>
        </View>
        <View style={styles.weekPrompt}>
          <Image
            source={ImagePath.Calendar}
            style={styles.CalendarImage}></Image>
          <Text style={styles.weekText1}>{text.THIS_WEEKS_PROMPT}</Text>
          <Text style={styles.weekText2}>
            {text.WHAT_DO_YOU}
          </Text>
          <Text style={styles.weekText3}>{text.CHECK_NOW}</Text>
          <Image
            source={ImagePath.ChevronWhite}
            style={styles.chevronRight}></Image>
          <View style={styles.rotationContainer}>
            <View style={styles.rotationRectangle}></View>
          </View>
        </View>
        <View style={styles.meetContainer}>
          <Text style={styles.meetText}>{text.MEET_YOUR_GROUP}</Text>
          <Text style={styles.viewText}>{text.VIEW_ALL}</Text>
          <Image
            source={ImagePath.ChevronBlue}
            style={styles.chevronBlue}></Image>
        </View>
        <View style={styles.heightContainer}>
          <ScrollView horizontal={true}>
            <View style={styles.profileBox}>
              <Image source={ImagePath.FrameOne} style={styles.frame}></Image>
              <Image source={ImagePath.FrameTwo} style={styles.frame}></Image>
              <Image source={ImagePath.FrameThree} style={styles.frame}></Image>
              <Image source={ImagePath.FrameFour} style={styles.frame}></Image>
              <Image source={ImagePath.FrameFive} style={styles.frame}></Image>
              <Image source={ImagePath.FrameSix} style={styles.frame}></Image>
            </View>
          </ScrollView>
          <View style={styles.friendRectangle}>
            <Text style={styles.referText}>{text.REFER_A_FRIEND}</Text>
            <Text style={styles.shareText}>
              {text.SHARE_THE_SUPPORT}
            </Text>
            <View style={styles.shareBtn}>
              <Btn
                label={text.SHARE_LINK}
                onPress={handleShare}
                textColor={'#304F6D'}
                style={styles.shareBtnStyle}
              />
            </View>
            <Image source={ImagePath.Share} style={styles.shareIcon}></Image>
            <Image source={ImagePath.Tree} style={styles.treeImage}></Image>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    height: height * 0.3,
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
    left: 200,
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
    height: 274,
    backgroundColor: '#FFFAF3',
    borderRadius: 20,
    marginHorizontal: 19,
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
    color:colors.grey,
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
    left: -27,
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
    color:colors.grey,
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
    bottom: 3,
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
    right: 190,
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
  scoreContainer: {
    left: 17,
    top: 60,
  },
  mentalText: {
    fontFamily: ' Inter',
    fontWeight: '700',
    fontSize: 20,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#4D4D4D',
  },
  borderBox: {
    width: 350,
    height: 84,
    top: 90,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F8EFEF',
    right: 4,
    marginHorizontal:5,
  },
  yogaImage: {
    padding:20,
    height: 70,
    width: 60,
  },
  insideText: {
    left: 74,
    bottom: 70,
    width: 270,
  },
  boxText1: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 16,
    color: '#333333',
  },
  boxText2: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 15,
    color: '#666666',
  },
  rightImage: {
    left: 276,
    bottom: 43,
    height: 30,
  },
  weekPrompt: {
    height: 141,
    backgroundColor: '#4D4D4D',
    borderRadius: 20,
    marginHorizontal: 16,
    position: 'relative',
  },
  CalendarImage: {
    left: 264,
    height: 90,
    width: 90,
    top: 20,
  },
  weekText1: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 24,
    color: '#FFFFFF',
    left: 17,
    bottom: 70,
  },
  weekText2: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 90,
    left: 19,
    width: 188,
    bottom: 66,
    lineHeight: 22,
  },
  weekText3: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 17,
    color: '#FFFFFF',
    fontFamily: 'Inter',
    width: 88,
    bottom: 56,
    left: 19,
  },
  chevronRight: {
    bottom: 74,
    left: 103,
    height: 19,
  },
  rotationContainer: {
    position: 'absolute',
    width: 193.5,
    height: 78,
    left: 237,
    top: 75,
    transform: [{ rotate: '-51.44deg' }],
  },

  rotationRectangle: {
    width: 130,
    height: 120,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderTopEndRadius: 150,
  },

  meetContainer: {
    top: 20,
    height: 70,
    left: 20,
  },
  meetText: {
    color: '#4D4D4D',
    fontFamily: 'Inter',
    fontWeight: '800',
    fontSize: 18,
    height: 80,
    // flex: 0,
  },
  viewText: {
    // flex: 1,
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 16,
    color: '#304F6D',
    bottom: 76,
    left: 300,
  },
  chevronBlue: {
    height: 18,
    width: 16,
    bottom: 95,
    left: 360,
  },
  profileBox: {
    width: 430,
    height: 124,
    bottom: 0,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F8EFEF',
    left: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  frame: {
    top: 10,
    height: 100,
    width: 60,
    left: 17,
  },
  heightContainer: {
    height: 350,
  },

  friendRectangle: {
    height: 199,
    backgroundColor: '#FFFAF3',
    borderRadius: 10,
    marginHorizontal: 17,
    bottom: 15,
  },
  referText: {
    color: '#304F6D',
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 18,
    left: 19,
    top: 15,
  },
  shareText: {
    color: '#646464',
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    left: 17,
    top: 25,
    width: 209,
    lineHeight: 19,
  },
  shareBtn: {
    top: 45,
    right: 121,
  },
  shareBtnStyle: {},
  shareIcon: {
    height: 17,
    width: 16,
    top: 23,
    left: 27,
  },
  treeImage: {
    width: 140,
    height: 118,
    left: 210,
    bottom: 100,
  },
});

export { HomeScreen };