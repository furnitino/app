import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenHome from '../Screen/ScreenHome';

const Stack = createNativeStackNavigator();

export default function NavigationHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ScreenHome} />
    </Stack.Navigator>
  );
}
