import { StyleSheet } from 'react-native'
import colors from '../constants/Colors'
import { moderateScale, scale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
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
    introTextContainer: {
        marginHorizontal: moderateScale(14),
        marginTop: moderateScale(10),
    },
    introText: {
        fontSize: scale(16),
        color: colors.black,
    },
    guidelinesContainer: {
        borderWidth: moderateScale(2),
        borderRadius: moderateScale(8),
        marginRight: moderateScale(14),
        marginLeft:moderateScale(12),
        borderColor:colors.yellowBorder,
        paddingHorizontal: moderateScale(18),
        paddingVertical: moderateScale(14),
        marginTop: moderateScale(12),
    },
    guidelineItem: {
        flexDirection: 'row',
        marginVertical: moderateScale(4),
    },
    bulletPoint: {
        marginRight: moderateScale(2),
    },
    guidelineText: {
        fontSize: scale(14),
        fontWeight:'600',
        marginRight:moderateScale(12),
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: colors.yellow,
        paddingBottom: 20,
        height: moderateScale(24),
        marginTop: moderateScale(70),
    },
    bottomText: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        marginHorizontal: 14,
    },
    emailText: {
        fontWeight: '900',
        fontSize: moderateScale(17),
        textDecorationLine: 'underline',
    },
})