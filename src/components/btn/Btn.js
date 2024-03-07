import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Styles';

export default function Btn({onPress, label, backgroundColor, textColor}) {
  return (
    <View style={[styles.buttonContainer, {backgroundColor}]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.buttonText, {color: textColor}]}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

