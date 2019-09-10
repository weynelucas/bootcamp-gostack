import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { addToCartSuccess } from '../../../store/modules/cart/actions';

function* addToCart({ productId }) {
  const response = yield call(api.get, `/products/${productId}`);

  const product = {
    ...response.data,
    amount: 1,
  };

  yield put(addToCartSuccess(product));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
