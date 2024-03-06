import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { moderateScale } from 'react-native-size-matters';
import colors from '../../Constants/colors';

export default function PromptSection() {
  const values = [
    "It's good to be aware of your needs, and accept that you have needs. Sometimes you might forget you have needs when you are taking care of others. pregnant or parenting.",
    "Being aware of what works for you or helps you, gives you a little something to share with your people beforehand.",
  ];

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
