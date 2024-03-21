import { StyleSheet } from "react-native";
import { moderateScale, scale } from 'react-native-size-matters';
import colors from '../constants/Colors';
import Colors from "../constants/Colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: moderateScale(16),
      marginTop: moderateScale(15),
    },
    headerText: {
      color: colors.black,
      fontWeight: '500',
      fontSize: scale(20),
    },
    guidelinesText: {
      color: colors.themeColor,
      fontWeight: '500',
      fontSize: scale(14),
    },
    groupInfoContainer: {
      marginTop: moderateScale(16),
    },
    groupDetails: {
      borderWidth: moderateScale(2.2),
      padding: moderateScale(12),
      borderRadius: moderateScale(12),
      borderColor: colors.yellowBorder,
      marginHorizontal: moderateScale(16),
    },
    groupTitle: {
      fontWeight: '700',
      fontSize: scale(28),
      color: colors.grey,
    },
    schedule: {
      color: colors.black,
    },
    description: {
      color:Colors.black,
      marginVertical: moderateScale(6),
    },
    facilitatorContainer: {
      marginHorizontal: moderateScale(14),
      marginVertical: moderateScale(12),
    },
    facilitatorTitle: {
      marginHorizontal: moderateScale(5),
      marginVertical: moderateScale(12),
      fontWeight: '700',
      fontSize: scale(16),
      color: colors.grey,
    },
    facilitatorDetails: {
      flexDirection: 'row',
      padding: moderateScale(8),
      borderColor:colors.grey,
      marginTop:moderateScale(6),
    },
    detailContainer: {
      borderWidth: moderateScale(2.2),
      //padding: moderateScale(12),
      borderRadius: moderateScale(12),
      borderColor: colors.yellowBorder,
      //marginHorizontal: moderateScale(16),
      marginTop: moderateScale(5),
    },
    facilitatorImage: {
      height: moderateScale(40),
      width: moderateScale(40),
      marginLeft: moderateScale(12),
      paddingVertical: moderateScale(5),
    },
    facilitatorText: {
      marginLeft:moderateScale(4),
      fontSize: scale(20),
      fontWeight: '500',
      color: colors.black,
    },
    facilitatorDescription: {
      backgroundColor: colors.yellow,
      margin: moderateScale(2),
      borderRadius: moderateScale(8),
      padding: moderateScale(6),
      margin: moderateScale(12),
      borderColor:colors.yellowBorder,
      borderWidth:moderateScale(2)
    },
    facilitatorBackground: {
      backgroundColor: colors.yellow,
      margin: moderateScale(6),
      borderRadius: moderateScale(8),
    },
    facilitatorDescriptionText: {
      color: colors.black,
      fontSize: scale(13),
    },
    imageContainer: {
      
      //marginTop: moderateScale(5),
    },
    meetYourGroup: {
      marginHorizontal: moderateScale(16),
      marginVertical: moderateScale(12),
    },
    meetYourGroupTitle: {
      fontWeight: '700',
      fontSize: scale(16),
      color: colors.grey,
    },
    scrollContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    imageGroupContainer: {
      borderWidth: moderateScale(2.2),
    borderRadius: moderateScale(12),
    borderColor: colors.yellowBorder,
    height: moderateScale(110),
    marginTop: moderateScale(5),
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    alignItems: 'center',
    overflow: 'hidden',
    },
    groupImage: {
      borderRadius: moderateScale(12),
      marginHorizontal: moderateScale(4),
      height: moderateScale(90),
      width: moderateScale(60),
    },
    bottomContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: moderateScale(10),
      alignItems:'center'
    },
    bottomText: {
      color: colors.themeColor,
      fontWeight: '600',
      fontSize: scale(14),
      
    },
  });