import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CompletedScreen from "./screens/CompletedScreen";
import inprogressScreen from "./screens/InProgress";
import PendingScreen from "./screens/Pending";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import DasboardScreen from "./screens/DashboardScreen";
import { MaterialIcons } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator();
const Tabs = () => {

  return (
    <Tab.Navigator screenOptions={{ headerShown: false, lazyLoad: true,
      tabBarStyle: [{
          position: 'absolute',
          height: 80, // Set the desired height
          paddingHorizontal: 20,
      },], }}>
        <Tab.Screen name ="Dashboard" component={DasboardScreen}options={{
        tabBarIcon: ({ focused }) => (

          <MaterialIcons name="dashboard" size={24}color={focused ? '#F18404' : '#CBCBCB'} /> 
        ),
      }} />
      <Tab.Screen name="Pending" component={PendingScreen} options={{
        tabBarIcon: ({ focused }) => (

          <AntDesign name="warning" size={24} color={focused ? '#F18404' : '#CBCBCB'} />
        ),
      }} />

      <Tab.Screen name="Inprogress" component={inprogressScreen} options={{
        tabBarIcon: ({ focused }) => (

          <MaterialCommunityIcons name="progress-check" size={24} color={focused ? '#F18404' : '#CBCBCB'} />
        ),
      }}/>
      <Tab.Screen name="Completed" component={CompletedScreen} options={{
        tabBarIcon: ({ focused }) => (

          <AntDesign name="star" size={24}color={focused ? '#F18404' : '#CBCBCB'}  /> 
        ),
      }}/>
    </Tab.Navigator>

  );
};

export default Tabs;

