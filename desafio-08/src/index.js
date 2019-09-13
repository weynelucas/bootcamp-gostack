import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import NavigationService from './services/navigation';
import Routes from './routes';
import store from './store';
import colors from './styles/colors';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
        <Routes
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </>
    </Provider>
  );
};

export default App;
