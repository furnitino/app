import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenProfile from '../Screen/ScreenProfile';

const Stack = createNativeStackNavigator();

export default function NavigationProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ScreenProfile} />
    </Stack.Navigator>
  );
}
