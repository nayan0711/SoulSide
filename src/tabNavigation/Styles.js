import { moderateScale, scale } from 'react-native-size-matters';
import colors from '../constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tabIndicator: {
      position: 'absolute',
      top: 0,
      height: 7,
      width: moderateScale(10),
      marginLeft: moderateScale(33.5),
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
    
    },
    tabIconContainer: {
      position: 'relative',
      justifyContent:'center',
      alignItems:'center'
    },
    focusedIcon: {
      tintColor: colors.black,
    },
    tabIcon: {
      
      tintColor: colors.themeColor,
    },
  });