import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './Styles';
import { moderateScale } from 'react-native-size-matters';
import { values } from '../../constants/Strings';

export default function PromptSection() {
 

  return (
    <View style={styles.container}>
      {values.map((value, index) => (
        <View key={index} style={styles.promptContainer}>

          <Text style={[styles.promptText, { lineHeight: moderateScale(21) }]}>
            {value}
          </Text>
        </View>
      ))}
    </View>
  );
}
