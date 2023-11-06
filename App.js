import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';
import Tabs from './tabs';
import { createStackNavigator } from "@react-navigation/stack";
import DasboardScreen from "./screens/DashboardScreen";
import RoadObstructionScreen from './screens/RoadObstrutionScreen';
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
//(Admins perspective)


      <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Tab" component={Tabs} />
      <Stack.Screen options={{ headerShown: false }} name="road" component={RoadObstructionScreen} />

    </Stack.Navigator>

  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}
