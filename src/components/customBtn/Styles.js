import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';
import { moderateScale, scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    BtnStyle:{
        backgroundColor:colors.themeColor,
        height:moderateScale(48),
        borderRadius:moderateScale(60),
        width:moderateScale(343),
        justifyContent:'center',
        alignItems:'center',
    },
    BtnTextStyle:{
        color:colors.white,
        fontWeight:'500',
        fontSize:scale(15),
        lineHeight:moderateScale(24)
    }
});
