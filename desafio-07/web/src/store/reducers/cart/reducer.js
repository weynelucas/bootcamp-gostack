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

    default:
      return state;
  }
}
