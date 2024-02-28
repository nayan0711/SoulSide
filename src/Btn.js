import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn({onPress, label, backgroundColor, textColor}) {
  return (
    <View style={[styles.buttonContainer, {backgroundColor}]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.buttonText, {color: textColor}]}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 165,
    height: 45,
    position: 'relative',
    left: 135,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#304F6D',
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
