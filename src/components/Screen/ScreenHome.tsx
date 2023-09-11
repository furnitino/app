import {StackY, Text} from '@viktorvojtek/react-native-simple-components';
import Layout from '../Layout';

export default function ScreenHome() {
  return (
    <Layout>
      <StackY flexGrow={1} alignItems="center" justifyContent="center">
        <Text>Home</Text>
      </StackY>
    </Layout>
  );
}
