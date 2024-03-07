import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Chat from '../chat/Chat';
import ChatDetails from '../chat/ChatDetails';
import { text } from '../constants/Strings';

const Stack = createStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={text.CHAT_MAIN_SCREEN_NAME} component={Chat} />
      <Stack.Screen name={text.CHAT_DETAILS_SCREEN_NAME} component={ChatDetails} />
    </Stack.Navigator>
  );
};

export default ChatStack;
