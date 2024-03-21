import { StyleSheet, Text, View, Image, Linking } from 'react-native'
import React from 'react'
import ImagePath from '../constants/ImagePath'
import {styles} from './GroupGuidlinesStyles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {useNavigation } from '@react-navigation/native'
import { text } from '../constants/Strings'

const GroupGuidlines = () => {
    const email=text.EMAIL_ADDRESS
    const handleEmail = () => {
        Linking.openURL(`mailto:${email}`)
            .catch((err) => console.error('Error opening email app:', err));
    };
    
    const navigation=useNavigation();
    
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ImagePath.backBtn} style={styles.backBtn} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{text.GROUP_GUIDELINES_TITLE}</Text>
        </View>
      </View>
      <View style={styles.introTextContainer}>
        <Text style={styles.introText}>{text.INTRO_TEXT}</Text>
      </View>
      <View style={styles.guidelinesContainer}>
        <View style={styles.guidelineItem}>
          <View style={styles.bulletPoint}><Text> • </Text></View>
          <Text style={styles.guidelineText}>{text.GUIDELINE_1}</Text>
        </View>
        <View style={styles.guidelineItem}>
          <View style={styles.bulletPoint}><Text> • </Text></View>
          <Text style={styles.guidelineText}>{text.GUIDELINE_2}</Text>
        </View>
        <View style={styles.guidelineItem}>
          <View style={styles.bulletPoint}><Text> • </Text></View>
          <Text style={styles.guidelineText}>{text.GUIDELINE_3}</Text>
        </View>
        <View style={styles.guidelineItem}>
          <View style={styles.bulletPoint}><Text> • </Text></View>
          <Text style={styles.guidelineText}>{text.GUIDELINE_4}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText} onPress={() => handleEmail()}>
          {text.FEEDBACK_TEXT} <Text style={styles.emailText}>{email}</Text>.
        </Text>
      </View>
    </View>
    )


}

export default GroupGuidlines;

