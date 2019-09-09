import produce from 'immer';

export default function cart(state=[], action) {
  switch (action.type) {
    case '@cart/add':
      return produce(state, draftState => {
        const { product } = action;
        draftState.push(product);
      });

    default:
      return state;
  }
}
