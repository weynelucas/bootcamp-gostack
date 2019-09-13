import { put, call, takeLatest, all, select } from 'redux-saga/effects';
import api from '../../../services/api';
import {
  addToCartSuccess,
  updateAmountSuccess,
  removeFromCart,
} from './actions';
import { formatPrice } from '../../../util/format';
import NavigationService from '../../../services/navigation';

function* addToCart({ productId }) {
  const cartItem = yield select(store =>
    store.cart.find(c => c.id === productId),
  );

  const stockResponse = yield call(api.get, `/stock/${productId}`);
  const { amount } = stockResponse.data;

  if (cartItem && cartItem.amount >= amount) {
    return;
  }

  if (cartItem) {
    yield put(updateAmountSuccess(productId, cartItem.amount + 1));
  } else {
    const productResponse = yield call(api.get, `/products/${productId}`);
    const product = productResponse.data;

    yield put(
      addToCartSuccess({
        ...product,
        amount: 1,
        priceFormatted: formatPrice(product.price),
      }),
    );
  }

  NavigationService.navigate('Cart');
}

function* updateAmount({ productId, amount: productAmount }) {
  const stockResponse = yield call(api.get, `/stock/${productId}`);
  const { amount: stockAmount } = stockResponse.data;

  if (productAmount > stockAmount) {
    // eslint-disable-next-line no-useless-return
    return;
  }
  if (productAmount <= 0) {
    yield put(removeFromCart(productId));
  } else {
    yield put(updateAmountSuccess(productId, productAmount));
  }
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
