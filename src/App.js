import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {
  ScrollView,
  Text,
  View
} from 'react-native';
import Router from './router'

const App = () => {
  return(
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
  )
};

export default App;