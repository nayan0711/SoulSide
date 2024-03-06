import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import colors from './Constants/colors';
import { moderateScale, scale } from 'react-native-size-matters';
import PromptSection from './components/promptSection/promptSection';
import PromptSection2 from './components/promptSection2/promptSection2';
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

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
    <Text style={styles.title}>Welcome back, Sarina!</Text>
  </Animated.View>
  <Animated.View>
    <View style={styles.subtitleContainer}>
      <Animated.Text style={[styles.subtitle, { transform: [{ translateX: animationValue1 }] }]}>
       " What do you need when you are having a hard day? "
      </Animated.Text>
    </View>
  </Animated.View>
  <Animated.View style={[styles.sectionContainer, { transform: [{ translateX: animationValue2 }] }]}>
    <Text style={styles.heading}>Why It Matters</Text>
  </Animated.View>
  <Animated.View style={[styles.sectionContainer, { transform: [{ translateX: animationValue1 }] }]}>
  <PromptSection />
  </Animated.View>
  
  <Animated.View style={[styles.sectionContainer2, { transform: [{ translateX: animationValue2 }] }]}>
    <Text style={styles.heading}>Some Example</Text>
  </Animated.View>

  <Animated.View style={[styles.sectionContainer, { transform: [{ translateX: animationValue1 }] }]}>
  <PromptSection2 />
  </Animated.View>
  
</ScrollView>
 );
};

const styles = StyleSheet.create({
 container: {
    backgroundColor: colors.white,
    flex: 1,
 },
 titleContainer: {
    marginLeft: moderateScale(24),
    marginTop: moderateScale(16),
 },
 title: {
    fontSize: moderateScale(20),
    color: colors.black,
    fontWeight: '700',
    fontFamily: 'Inter',
 },
 subtitleContainer: {
    margin: moderateScale(24),
 },
 subtitle: {
    color: colors.themeColor,
    fontWeight: '700',
    textAlign: 'center',
    fontSize: scale(20),
    lineHeight: moderateScale(24),
 },
 heading: {
    fontSize: scale(18),
    lineHeight: moderateScale(22.4),
    color: colors.grey,
    fontWeight: '700',
    marginLeft: moderateScale(24),
    fontFamily: 'Inter',
 },
 sectionContainer: {
    marginTop: moderateScale(4),
 },
 sectionContainer2:{
  marginTop:moderateScale(18),
 }
});

export default WeekPrompt;
