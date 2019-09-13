import { produce } from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS': {
      const { product } = action;

      return produce(state, draft => {
        draft.push(product);
      });
    }

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      const { productId: id, amount } = action;
      return produce(state, draft => {
        const product = draft.find(p => p.id === id);

        if (product) {
          product.amount = amount;
        }
      });
    }

    case '@cart/REMOVE': {
      const { productId: id } = action;
      return state.filter(p => p.id !== id);
    }

    default:
      return state;
  }
}
