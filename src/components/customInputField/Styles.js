// styles.js
import { StyleSheet} from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import Colors from '../../constants/Colors';

const inputStyles = StyleSheet.create({
  inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: moderateScale(12),
      borderColor: Colors.lightGrey,
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
      fontSize: scale(15),
      color: Colors.darkGrey,
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
