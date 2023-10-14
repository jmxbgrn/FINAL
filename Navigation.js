const Stack = createNativeStackNavigator();
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WelcomeScreen from './screens/WelcomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';


const Navigation = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen options={{ headerShown: false }} name="welcome" component={WelcomeScreen} />
    <Stack.Screen options={{ headerShown: false }} name="register" component={RegisterScreen} />
    <Stack.Screen options={{ headerShown: false }} name="login" component={LoginScreen} />
  

  </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});