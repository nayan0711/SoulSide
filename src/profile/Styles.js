import { StyleSheet } from 'react-native';
import colors from '../constants/Colors';
import { moderateScale, scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      //marginHorizontal:4
    },
    header: {
      backgroundColor: colors.themeColor,
    },
    headerContainer: {
      height: moderateScale(150),
      marginTop: moderateScale(18),
      //marginHorizontal:moderateScale(2),
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
      left: moderateScale(60),
      height: moderateScale(35),
      width: moderateScale(35),
    },
    userName: {
      color: colors.white,
      fontSize: scale(20),
      padding: scale(10),
    },
    scrollView: {
      flexGrow: 1,
      backgroundColor: colors.white,
      marginHorizontal:4
    },
    inputContainer: {
      marginHorizontal: moderateScale(14),
    },
    shadowContainer: {
      backgroundColor: colors.white,
      marginTop: moderateScale(-30),
    },
    shadowBox: {
      top:moderateScale(-36),
      marginHorizontal: moderateScale(16),
      borderRadius: moderateScale(8),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
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
      height: scale(18),
      width: scale(18),
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    modalContent: {
      width: '100%',
      backgroundColor: colors.white,
      borderRadius: 10,
      padding: 20,
    },
    modalText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 30,
      textAlign: 'center',
      color:colors.grey
    },
    modalButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    modalButton: {
      flex: 1,
      backgroundColor: colors.themeColor,
      borderRadius: 5,
      padding: 10,
      marginHorizontal: 5,
    },
    modalButtonText: {
      color: colors.white,
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  