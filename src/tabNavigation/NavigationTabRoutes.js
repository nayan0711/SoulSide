import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import HomeScreen from '../homeScreen/HomeScreen';
import WeekPrompt from '../weekPrompt/WeekPrompt';
import Profile from '../profile/Profile';
import ImagePath from '../constants/ImagePath'
import colors from '../constants/Colors'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GroupStack from '../stackNavigation/GroupStack';
import ChatStack from '../stackNavigation/ChatStack';
import { text } from '../constants/Strings';
import { styles } from './Styles';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import Chat from '../chat/Chat';
import Group from '../group/Group';
const Tab = createMaterialTopTabNavigator();

export default function App() {
  const getRouteName=route=>{
    const routeName= getFocusedRouteNameFromRoute(route);

  }

  return (
    <View style={styles.container}>
    
        <Tab.Navigator
        initialRouteName={text.INITIAL_ROUTE_NAME}
          screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: colors.themeColor,
            tabBarActiveTintColor: colors.black,
            transition: 'slide',
            tabBarIndicatorStyle: styles.tabIndicator
            
          }}
          
          tabBarPosition='bottom'>
          <Tab.Screen
            name={text.HOME_SCREEN_NAME}
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={[styles.tabIconContainer, focused && styles.focusedIcon]}>
                  <Image
                    source={ImagePath.Home}
                    style={styles.tabIcon}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name={text.WEEK_PROMPT_SCREEN_NAME}
            component={WeekPrompt}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={[styles.tabIconContainer, focused && styles.focusedIcon]}>
                  <Image
                    source={ImagePath.Week_Prompt}
                    style={styles.tabIcon}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name={text.GROUP_SCREEN_NAME}
            component={Group}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={[styles.tabIconContainer, focused && styles.focusedIcon]}>
                  <Image
                    source={ImagePath.Group}
                    style={styles.tabIcon}
                  />
                </View>
              ),
              
            }}
          />
          <Tab.Screen
            name={text.CHAT_SCREEN_NAME}
            component={Chat}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={[styles.tabIconContainer, focused && styles.focusedIcon]}>
                  <Image
                    source={ImagePath.Chat}
                    style={styles.tabIcon}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name={text.PROFILE_SCREEN_NAME}
            component={Profile}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={[styles.tabIconContainer, focused && styles.focusedIcon]}>
                  <Image
                    source={ImagePath.Profile}
                    style={styles.tabIcon}
                  />
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      
    </View>
  )
}


