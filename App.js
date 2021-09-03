/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Screen from './src/navigation/index';
const App = () => {
  return (
    <NavigationContainer>
      <Screen />
    </NavigationContainer>
  );
};

export default App;
