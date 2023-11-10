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
import StrayAnimal from './screens/StrayAnimalScreen';
import WasteManagement from './screens/WasteManagementScreen';
import Other from './screens/OtherScreen';

const Navigation = () => {
  return (
    <Stack.Navigator>
  
      {/* <Stack.Screen options={{ headerShown: false }} name="dashboard" component={DashboardScreen} /> */}
      <Stack.Screen options={{ headerShown: false }} name="road" component={RoadObstructionScreen} />
      {/* <Stack.Screen options={{ headerShown: false }} name="stray" component={StrayAnimal} />
      <Stack.Screen options={{ headerShown: false }} name="waste" component={WasteManagement} />
      <Stack.Screen options={{ headerShown: false }} name="other" component={Other} /> */}

    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});


