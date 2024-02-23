

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Txt = (props)=> {
  return (
    <View>
      <View style={styles.text1Container}>
        <Text style={styles.text1}>{props.content}</Text>
      </View>
      <View style={styles.text2Container}>
        <Text style={styles.text2}>{props.content}</Text>
      </View>
    </View>
  );
};

export default Txt;

const styles = StyleSheet.create({
  text1Container: {
    width: 400,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
    left: 10,
  },
  text1: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#4D4D4D',
  },
  text2Container: {
    width: 365,
    height: 330,
    marginLeft: 25,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
  },
  text2: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#666666',
  },
});
