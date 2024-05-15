import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from './LoginScreen';
import HomeTabs from './TabNavigator';
import AddEmployeesScreen from './AddEmployeesScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();


const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='HomeTabs' component={HomeTabs}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
