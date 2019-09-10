import { all, call, put, takeLatest, select } from 'redux-saga/effects';

import api from '../../../services/api';
import { formatPrice } from '../../../util/format';
import {
  addToCartSuccess,
  updateAmountSuccess,
} from '../../../store/modules/cart/actions';

function* addToCart({ productId }) {
  const product = yield select(store => {
    return store.cart.find(p => p.id === productId);
  });

  const stockResponse = yield call(api.get, `/stock/${productId}`);

  const { amount: stock } = stockResponse.data;

  if (product && product.amount === stock) {
    return;
  }

  if (product) {
    yield put(updateAmountSuccess(productId, product.amount + 1));
  } else {
    const response = yield call(api.get, `/products/${productId}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
