import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';
import { scale, moderateVerticalScale, moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    label: {
      fontSize: scale(14),
      marginLeft:moderateScale(2),
    },
    inputStyle: {
  
      borderBottomWidth: 2,
      borderBottomColor: 'rgba(0,0,0,.08)',
      borderRadius: moderateScale(4),
      marginBottom: moderateVerticalScale(18),
    },
    inlineStyle: {
      fontSize: scale(14),
      fontWeight:'400',
      color:colors.black,
    },
    inputViewStyle: {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center',
    },
  });
  