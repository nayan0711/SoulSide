import { StyleSheet } from "react-native";
import colors from '../constants/Colors'
export const styles = StyleSheet.create({
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
  