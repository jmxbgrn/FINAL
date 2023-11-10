import { NavigationContainer } from '@react-navigation/native';

import Tabs from './tabs';
import { createStackNavigator } from "@react-navigation/stack";
import RoadObstructionScreen from './screens/RoadObstrutionScreen';

import StrayAnimal from './screens/StrayAnimalScreen';
import WasteManagement from './screens/WasteManagementScreen';
import OtherScreen from './screens/OtherScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import SigninScreen from './screens/SigninScreen';
const Stack = createStackNavigator();

function App() {
  return (
    // <Stack.Navigator>
    //       <Stack.Screen options={{ headerShown: false }} name="welcome" component={WelcomeScreen} />
    //   <Stack.Screen options={{ headerShown: false }} name="register" component={RegisterScreen} />
    //   <Stack.Screen options={{ headerShown: false }} name="login" component={LoginScreen} />
    //   <Stack.Screen options={{ headerShown: false }} name="signin" component={SigninScreen} />
    // </Stack.Navigator>

//(uncomment pra ma test yung login perspective)


      <Stack.Navigator>
      {/* <Stack.Screen options={{ headerShown: false }} name="Tab" component={Tabs} /> */}
      <Stack.Screen options={{ headerShown: false }} name="road" component={RoadObstructionScreen} />
      {/* <Stack.Screen options={{ headerShown: false }} name="stray" component={StrayAnimal} />
      <Stack.Screen options={{ headerShown: false }} name="waste" component={WasteManagement} />
      <Stack.Screen options={{ headerShown: false }} name="other" component={OtherScreen} /> */}

    </Stack.Navigator>

//(Admins perspective)


  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}
