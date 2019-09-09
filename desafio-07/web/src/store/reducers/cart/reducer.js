import produce from 'immer';

export default function cart(state=[], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draftState => {
        const { product } = action;
        const productIndex = draftState.findIndex(p => p.id === product.id);

        if (productIndex !== -1) {
          draftState[productIndex].ammount += 1;
        } else {
          draftState.push({
            ...product,
            ammount: 1,
          });
        }
      });

    case '@cart/UPDATE_QUANTITY':
      return produce(state, draftState => {
        const { productId, ammount } = action;
        const productIndex = draftState.findIndex(p => p.id === productId);

        if (productIndex !== -1) {
          if (ammount > 0) {
            draftState[productIndex].ammount = ammount;
          } else {
            draftState.splice(productIndex, 1);
          }
        }
      });

    default:
      return state;
  }
}
