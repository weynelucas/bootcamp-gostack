import { produce } from 'immer';

const initialState = [];

export default function cart(state = initialState, action) {
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

    case '@cart/CHECKOUT_SUCCESS': {
      return initialState;
    }

    case '@cart/REMOVE': {
      const { productId: id } = action;
      return state.filter(p => p.id !== id);
    }

    default:
      return state;
  }
}
