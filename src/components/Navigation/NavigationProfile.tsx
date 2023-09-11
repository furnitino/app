import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenProfile from '../Screen/ScreenProfile';
import options from './NavigationStack.options';

const Stack = createNativeStackNavigator();

export default function NavigationProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...options,
      }}>
      <Stack.Screen name="Profile" component={ScreenProfile} />
    </Stack.Navigator>
  );
}
