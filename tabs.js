import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ReportsScreen from "./screens/InProgress";
import CameraScreen from "./screens/Pending";
import { NavigationContainer } from '@react-navigation/native';
import CompletedScreen from "./screens/CompletedScreen";
import inprogressScreen from "./screens/InProgress";
import PendingScreen from "./screens/Pending";

const Tab = createBottomTabNavigator();
const Tabs = () => {
  
  return (
    <Tab.Navigator>
      <Tab.Screen name="pending" component={PendingScreen} />
      <Tab.Screen name="inprogress" component={inprogressScreen} />
      <Tab.Screen name="completed" component={CompletedScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;

