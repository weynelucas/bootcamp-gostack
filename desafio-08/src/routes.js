import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

export default createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: {
        headerTitle: <Header />,
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#141419',
        },
      },
    },
  ),
);
