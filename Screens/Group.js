import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import colors from './Constants/colors'
import { moderateScale, scale } from 'react-native-size-matters'
import ImagePath from './Constants/ImagePath'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const Group = () => {
  const imageData = [
    {
      id:1,
      image: require('../Assets/Frame1.png')
    },
    {
      id:2,
      image: require('../Assets/Frame2.png'),
    },
    {
      id:3,
      image: require('../Assets/Frame3.png'),
    },
    {
      id:4,
      image: require('../Assets/Frame4.png'),
    },
    {
      id:5,
      image: require('../Assets/Frame5.png'),
    },
    {
      id:6,
      image: require('../Assets/Frame6.png'),
    },
    {
      id:7,
      image: require('../Assets/Frame6.png'),
    }, {
      id:8,
      image: require('../Assets/Frame6.png'),
    }, {
      id:9,
      image: require('../Assets/Frame6.png'),
    }, {
      id:10,
      image: require('../Assets/Frame6.png'),
    }, {
      id:11,
      image: require('../Assets/Frame6.png'),
    }, {
      id:12,
      image: require('../Assets/Frame6.png'),
    },
  ]
  return (
    <ScrollView>
      <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View><Text style={styles.headerText}>Your Group</Text></View>
        <TouchableOpacity><Text style={styles.guidelinesText}>Group Guidelines</Text></TouchableOpacity>
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
          {/* Add your Meet Your Group content here */}
          <View>
          <ScrollView>
            <View style={[styles.detailContainer, {flexDirection:'row'}] }>
            <View style={{marginHorizontal:moderateScale(12)}}>
              {imageData.map((data)=>{
                return(
                  
                    <Image key={data.id} source={data.image}/>
                  
                )
              })}
              </View> 
            </View>
            </ScrollView>
          </View>
        </View>
      </View>
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
    borderWidth: moderateScale(1),
    padding: moderateScale(12),
    borderRadius: moderateScale(12),
    borderColor: colors.grey,
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

  },
  detailContainer: {
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(12),
    borderColor: colors.grey,
    
  },
  facilitatorImage: {
    height: moderateScale(30),
    width: moderateScale(30),
    marginLeft:moderateScale(8),

  },
  facilitatorText: {
    fontSize: scale(16),
    fontWeight: '500',
    color: colors.black,
  },
  facilitatorDescription: {
    backgroundColor: colors.yellow,
    margin: moderateScale(6),
    borderRadius: moderateScale(8),
    padding: moderateScale(6),
    margin:moderateScale(12)
  },
  facilitatorBackground: {
    backgroundColor: colors.yellow,
    margin: moderateScale(6),
    borderRadius: moderateScale(8),
    
  },
  facilitatorDescriptionText: {
    color: colors.black,
    fontSize: scale(12),
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
});

export default Group