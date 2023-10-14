import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ReportsScreen from "./screens/ReportsScreen";
import CameraScreen from "./screens/CameraScreen";
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="report" component={ReportsScreen} />
      <Tab.Screen name="camera" component={CameraScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});