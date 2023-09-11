import {StyleSheet} from 'react-native';
import {StackY, Text} from '@viktorvojtek/react-native-simple-components';

export default function ScreenAR() {
  return (
    <StackY
      alignItems="center"
      justifyContent="center"
      {...StyleSheet.absoluteFillObject}>
      <Text>AR</Text>
    </StackY>
  );
}
