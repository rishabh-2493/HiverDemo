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
 import {Provider} from 'react-redux';
import Store from './src/Redux/Store';

 const App = function () {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <HomeStack/>
      </NavigationContainer>
    </Provider>
  )
}

export default App;