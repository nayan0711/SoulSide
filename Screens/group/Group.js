import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import { moderateScale, scale } from 'react-native-size-matters'
import ImagePath from '../constants/ImagePath'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Group = () => {
  const navigation=useNavigation();
  const imageData = [
    {
      id:1,
      image: require('../../assets/Frame1.png')
    },
    {
      id:2,
      image: require('../../assets/Frame2.png'),
    },
    {
      id:3,
      image: require('../../assets/Frame3.png'),
    },
    {
      id:4,
      image: require('../../assets/Frame4.png'),
    },
    {
      id:5,
      image: require('../../assets/Frame5.png'),
    },
    {
      id:6,
      image: require('../../assets/Frame6.png'),
    },
    {
      id:7,
      image: require('../../assets/Frame6.png'),
    }, {
      id:8,
      image: require('../../assets/Frame6.png'),
    }, {
      id:9,
      image: require('../../assets/Frame6.png'),
    }, {
      id:10,
      image: require('../../assets/Frame6.png'),
    }, {
      id:11,
      image: require('../../assets/Frame6.png'),
    }, {
      id:12,
      image: require('../../assets/Frame6.png'),
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(16),
    marginTop: moderateScale(15),
  },
  headerText: {
    color: colors.black,
    fontWeight: '500',
    fontSize: scale(20),
  },
  guidelinesText: {
    color: colors.themeColor,
    fontWeight: '500',
    fontSize: scale(14),
  },
  groupInfoContainer: {
    marginTop: moderateScale(16),
  },
  groupDetails: {
    borderWidth: moderateScale(2.2),
    padding: moderateScale(12),
    borderRadius: moderateScale(12),
    borderColor: '#F8EFEF',
    marginHorizontal: moderateScale(16),
  },
  groupTitle: {
    fontWeight: '700',
    fontSize: scale(28),
    color: colors.grey,
  },
  schedule: {
    color: colors.black,
  },
  description: {
    marginVertical: moderateScale(6),
  },
  facilitatorContainer: {
    marginHorizontal: moderateScale(14),
    marginVertical: moderateScale(12),
  },
  facilitatorTitle: {
    marginHorizontal: moderateScale(5),
    marginVertical: moderateScale(12),
    fontWeight: '700',
    fontSize: scale(16),
    color: colors.grey,
  },
  facilitatorDetails: {
    flexDirection: 'row',
    padding: moderateScale(8),
    borderColor:colors.grey,
    marginTop:moderateScale(6),
  },
  detailContainer: {
    borderWidth: moderateScale(2.2),
    //padding: moderateScale(12),
    borderRadius: moderateScale(12),
    borderColor: '#F8EFEF',
    //marginHorizontal: moderateScale(16),
    marginTop: moderateScale(5),
  },
  facilitatorImage: {
    height: moderateScale(40),
    width: moderateScale(40),
    marginLeft: moderateScale(12),
    paddingVertical: moderateScale(5),
  },
  facilitatorText: {
    marginLeft:moderateScale(4),
    fontSize: scale(20),
    fontWeight: '500',
    color: colors.black,
  },
  facilitatorDescription: {
    backgroundColor: colors.yellow,
    margin: moderateScale(2),
    borderRadius: moderateScale(8),
    padding: moderateScale(6),
    margin: moderateScale(12),
    borderColor:colors.yellowBorder,
    borderWidth:moderateScale(2)
  },
  facilitatorBackground: {
    backgroundColor: colors.yellow,
    margin: moderateScale(6),
    borderRadius: moderateScale(8),
  },
  facilitatorDescriptionText: {
    color: colors.black,
    fontSize: scale(13),
  },
  imageContainer: {
    
    //marginTop: moderateScale(5),
  },
  meetYourGroup: {
    marginHorizontal: moderateScale(16),
    marginVertical: moderateScale(12),
  },
  meetYourGroupTitle: {
    fontWeight: '700',
    fontSize: scale(16),
    color: colors.grey,
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageGroupContainer: {
    borderWidth: moderateScale(2.2),
  borderRadius: moderateScale(12),
  borderColor: '#F8EFEF',
  height: moderateScale(110),
  marginTop: moderateScale(5),
  flexDirection: 'row',
  justifyContent: 'flex-start', 
  alignItems: 'center',
  overflow: 'hidden',
  },
  groupImage: {
    borderRadius: moderateScale(12),
    marginHorizontal: moderateScale(4),
    height: moderateScale(90),
    width: moderateScale(60),
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: moderateScale(10),
    alignItems:'center'
  },
  bottomText: {
    color: colors.themeColor,
    fontWeight: '600',
    fontSize: scale(14),
    
  },
});

export default Group