export function addToCartRequest(productId) {
  return {
    type: '@cart/ADD_REQUEST',
    productId,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function updateAmmountRequest(productId, ammount) {
  return {
    type: '@cart/UPDATE_AMMOUNT_REQUEST',
    productId,
    ammount,
  };
}

export function updateAmmountSuccess(productId, ammount) {
  return {
    type: '@cart/UPDATE_AMMOUNT_SUCCESS',
    productId,
    ammount,
  };
}

export function removeFromCart(productId) {
  return {
    type: '@cart/REMOVE_REQUEST',
    productId,
  };
}
