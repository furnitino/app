import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenAR from '../Screen/ScreenAR';

const Navigation = createNativeStackNavigator();

export default function NavigationARStack() {
  return (
    <Navigation.Navigator>
      <Navigation.Screen name="AR" component={ScreenAR} />
    </Navigation.Navigator>
  );
}
