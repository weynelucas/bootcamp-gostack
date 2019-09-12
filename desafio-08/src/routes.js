import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
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
