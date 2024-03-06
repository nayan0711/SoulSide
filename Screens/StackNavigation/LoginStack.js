import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator, View, ImageBackground } from 'react-native';
import Login from '../Login/Login';
import NavigationTabRoutes from '../TabNavigation/NavigationTabRoutes';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ImagePath from '../Constants/ImagePath';

const Stack = createStackNavigator();

const SplashScreenComponent = () => (
  <View style={{ flex: 1 }}>
    <ImageBackground source={ImagePath.splashScreen} style={{ flex: 1 }} />
  </View>
);

const LoginStack = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const tokenFromStorage = await AsyncStorage.getItem('token');
        setToken(tokenFromStorage);
      } catch (error) {
        console.log('Error fetching token:', error);
      } finally {
        setIsLoading(false);
      }
    };
    checkToken();

    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 500);

    return () => clearTimeout(splashTimeout);
  }, []);

  

  if (showSplash) {
    return <SplashScreenComponent />;
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName={token ? 'Main' : 'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={NavigationTabRoutes} />
    </Stack.Navigator>
  );
};

export default LoginStack;
