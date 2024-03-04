import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ImagePath from '../Constants/ImagePath'
import colors from '../Constants/colors'
import { moderateScale, scale } from 'react-native-size-matters'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const GroupGuidlines = () => {
    const navigation=useNavigation();
    const guidlines = [
   {
        text: ' • Do not talk negatively about members on chat or in group.'
    }

    ]

    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={ImagePath.backBtn} style={styles.backBtn}/>
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Group Guidelines</Text>
            </View>
        </View>
        <View style={styles.introTextContainer}>
            <Text style={styles.introText}>
                Your group is a place to express your emotions about your experience and be open, as you listen, get to know other people, and hear about their process. Now here are a few group agreements we request our members to keep in mind for their group interactions:
            </Text>
        </View>
        <View style={styles.guidelinesContainer}>
            <View style={styles.guidelineItem}>
                <View style={styles.bulletPoint}><Text> • </Text></View>
                <Text style={styles.guidelineText}>
                    Be open and curious, the point of this group is to ask other people questions to get to know them as people: what makes them tick, gives them pause, and keeps them going. Ask questions, empathize, be vulnerable.
                </Text>
            </View>
            <View style={styles.guidelineItem}>
                <View style={styles.bulletPoint}><Text> • </Text></View>
                <Text style={styles.guidelineText}>
                    Groups are confidential, respect people’s privacy as you’d want yours respected.
                </Text>
            </View>
            <View style={styles.guidelineItem}>
                <View style={styles.bulletPoint}><Text> • </Text></View>
                <Text style={styles.guidelineText}>
                    Please respect other people’s views on hot-button issues.
                </Text>
            </View>
            <View style={styles.guidelineItem}>
                <View style={styles.bulletPoint}><Text> • </Text></View>
                <Text style={styles.guidelineText}>
                    Do not talk negatively about members on chat or in group.
                </Text>
            </View>
        </View>
    </View>
    )


}

export default GroupGuidlines;

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
        marginLeft:moderateScale(15)
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: moderateScale(18),
        fontWeight: '600',
        textAlign: 'center',
    },
    introTextContainer: {
        marginHorizontal: moderateScale(14),
        marginTop: moderateScale(10),
    },
    introText: {
        fontSize: scale(12),
        color: colors.black,
    },
    guidelinesContainer: {
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(8),
        marginRight: moderateScale(14),
        marginLeft:moderateScale(12),
        paddingHorizontal: moderateScale(18),
        paddingVertical: moderateScale(14),
        marginTop: moderateScale(10),
    },
    guidelineItem: {
        flexDirection: 'row',
        marginVertical: moderateScale(4),
    },
    bulletPoint: {
        marginRight: moderateScale(5),
    },
    guidelineText: {
        fontSize: scale(12),
        fontWeight:'600'
    },
})