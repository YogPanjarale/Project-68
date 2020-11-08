import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation'
//local 
import fb from './screens/fb';
import In from './screens/in';

// const Tab = ();


export default class App extends React.Component {
  render() {
    return (
      
      <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  fb: { screen: fb },
  in: { screen: In },
},)
const AppContainer = createAppContainer(TabNavigator);
//local
