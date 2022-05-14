import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import FactorsOf from '../screens/Math/FactorsOf';
import GCF from '../screens/Math/GCF';
import GenerateNumbers from '../screens/Math/GenerateNumbers';
import Math from '../screens/Math/Math';
import ProductSum from '../screens/Math/ProductSum';
import Space from '../screens/Text/Space';
import Text from '../screens/Text/Text';
import WTF from '../screens/Text/WTF';
import { MathStackParamList, TextStackParamList } from '../typings';

const TextStack = createNativeStackNavigator<TextStackParamList>();
export const TextNavigator: React.FC = () => (
  <TextStack.Navigator screenOptions={{ headerShown: false }}>
    <TextStack.Screen name="Main" component={Text} />
    <TextStack.Screen name="WTF" component={WTF} />
    <TextStack.Screen name="Space" component={Space} />
  </TextStack.Navigator>
);

const MathStack = createNativeStackNavigator<MathStackParamList>();
export const MathNavigator: React.FC = () => (
  <MathStack.Navigator screenOptions={{ headerShown: false }}>
    <MathStack.Screen name="Main" component={Math} />
    <MathStack.Screen name="GCF" component={GCF} />
    <MathStack.Screen name="Factors Of" component={FactorsOf} />
    <MathStack.Screen name="Product Sum" component={ProductSum} />
    <MathStack.Screen name="Generate Numbers" component={GenerateNumbers} />
  </MathStack.Navigator>
);
