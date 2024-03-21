import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import ImagePath from '../constants/ImagePath'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import {styles} from './ChatStyles'
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


export default Chat;
