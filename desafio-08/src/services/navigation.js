import { NavigationActions } from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function goBack(options) {
  navigator.dispatch(NavigationActions.back(options));
}

export default {
  goBack,
  navigate,
  setTopLevelNavigator,
};
