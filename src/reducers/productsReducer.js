import { combineReducers } from '@reduxjs/toolkit';
/*  Products */
/* 
  products = {
    byId: {},
    allIds: []
  }
*/

const productsDefaultState = {
  byId: {},
  allIds: [],
};

/* Reducer */
const productsById = (state = productsDefaultState.byId, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        [action.payload.prodId]: {
          id: action.payload.prodId,
          title: action.payload.product.title,
          description: action.payload.product.description,
          price: action.payload.product.price,
          offerPrice: action.payload.product.offerPrice
        },
      };
    case 'DELETE_PRODUCT':
      const productIdToDelete = action.payload.prodId;
      const stateAfterDelete = { ...state };
      delete stateAfterDelete[productIdToDelete];

      return stateAfterDelete;
    default:
      return state;
  }
};

const allProducts = (state = productsDefaultState.allIds, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.payload.prodId];
    case 'DELETE_PRODUCT':
      return state.filter((prodId) => prodId !== action.payload.prodId);
    default:
      return state;
  }
};

const productsReducer = combineReducers({
  byId: productsById,
  allIds: allProducts,
});

export default productsReducer;
