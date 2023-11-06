import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';
import Tabs from './tabs';

import { createStackNavigator } from "@react-navigation/stack";

function App() {
  return (
    <Stack.Navigation>
    <Stack.Screen name = 'tabs' components = {Tabs}/> 
    </Stack.Navigation>

  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}


const Stack = createStackNavigator();