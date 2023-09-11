import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenHome from '../Screen/ScreenHome';
import options from './NavigationStack.options';

const Stack = createNativeStackNavigator();

export default function NavigationHome() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...options,
      }}>
      <Stack.Screen name="Home" component={ScreenHome} />
    </Stack.Navigator>
  );
}
