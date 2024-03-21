import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import PromptSection from '../components/promptSection/PromptSection';
import PromptSection2 from '../components/promptSection2/PromptSection2';
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import {text} from '../constants/Strings'
import {styles} from './Styles'
import { moderateScale } from 'react-native-size-matters';

const WeekPrompt = () => {
  const [animationValue1] = useState(new Animated.Value(500));
  const [animationValue2] = useState(new Animated.Value(-500));

  useFocusEffect(
    React.useCallback(() => {
      Animated.timing(animationValue1, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }).start();
      Animated.timing(animationValue2, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }).start();

      return () => {
        animationValue1.setValue(moderateScale(100));
        animationValue2.setValue(moderateScale(-100));
      };
    }, [animationValue1, animationValue2])
  );

 return (
  <ScrollView style={styles.container}>
  <Animated.View style={[styles.titleContainer, { transform: [{ translateX: animationValue2 }] }]}>
    <Text style={styles.title}>{text.WELCOME_MESSAGE}</Text>
  </Animated.View>
  <Animated.View>
    <View style={styles.subtitleContainer}>
      <Animated.Text style={[styles.subtitle, { transform: [{ translateX: animationValue1 }] }]}>
       {text.SUBTITLE_MESSAGE}
      </Animated.Text>
    </View>
  </Animated.View>
  <Animated.View style={[styles.sectionContainer, { transform: [{ translateX: animationValue2 }] }]}>
    <Text style={styles.heading}>{text.WHY_IT_MATTERS}</Text>
  </Animated.View>
  <Animated.View style={[styles.sectionContainer, { transform: [{ translateX: animationValue1 }] }]}>
  <PromptSection />
  </Animated.View>
  
  <Animated.View style={[styles.sectionContainer2, { transform: [{ translateX: animationValue2 }] }]}>
    <Text style={styles.heading}>{text.SOME_EXAMPLE}</Text>
  </Animated.View>

  <Animated.View style={[styles.sectionContainer, { transform: [{ translateX: animationValue1 }] }]}>
  <PromptSection2 />
  </Animated.View>
  
</ScrollView>
 );
};



export default WeekPrompt;
