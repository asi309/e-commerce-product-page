const addToCart = (item) => ({
  type: 'ADD_ITEM',
  item,
});

const increaseQuantity = (itemId) => ({
  type: 'INCREASE_QTY',
  itemId,
});

const decreaseQuantity = (itemId) => ({
  type: 'DECREASE_QTY',
  itemId,
});

const deleteFromCart = (itemId) => ({
  type: 'DELETE_ITEM',
  itemId,
});

const actions = {
  addToCart,
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
};

export default actions;
