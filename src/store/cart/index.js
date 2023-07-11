const initialState = [];

function cartReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'CART_ADD':
      return [...state, { ...payload, id: state.length + 1 }];
    case 'CART_DELETE': {
      const modifiedCard = (() => {
        const array = state.filter(product => product.id !== payload.id);
        return array.map((product, idx) => {
          return { ...product, id: idx + 1 };
        })
      })();
      return modifiedCard;
    }
    default:
      return state;
  }
}

export default cartReducer;
