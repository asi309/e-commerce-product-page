const addProduct = (prodId, product) => ({
  type: 'ADD_PRODUCT',
  payload: {
    prodId,
    product,
  },
});

const deleteProduct = (prodId) => ({
  type: 'DELETE_PRODUCT',
  payload: {
    prodId,
  },
});

const actions = {
  addProduct,
  deleteProduct,
};

export default actions;
