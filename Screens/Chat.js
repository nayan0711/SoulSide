import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import colors from './Constants/colors'
import ImagePath from './Constants/ImagePath'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Chat = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Group Chat</Text>
      </View>

      {/* Groups */}
      <View>
        <View style={styles.groupContainer}>
          <View style={styles.groupItem}>
            <Image source={ImagePath.chatGroup} style={styles.groupImage} />
            <TouchableOpacity style={styles.groupDetails} onPress={() => navigation.navigate('Chat Details')}>
              <Text style={styles.groupTitle}>Team Align</Text>
              <Text style={styles.groupDescription}>Don't miss to attend the meeting.</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.groupContainer}>
          <View style={styles.groupItem}>
            <Image source={ImagePath.chatGroup} style={styles.groupImage} />
            <TouchableOpacity style={styles.groupDetails}>
              <Text style={styles.groupTitle}>Team Align</Text>
              <Text style={styles.groupDescription}>Don't miss to attend the meeting.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  header: {
    marginHorizontal: 24,
    marginVertical: 14,
  },
  headerText: {
    fontSize: 24,
    color: colors.black,
    fontWeight: '500',
  },
  groupContainer: {
    borderBottomWidth: 3,
    borderColor: colors.yellow,
  },
  groupItem: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginVertical: 14,
  },
  groupImage: {
    height: 50,
    width: 50,
  },
  groupDetails: {
    marginHorizontal: 12,
  },
  groupTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.black,
  },
  groupDescription: {
    fontSize: 16,
    fontWeight: '300',
    color: colors.black,
  },
});

export default Chat;
