/* Cart */
/* 
  cart = []
*/

const cartDefaultState = [];

/* Reducer */
const cartReducer = (state = cartDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      if (action.item?.id) {
        const idx = state.findIndex((item) => item.id === action.item.id);
        if (idx === -1) {
          if (action.item?.quantity) {
            return [...state, action.item];
          }
          return [...state, { ...action.item, quantity: 1 }];
        } else {
          return [
            ...state.slice(0, idx),
            {
              ...state[idx],
              quantity: action.item.quantity || state[idx].quantity + 1,
            },
            ...state.slice(idx + 1),
          ];
        }
      }
      break;
    case 'INCREASE_QTY':
      if (action.itemId) {
        const idx = state.findIndex((item) => item.id === action.itemId);
        if (idx === -1) {
          return state;
        }
        return [
          ...state.slice(0, idx),
          { ...state[idx], quantity: state[idx].quantity + 1 },
          ...state.slice(idx + 1),
        ];
      }
      break;
    case 'DECREASE_QTY':
      if (action.itemId) {
        const idx = state.findIndex((item) => item.id === action.itemId);
        if (idx === -1) {
          return state;
        }
        
        if (state[idx].quantity > 1) {
          return [
            ...state.slice(0, idx),
            {
              ...state[idx],
              quantity: state[idx].quantity - 1,
            },
            ...state.slice(idx + 1),
          ];
        }

        if (state[idx].quantity === 1) {
          return state.filter((cartItem) => cartItem.id !== action.itemId);
        }
      }
      break;
    case 'DELETE_ITEM':
      return state.filter((cartItem) => cartItem.id !== action.itemId);
    default:
      return state;
  }
};

export default cartReducer;
