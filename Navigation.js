const Stack = createNativeStackNavigator();
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WelcomeScreen from './screens/WelcomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import SigninScreen from './screens/SigninScreen';
import DashboardScreen from './screens/DashboardScreen';
import RoadObstructionScreen from './screens/RoadObstrutionScreen';



const Navigation = () => {
  return (
    <Stack.Navigator>
  
      <Stack.Screen options={{ headerShown: false }} name="dashboard" component={DashboardScreen} />
      <Stack.Screen options={{ headerShown: false }} name="road" component={RoadObstructionScreen} />
  
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});


