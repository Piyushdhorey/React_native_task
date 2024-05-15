import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddEmployeesScreen from './AddEmployeesScreen';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const HomeTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="AddEmployees" component={AddEmployeesScreen} />
    <Tab.Screen name="Home" component={HomeScreen} />
  </Tab.Navigator>
);

export default HomeTabs