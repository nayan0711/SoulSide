import { moderateScale, scale } from 'react-native-size-matters';
import colors from '../constants/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    safeArea: {
      flexGrow: 1,
      backgroundColor: colors.themeColor,
    },
    header: {
      height: moderateScale(237),
      
    },
    headerText: {
      marginLeft:moderateScale(16),
      marginTop:moderateScale(102.49),
      height:moderateScale(80),
      width:moderateScale(246),
    },
    signInContainer: {
      backgroundColor: colors.white,
      flexGrow: 1,
      borderTopLeftRadius: moderateScale(20),
      borderTopRightRadius: moderateScale(20),
      paddingHorizontal: moderateScale(20),
      paddingTop: moderateScale(20),
      
    },
    adjust:{
      left:-5
    },
    signInTextContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: moderateScale(20),
    },
    signInText: {
      width:moderateScale(170),
      height:moderateScale(25),
      fontFamily:'Inter',
      fontSize: scale(18),
      lineHeight:moderateScale(21.75),
      fontWeight: '700',
      color:'#4D4D4D',
    },
});

export default styles;
