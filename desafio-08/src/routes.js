import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from './pages/Home';
import Cart from './pages/Cart';

export default createAppContainer(
  createStackNavigator({
    Home,
    Cart,
  }),
);
