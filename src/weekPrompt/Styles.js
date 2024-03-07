import { StyleSheet } from 'react-native';
import colors from '../constants/Colors';
import { moderateScale, scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
       backgroundColor: colors.white,
       flex: 1,
    },
    titleContainer: {
       marginLeft: moderateScale(24),
       marginTop: moderateScale(16),
    },
    title: {
       fontSize: moderateScale(20),
       color: colors.black,
       fontWeight: '700',
       fontFamily: 'Inter',
    },
    subtitleContainer: {
       margin: moderateScale(24),
    },
    subtitle: {
       color: colors.themeColor,
       fontWeight: '700',
       textAlign: 'center',
       fontSize: scale(20),
       lineHeight: moderateScale(24),
    },
    heading: {
       fontSize: scale(18),
       lineHeight: moderateScale(22.4),
       color: colors.grey,
       fontWeight: '700',
       marginLeft: moderateScale(24),
       fontFamily: 'Inter',
    },
    sectionContainer: {
       marginTop: moderateScale(4),
    },
    sectionContainer2:{
     marginTop:moderateScale(18),
    }
   });