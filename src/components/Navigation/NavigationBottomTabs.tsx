import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationHome from './NavigationHomeStack';
import NavigationARStack from './NavigationARStack';
import NavigationProfileStack from './NavigationProfile';

const Tab = createBottomTabNavigator();

export default function NavigationBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeStack" component={NavigationHome} />
      <Tab.Screen name="ARStack" component={NavigationARStack} />
      <Tab.Screen name="ProfileStack" component={NavigationProfileStack} />
    </Tab.Navigator>
  );
}
