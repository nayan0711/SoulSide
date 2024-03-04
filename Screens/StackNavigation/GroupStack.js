import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Group from '../group/Group';
import GroupGuidlines from '../group/GroupGuidlines';


const Stack = createStackNavigator();

const GroupStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="GroupMain" component={Group} />
      <Stack.Screen name="GroupGuidlines" component={GroupGuidlines} />
    </Stack.Navigator>
  );
};

export default GroupStack;
