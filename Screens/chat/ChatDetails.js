import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import ImagePath from '../constants/ImagePath'
import { moderateScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'

export default function ChatDetails() {
    const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={ImagePath.backBtn} style={styles.backBtn}/>
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Group Chat</Text>
            </View>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        flexDirection: 'row',
        marginTop:moderateScale(18),
    },
    backBtn:{
        height:24,
        marginTop:8,
        marginLeft:moderateScale(14),
        justifyContent:'center',
        alignItems:'center'
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    title: {
        color:colors.black,
        fontSize: moderateScale(22),
        fontWeight: '600',
        textAlign: 'center',
        marginRight:moderateScale(26)
    },
})