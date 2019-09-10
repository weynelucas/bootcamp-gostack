import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draftState => {
        const { product } = action;
        const productIndex = draftState.findIndex(p => p.id === product.id);

        if (productIndex !== -1) {
          draftState[productIndex].amount += 1;
        } else {
          draftState.push({
            ...product,
            amount: 1,
          });
        }
      });

    case '@cart/REMOVE':
      return produce(state, draftState => {
        const { productId } = action;

        const productIndex = draftState.findIndex(p => p.id === productId);

        if (productIndex !== -1) {
          draftState.splice(productIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draftState => {
        const { productId, amount } = action;
        const productIndex = draftState.findIndex(p => p.id === productId);

        if (productIndex !== -1) {
          if (amount > 0) {
            draftState[productIndex].amount = amount;
          } else {
            draftState.splice(productIndex, 1);
          }
        }
      });

    default:
      return state;
  }
}
