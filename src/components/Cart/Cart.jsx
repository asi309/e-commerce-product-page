import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../actions';
import { images } from '../../constants/images';

import './Cart.scss';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart);
  const cartProducts = useSelector((store) => {
    const products = [];
    for (let item of cartItems) {
      if (item) {
        const product = store.products.byId[item.id];
        if (product) {
          products.push({
            ...product,
            quantity: item.quantity || 1,
          });
        }
      }
    }

    return products;
  });

  const deleteHandler = useCallback(
    (id) => () => dispatch(cartActions.deleteFromCart(id)),
    []
  );

  return (
    <div className="cart">
      <header className="heading">Cart</header>
      <div className="cart-items-container">
        {cartProducts.length !== 0 ? (
          <ul className="cart-items__list">
            {cartProducts.map((cartProduct) => (
              <li className="cart-item" key={`product-${cartProduct.id}`}>
                <div className="cart-item__header">
                  <div className="cart-item__thummbnail-container">
                    <img src={images.prod1Thumb} alt="product" />
                  </div>
                  <div className="cart-item__contents">
                    <p>{cartProduct.title}</p>
                    <p>
                      {`$${cartProduct?.offerPrice || cartProduct.price} x ${
                        cartProduct.quantity
                      }`}{' '}
                      <span className="sub-total">
                        {`$${(
                          (cartProduct?.offerPrice || cartProduct.price) *
                          cartProduct.quantity
                        ).toFixed(2)}`}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="button-container">
                  <button
                    type="button"
                    className="del-btn"
                    onClick={deleteHandler(cartProduct.id)}
                  >
                    <img src={images.iconDelete} alt="Delete" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="cart-items__empty">Your cart is empty</p>
        )}
        {cartProducts.length !== 0 && (
          <button type="button" className="cart-btn__checkout">
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
