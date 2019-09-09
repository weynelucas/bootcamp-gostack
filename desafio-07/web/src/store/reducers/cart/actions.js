export function addProduct(product) {
  return {
    type: '@cart/ADD',
    product,
  }
}

export function updateAmmount(productId, ammount) {
  return {
    type: '@cart/UPDATE_QUANTITY',
    productId,
    ammount,
  }
}
