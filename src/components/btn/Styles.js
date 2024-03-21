import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
    buttonContainer: {
      width: 165,
      height: 45,
      position: 'relative',
      left: 135,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 60,
      borderWidth: 2,
      borderColor: Colors.themeColor,
      top: 10,
    },
    buttonText: {
      fontFamily: 'Inter',
      fontSize: 18,
      fontWeight: '700',
      lineHeight: 24,
      letterSpacing: 0,
      textAlign: 'center',
    },
  });