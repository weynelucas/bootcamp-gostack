import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import colors from './styles/colors';

export default createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: navigation => ({
        headerTitle: <Header {...navigation} />,
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.dark,
        },
      }),
    },
  ),
);
