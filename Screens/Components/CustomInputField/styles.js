// styles.js
import { StyleSheet} from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

const inputStyles = StyleSheet.create({
  inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: moderateScale(12),
      borderColor: '#D9D9D9',
      width: moderateScale(343),
      height: moderateVerticalScale(48),
      marginBottom: moderateScale(14),
  },
  inputFieldStyle: {
      flex: 1,
      paddingVertical: moderateScale(14),
      paddingHorizontal: moderateScale(16),
      fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: scale(16),
      color: '#333333',
  },
  rightIconContainer: {
      padding: moderateScale(8),
  },
  rightIcon: {
      width: moderateScale(24),
      height: moderateScale(24),
  },
});

export default inputStyles;
