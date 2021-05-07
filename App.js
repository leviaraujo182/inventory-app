import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/pages/Login'

export default function invetoryapp() {

  const Stack = createStackNavigator()

 return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Login" component={Login} options={{ headerShown: false}} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}