import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { moderateScale, scale } from 'react-native-size-matters';
import colors from '../../Constants/colors';

export default function PromptSection2() {
  const content = [
    {
      head: 'Seeking Solitude',
      description: 'Sometimes, you might need a peaceful, distraction-free space.',
    },
    {
      head: 'Immediate Conversations',
      description: 'Others find comfort in discussing things right away.',
    },
  ];

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

const styles = StyleSheet.create({
  container: {
    borderWidth: moderateScale(1.5),
    marginHorizontal: moderateScale(24),
    marginTop: moderateScale(14),
    borderRadius: moderateScale(8),
    padding: moderateScale(8),
    borderColor: '#F8EFEF',
  },
  head: {
    color: colors.grey,
    fontWeight: '600',
    fontSize: scale(12),
  },
  description: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: scale(12),
    lineHeight: scale(16.8),
    color: '#666666',
  },
});
