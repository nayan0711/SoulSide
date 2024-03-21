import { StyleSheet } from "react-native";
import { moderateScale, scale } from 'react-native-size-matters';
import colors from '../../constants/Colors';
export const styles = StyleSheet.create({
    container: {
      borderWidth: moderateScale(1.5),
      marginHorizontal: moderateScale(24),
      marginTop: moderateScale(14),
      borderRadius: moderateScale(8),
      padding: moderateScale(8),
      borderColor: '#F8EFEF',
    },
    head: {
      color: colors.grey,
      fontWeight: '800',
      fontSize: scale(13),
    },
    description: {
      marginTop:moderateScale(4),
      
      fontWeight: '600',
      fontSize: scale(13),
      lineHeight: scale(16.8),
      color: '#666666',
    },
  });
  