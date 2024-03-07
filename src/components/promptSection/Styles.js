import { StyleSheet } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: moderateScale(24),
    
  },
  promptContainer: {
    backgroundColor: colors.yellow,
    padding: moderateScale(12),
    borderRadius: moderateScale(12),
    marginTop: moderateScale(14),
    borderColor:colors.yellowBorder,
    borderWidth:moderateScale(1.5),
  },
  promptText: {
    fontSize: scale(15),
    lineHeight: moderateScale(21),
    color: colors.black,
    fontWeight: '400',
  },
});
