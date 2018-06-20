import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import StartScreen from './screens/Home'
import { ImageScreen, GreyImageScreen, BlurredImageScreen } from './screens/Image'

// ************* Status Bar Stuff ***************

StatusBar.setBarStyle('light-content');

// ************** Root Nav ****************

const RootNavigator = createStackNavigator({
  Home: StartScreen,
  Image: ImageScreen,
  GreyImage: GreyImageScreen,
  BlurredImage: BlurredImageScreen
}, {
  navigationOptions: {
    headerStyle: {
        backgroundColor: '#388E3C'
    },
    headerTintColor: '#ffffff'
  }
});

export default RootNavigator;
