import { StyleSheet } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import colors from '../../Constants/colors';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: moderateScale(24),
  },
  promptContainer: {
    backgroundColor: colors.yellow,
    padding: moderateScale(12),
    borderRadius: moderateScale(12),
    marginTop: moderateScale(14),
  },
  promptText: {
    fontSize: scale(14),
    lineHeight: moderateScale(21),
    color: colors.black,
    fontWeight: '400',
  },
});
