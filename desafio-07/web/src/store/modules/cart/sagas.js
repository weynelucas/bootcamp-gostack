import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { formatPrice } from '../../../util/format';
import {
  addToCartSuccess,
  updateAmountSuccess,
  removeFromCart,
} from '../../../store/modules/cart/actions';

function* addToCart({ productId }) {
  const product = yield select(store =>
    store.cart.find(p => p.id === productId)
  );

  const response = yield call(api.get, `/stock/${productId}`);

  const { amount: stock } = response.data;

  if (product && product.amount === stock) {
    toast.error('Quantidade solicitada fora de estoque.');
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

function* updateAmount({ productId, amount }) {
  if (amount === 0) {
    yield put(removeFromCart(productId));
    return;
  }

  const product = yield select(store =>
    store.cart.find(p => p.id === productId)
  );

  const response = yield call(api.get, `/stock/${productId}`);

  const { amount: stock } = response.data;

  if (product && amount > stock) {
    toast.error('Quantidade solicitada fora de estoque.');
    return;
  }

  yield put(updateAmountSuccess(productId, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
