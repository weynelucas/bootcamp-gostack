import { all } from 'redux-saga/effects';

import cartSaga from './cart/sagas';

export default function* rootSaga() {
  yield all([cartSaga]);
}
