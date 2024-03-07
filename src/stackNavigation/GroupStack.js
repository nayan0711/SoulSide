import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Group from '../group/Group';
import GroupGuidlines from '../group/GroupGuidlines';
import { text } from '../constants/Strings';


const Stack = createStackNavigator();

const GroupStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={text.GROUP_MAIN_SCREEN_NAME} component={Group} />
      <Stack.Screen name={text.GROUP_GUIDELINES_SCREEN_NAME} component={GroupGuidlines}/>
    </Stack.Navigator>
  );
};

export default GroupStack;
