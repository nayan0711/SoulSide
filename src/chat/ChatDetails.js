import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, Alert, TextInput, ImageBackground } from 'react-native';
import ImagePath from '../constants/ImagePath';
import { useNavigation } from '@react-navigation/native';
import { styles } from './ChatDetailsStyles';
import Colors from '../constants/Colors';

const dummyMessages = [
  { id: '4', sender: 'Charlie', text: 'Hello everyone!' },
  { id: '5', sender: 'Alice', text: 'Nice to see you, Charlie!' },
];

export default function ChatDetails() {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');

  const handleTextChange = (text) => {
    setInputValue(text);
  };
  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        id: (dummyMessages.length +4 ).toString(),
        sender: 'Alice',
        text: inputValue,
      };

      dummyMessages.push(newMessage);
      setInputValue('');
    } else {
      Alert.alert('Error', 'Please enter a message.');
    }
  };
  const renderMessage = ({ item }) => (
    (item.sender == 'Alice') ?
    <View>
    <View style={styles.senderContainer}>
      <Image source={ImagePath.profileImage} style={styles.senderImage} />
      <Text style={styles.senderTextStyle}>{item.sender}</Text>
    </View>
    <View style={[styles.receiverContainer, { marginRight: 65, top: -15 }]}>
      <Text style={styles.senderText}>{item.text}</Text>
    </View>
  </View>

      :
      <View>
  <View style={{ flexDirection: 'row' }}>
    <Image source={ImagePath.profileImage} style={{ height: 50, width: 50 }} />
    <Text style={[styles.senderName, { fontSize: 18, color: Colors.darkGrey, marginLeft: 10 }]}>{item.sender}</Text>
  </View>
  <View style={[styles.messageContainer, { marginLeft: 65, top: -15 }]}>
    <Text style={[styles.messageText, { fontSize: 18 }]}>{item.text}</Text>
  </View>
</View>


  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ImagePath.backBtn} style={styles.backBtn} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Group Chat</Text>
        </View>
      </View>




    <View style={styles.chatContainer}>
    <FlatList
        data={dummyMessages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContaine
        rStyle={styles.messagesContainer}
      />

    </View>
      
    
    <View style={styles.messageInputContainer}>
        <View style={styles.inputRow}>
          <View style={styles.attachmentContainer}>
            <Image source={ImagePath.attachment} style={styles.attachmentIcon} />
          </View>
          <View style={styles.inputFieldContainer}>
            <TextInput
              placeholder="Write your message"
              placeholderTextColor="#999999"
              style={styles.inputField}
              value={inputValue}
              onChangeText={handleTextChange}
            />
          </View>
          <View style={styles.sendButtonContainer}>
            <TouchableOpacity onPress={handleSendMessage}>
              <Image source={ImagePath.send} style={styles.sendButtonIcon} />
            </TouchableOpacity>
          </View>
        </View>
    </View>
    </View>
  );
}


