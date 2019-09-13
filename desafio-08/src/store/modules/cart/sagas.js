import { put, call, takeLatest, all, select } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '../../../services/api';
import {
  addToCartSuccess,
  updateAmountSuccess,
  removeFromCart,
  checkoutSuccess,
} from './actions';
import { formatPrice } from '../../../util/format';
import NavigationService from '../../../services/navigation';

function* addToCart({ productId }) {
  const cartItem = yield select(store =>
    store.cart.find(it => it.id === productId),
  );

  const stockResponse = yield call(api.get, `/stock/${productId}`);
  const { amount } = stockResponse.data;

  if (!amount || (cartItem && cartItem.amount >= amount)) {
    Alert.alert('Quantidade solicitada fora de estoque.');
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
    Alert.alert('Quantidade solicitada fora de estoque.');
    return;
  }
  if (productAmount <= 0) {
    yield put(removeFromCart(productId));
  } else {
    yield put(updateAmountSuccess(productId, productAmount));
  }
}

function* checkout() {
  const products = yield select(store => store.cart);

  const stockResponse = yield call(api.get, '/stock', {
    params: {
      id: products.map(p => p.id),
    },
  });

  const stocks = stockResponse.data.reduce(
    (amount, stock) => ({ ...amount, [stock.id]: stock.amount }),
    {},
  );

  yield all(
    products.map(p =>
      call(api.patch, `/stock/${p.id}`, {
        amount: stocks[p.id] - p.amount,
      }),
    ),
  );

  yield put(checkoutSuccess());
  NavigationService.goBack();
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
  takeLatest('@cart/CHECKOUT_REQUEST', checkout),
]);
