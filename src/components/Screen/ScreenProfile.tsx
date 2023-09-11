import {StackY, Text} from '@viktorvojtek/react-native-simple-components';
import Layout from '../Layout';

export default function ScreenProfile() {
  return (
    <Layout>
      <StackY flexGrow={1} alignItems="center" justifyContent="center">
        <Text>Profile</Text>
      </StackY>
    </Layout>
  );
}
