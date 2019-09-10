export function addToCart(product) {
  return {
    type: '@cart/ADD',
    product,
  };
}

export function removeFromCart(productId) {
  return {
    type: '@cart/REMOVE',
    productId,
  };
}

export function updateAmmount(productId, ammount) {
  return {
    type: '@cart/UPDATE_QUANTITY',
    productId,
    ammount,
  };
}
