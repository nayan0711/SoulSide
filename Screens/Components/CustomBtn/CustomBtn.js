import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import { styles } from './styles'; // Import styles

export default function CustomBtn({
    label,
    onPress=()=>{},
}) {
  return (
    <View>
      <TouchableOpacity style={styles.BtnStyle} onPress={onPress}>
        <Text style={styles.BtnTextStyle}>{label}</Text>
      </TouchableOpacity>
    </View>
  )
}
