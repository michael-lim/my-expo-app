import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen.js';
import SettingsScreen from '../screens/SettingsScreen.js';
import AboutScreen from '../screens/AboutScreen.js';
import GraphScreen from '../screens/GraphScreen.js';
import CalendarScreen from '../screens/CalendarScreen.js';
import NoSmokingScreen from '../screens/NoSmokingScreen.js';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Graph" component={GraphScreen} />
      <Tab.Screen name="NoSmoking" component={NoSmokingScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;