import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <StatusBar barStyle="light-content" backgroundColor="#141419" />
        <Routes />
      </>
    </Provider>
  );
};

export default App;
