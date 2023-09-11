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
    flex: 1,
    backgroundColor: isDarkMode ? '#333333' : '#e6e6e6',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        flexGrow={1}
        {...backgroundStyle}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
