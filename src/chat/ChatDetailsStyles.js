import { StyleSheet } from 'react-native'
import Colors from '../constants/Colors'
import { moderateScale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    marginTop: moderateScale(18),
    marginBottom: moderateScale(14),
  },
  backBtn: {
    height: 24,
    marginTop: 8,
    marginLeft: moderateScale(14),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.black,
    fontSize: moderateScale(22),
    fontWeight: '600',
    textAlign: 'center',
    marginRight: moderateScale(26),
  },
  messagesContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  messageContainer: {
    marginBottom: 10,
    maxWidth: '70%',
    borderRadius: 10,
    padding: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#F8F6F5',
  },
  senderName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  senderText: {
    fontSize: 18,
    color: Colors.white,
  },
  messageText: {
    fontSize: 16,
    color: Colors.black,
  },
  receiverName: {
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'flex-end',
    color: Colors.white,
  },
  receiverContainer: {
    marginBottom: 10,
    maxWidth: '70%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10,
    alignSelf: 'flex-end',
    backgroundColor: Colors.themeColor,
    marginRight: 65,
    top: -15,
  },
  senderContainer: {
    flexDirection: 'row-reverse',
  },
  senderImage: {
    height: 50,
    width: 50,
    alignSelf: 'flex-end',
  },
  senderTextStyle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 4,
    marginHorizontal: 8,
    color: Colors.black,
  },
  chatContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  messageInputContainer: {
    borderTopWidth: 2,
    borderTopColor: Colors.lightGrey,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputFieldContainer:{
    width:330
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  attachmentContainer: {
    justifyContent: 'center',
  },
  attachmentIcon: {
    height: 30,
    width: 30,
  },
  inputField: {
    fontSize: 15,
    fontWeight: '500',
    backgroundColor: '#F3F6F6',
    padding: 10,
    borderRadius: 8,
    flex: 1,
  },
  sendButtonContainer: {},
  sendButtonIcon: {
    height: 45,
    width: 45,
  },  
})