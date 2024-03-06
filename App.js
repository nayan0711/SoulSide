import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './Screens/stackNavigation/LoginStack';

const App = () => {
  
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <LoginStack/>
      </NavigationContainer>
    </View>
  );
}

export default App;