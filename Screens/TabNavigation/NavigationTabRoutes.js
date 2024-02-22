import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen';
import WeekPrompt from '../WeekPrompt';
import Group from '../Group';
import Chat from '../Chat';
import Profile from '../Profile';
import { moderateScale } from 'react-native-size-matters';
import ImagePath from '../Constants/ImagePath'
import colors from '../Constants/colors'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
    
        <Tab.Navigator
        initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: colors.themeColor,
            tabBarActiveTintColor: colors.black,
            transition: 'slide',
            tabBarIndicatorStyle: styles.tabIndicator
          }}
          
          tabBarPosition='bottom'>
          <Tab.Screen
            name="Home"
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
            name="Week Prompt"
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
            name="Group"
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
            name="Chat"
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
            name="Profile"
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabIndicator: {
    position: 'absolute',
    top: 0,
    height: 7,
    width: moderateScale(10),
    marginLeft: moderateScale(33.5),
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  
  },
  tabIconContainer: {
    position: 'relative',
    justifyContent:'center',
    alignItems:'center'
  },
  focusedIcon: {
    tintColor: colors.black,
  },
  tabIcon: {
    
    tintColor: colors.themeColor,
  },
});
