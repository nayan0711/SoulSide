import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { content } from '../../constants/Strings';
import {styles} from './Styles';
export default function PromptSection2() {
  

  return (
    <View>
      {content.map((item, index) => (
        <View key={index} style={styles.container}>
          <View>
            <Text style={styles.head}>{item.head}</Text>
          </View>
          <View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

