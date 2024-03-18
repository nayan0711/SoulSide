import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, Alert, TextInput } from 'react-native';
import ImagePath from '../constants/ImagePath';
import { useNavigation } from '@react-navigation/native';
import { styles } from './ChatDetailsStyles';
import Colors from '../constants/Colors';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChatDetails = () => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const flatListRef = useRef(null); // Ref for FlatList
  const [name, setName] = useState('');

  useEffect(() => {
    const unsubscribe = firestore().collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        const messagesData = snapshot.docs.map(doc => doc.data()).reverse();
        setMessages(messagesData);
        scrollToBottom();
      });

    const getName = async () => {
      try {
        const storedName = await AsyncStorage.getItem('firstName');
        setName(storedName);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getName();

    return () => unsubscribe();
  }, []);

  const handleTextChange = (text) => {
    setInputValue(text);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() !== '') {
      try {
        await firestore().collection('messages').add({
          sender: name,
          text: inputValue,
          timestamp: firestore.FieldValue.serverTimestamp(),
        });
        setInputValue('');
        scrollToBottom();
      } catch (error) {
        console.error('Error sending message:', error);
        Alert.alert('Error', 'Failed to send message. Please try again.');
      }
    } else {
      Alert.alert('Error', 'Please enter a message.');
    }
  };

  const renderMessage = ({ item }) => (
    (item.sender === name) ?
      <View>
        <View style={styles.senderContainer}>
          <Image source={ImagePath.profileImage} style={styles.senderImage} />
          <Text style={styles.senderTextStyle}>{item.sender}</Text>
        </View>
        <View style={[styles.receiverContainer, { marginRight: 65, top: -15 }]}>
          <Text style={styles.senderText}>{item.text}</Text>
          <Text style={{ color: Colors.white, fontSize: 10, justifyContent: 'flex-end' }}>{formatTimestamp(item.timestamp)}</Text>
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
          <Text style={{ color: Colors.black, fontSize: 10, justifyContent: 'flex-end' }}>{formatTimestamp(item.timestamp)}</Text>
        </View>
      </View>
  );

  const scrollToBottom = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  const formatTimestamp = (timestamp) => {
    if (timestamp && timestamp.toDate) {
      const date = timestamp.toDate();
      return `${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else {
      return "";
    }
  };

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
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.messagesContainer}
        />
      </View>

      {/* Message input code here */}
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
            <TouchableOpacity onPress={handleSendMessage} >
              <Image source={ImagePath.send} style={styles.sendButtonIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChatDetails;
