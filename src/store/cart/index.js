import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      console.log('action.payload', action.payload);
      return [...state, { ...action.payload, id: state.length + 1 }]},
    remove:
      (state, action) =>
        state.filter(product => product.id !== action.payload.id)
          .map((product, idx) => {
            return { ...product, id: idx + 1 };
          })
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;


// function cartReducer(state = initialState, action) {
//   let { type, payload } = action;

//   switch (type) {
//     case 'CART_ADD':
//       return [...state, { ...payload, id: state.length + 1 }];
//     case 'CART_DELETE': {
//       const modifiedCard = (() => {
//         const array = state.filter(product => product.id !== payload.id);
//         return array.map((product, idx) => {
//           return { ...product, id: idx + 1 };
//         })
//       })();
//       return modifiedCard;
//     }
//     default:
//       return state;
//   }
// }

// export default cartReducer;
