/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import HomeStack from "./src/Routes/Routes"
 import { Platform } from 'react-native';
 
 const App = function () {
  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  )
}

export default App;