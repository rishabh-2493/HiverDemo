import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../Container/Home";
import Splash from "../Container/Splash";

const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName={'Splash'}
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
}
