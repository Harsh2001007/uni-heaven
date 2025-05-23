/* eslint-disable no-unused-vars */
import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import HomeScreen from '../Screens/BottomTabScreens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';
import ListingScreen from '../Screens/ListingScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MeScreen from '../Screens/BottomTabScreens/MeScreen';
import ContactusScreen from '../Screens/BottomTabScreens/ContactusScreen';
import ExploreScreen from '../Screens/BottomTabScreens/ExploreScreen';

export default function AllScreenHolder() {
  const Stack = createNativeStackNavigator();
  const BottomTab = createBottomTabNavigator();

  // eslint-disable-next-line react/no-unstable-nested-components
  function BottomBar() {
    const navigation = useNavigation();

    return (
      <BottomTab.Navigator screenOptions={{headerShown: false}}>
        <BottomTab.Screen
          name="home-screen"
          component={HomeScreen}
          options={{tabBarLabel: 'Home'}}
        />
        <BottomTab.Screen
          name="explore-screen"
          component={ExploreScreen}
          options={{tabBarLabel: 'Explore'}}
        />
        <BottomTab.Screen
          name="contactus-screen"
          component={ContactusScreen}
          options={{
            tabBarLabel: 'Support',
          }}
        />
        <BottomTab.Screen
          name="me-screen"
          component={MeScreen}
          options={{tabBarLabel: 'You'}}
        />
      </BottomTab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen component={LoginScreen} name="login-screen" /> */}
        {/* <Stack.Screen component={SignupScreen} name="signup-screen" /> */}
        <Stack.Screen component={BottomBar} name="bottom-bar" />
        <Stack.Screen component={ListingScreen} name="listing-screen" />
        <Stack.Screen component={DetailScreen} name="detail-screen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
