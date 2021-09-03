import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../scenes/home/index';
import PlayerHome from '../scenes/play/index';
import {PrimaryTitle} from '../components/atoms/navs';
import {PRIMARY} from '../style/colors';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: PRIMARY,
          height: 60,
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <PrimaryTitle />,
          // },
        }}
      />
      <Stack.Screen
        name="Play"
        component={PlayerHome}
        options={{
          headerTitle: () => <PrimaryTitle />,
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
