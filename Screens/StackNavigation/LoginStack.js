import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator, View } from 'react-native';
import Login from '../Login/Login';
import NavigationTabRoutes from '../TabNavigation/NavigationTabRoutes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const LoginStack = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);

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
  }, []);

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
