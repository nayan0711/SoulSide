import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../constants/Colors'
import { moderateScale, scale } from 'react-native-size-matters'
import ImagePath from '../constants/ImagePath'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import {styles} from './GroupStyles'
const Group = () => {
  const navigation=useNavigation();
  const imageData = [
    {
      id:1,
      image: require('../../Assets/Frame1.png')
    },
    {
      id:2,
      image: require('../../Assets/Frame2.png'),
    },
    {
      id:3,
      image: require('../../Assets/Frame3.png'),
    },
    {
      id:4,
      image: require('../../Assets/Frame4.png'),
    },
    {
      id:5,
      image: require('../../Assets/Frame5.png'),
    },
    {
      id:6,
      image: require('../../Assets/Frame6.png'),
    },
    {
      id:7,
      image: require('../../Assets/Frame6.png'),
    }, {
      id:8,
      image: require('../../Assets/Frame6.png'),
    }, {
      id:9,
      image: require('../../Assets/Frame6.png'),
    }, {
      id:10,
      image: require('../../Assets/Frame6.png'),
    }, {
      id:11,
      image: require('../../Assets/Frame6.png'),
    }, {
      id:12,
      image: require('../../Assets/Frame6.png'),
    },
  ]
  return (
    <ScrollView style={styles.container} >
      {/* Header */}
      <View style={styles.header}>
        <View><Text style={styles.headerText}>Your Group</Text></View>
        <TouchableOpacity onPress={()=>navigation.navigate('GroupGuidlines')}><Text style={styles.guidelinesText}>Group Guidelines</Text></TouchableOpacity>
      </View>

      <View style={styles.groupInfoContainer}>
        <View style={styles.groupDetails}>
          <Text style={styles.groupTitle}>Power Moms</Text>
          <Text style={styles.schedule}>Monday @3:00 pm ET/6:00 pm ET</Text>
          <Text style={styles.description}>A safe and nurturing space for moms-to-be to connect, share, and explore their unique journeys through motherhood.</Text>
        </View>

        <View style={styles.facilitatorContainer}>
          <Text style={styles.facilitatorTitle}>Know your Facilitator</Text>
          <View style={styles.detailContainer}>
            <View style={styles.facilitatorDetails}>
              <Image style={styles.facilitatorImage} source={ImagePath.facilitatorProfile} />
              <Text style={styles.facilitatorText}>Aimee Williams <Image source={ImagePath.vector} /></Text>
            </View>
            <View style={styles.facilitatorDescription}>
              <View style={styles.facilitatorBackground}>
                <Text style={styles.facilitatorDescriptionText}>Aimée is an RN, certified nurse midwife, mother, and childbirth educator. She loves the intimacy created when deeper connections are formed, and believes that birthing people have better outcomes in a strong, supportive community.</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.meetYourGroup}>
  <View>
    <Text style={styles.meetYourGroupTitle}>Meet Your Group</Text>
  </View>
  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
    <View style={styles.imageGroupContainer}>
      {imageData.map((data) => (
        <View key={data.id} style={styles.imageContainer}>
          <Image source={data.image} style={styles.groupImage} />
        </View>
      ))}
    </View>
  </ScrollView>
</View>

      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity>
          <Text style={styles.bottomText}>Need A Group Change <Image source={ImagePath.chevronRight} /></Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    
  )
}


export default Group