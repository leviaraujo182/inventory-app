import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/pages/Login'
import Home from './src/pages/Home'
import AddProduto from './src/pages/AddProduto'

export default function invetoryapp() {

  const Stack = createStackNavigator()

 return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Login" component={Login} options={{ headerShown: false}} />
       <Stack.Screen name="Home" component={Home} options={{ headerTransparent: true, headerTintColor: '#FFF'}} />
       <Stack.Screen name="AddProduto" component={AddProduto} options={{ headerTransparent: true, headerTintColor: '#FFF'}} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}