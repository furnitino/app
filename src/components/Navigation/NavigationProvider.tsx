import type {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';

type Props = {
  children: ReactNode;
};

export default function NavigationProvider({children}: Props) {
  return <NavigationContainer>{children}</NavigationContainer>;
}
