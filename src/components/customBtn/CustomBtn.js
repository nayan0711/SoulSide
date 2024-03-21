import React from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Styles'; // Import styles

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
