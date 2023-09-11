import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenAR from '../Screen/ScreenAR';
import options from './NavigationStack.options';

const Navigation = createNativeStackNavigator();

export default function NavigationARStack() {
  return (
    <Navigation.Navigator
      screenOptions={{
        ...options,
      }}>
      <Navigation.Screen name="AR" component={ScreenAR} />
    </Navigation.Navigator>
  );
}
