export function addProduct(product) {
  return {
    type: '@cart/ADD',
    product,
  }
}
