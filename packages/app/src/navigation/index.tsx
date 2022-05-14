import {
  NavigationContainer,
  RouteProp,
  getFocusedRouteNameFromRoute
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Home from '../screens/Home';
import NotFound from '../screens/NotFound';
import { MainStackParamList, RootStackParamList } from '../typings';
import { MathNavigator, TextNavigator } from './Stacks';

const getTextHeaderTitle = (route: RouteProp<MainStackParamList, 'Text'>) => {
  const focusedRoute = getFocusedRouteNameFromRoute(route) ?? 'Text';

  switch (focusedRoute) {
    case 'Main':
      return 'Text';
    default:
      return focusedRoute;
  }
};

const getMathHeaderTitle = (route: RouteProp<MainStackParamList, 'Math'>) => {
  const focusedRoute = getFocusedRouteNameFromRoute(route) ?? 'Math';

  switch (focusedRoute) {
    case 'Main':
      return 'Math';
    default:
      return focusedRoute;
  }
};

const MainStack = createNativeStackNavigator<MainStackParamList>();
const MainNavigator: React.FC = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen
      name="Text"
      component={TextNavigator}
      options={({ route }) => ({
        headerTitle: getTextHeaderTitle(route)
      })}
    />
    <MainStack.Screen
      name="Math"
      component={MathNavigator}
      options={({ route }) => ({
        headerTitle: getMathHeaderTitle(route)
      })}
    />
  </MainStack.Navigator>
);

const Stack = createNativeStackNavigator<RootStackParamList>();
const RootNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Root" component={MainNavigator} />
    <Stack.Screen
      name="NotFound"
      component={NotFound}
      options={{ title: 'Oops!' }}
    />
  </Stack.Navigator>
);

const Navigation = () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
);

export default Navigation;
