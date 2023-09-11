/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {SafeAreaProvider} from 'react-native-safe-area-context';
import NavigationProvider from './components/Navigation/NavigationProvider';
import NavigationBottomTabs from './components/Navigation/NavigationBottomTabs';

export default function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationProvider>
        <NavigationBottomTabs />
      </NavigationProvider>
    </SafeAreaProvider>
  );
}
