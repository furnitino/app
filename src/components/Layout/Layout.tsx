import type {ReactNode} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from '@viktorvojtek/react-native-simple-components';

type Props = {
  children: ReactNode;
};

export default function Layout({children}: Props) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'dark-grey' : 'grey',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        {...backgroundStyle}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
