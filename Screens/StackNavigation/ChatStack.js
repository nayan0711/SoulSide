import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Chat from '../Chat';
import ChatDetails from '../chat/ChatDetails';


const Stack = createStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Chat Main" component={Chat} />
      <Stack.Screen name="Chat Details" component={ChatDetails} />
    </Stack.Navigator>
  );
};

export default ChatStack;
