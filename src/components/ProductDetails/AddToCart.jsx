import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { images } from '../../constants/images';
import { ReactComponent as CartLogo } from '../../assets/images/icon-cart.svg';
import { cartActions } from '../../actions';

const AddToCart = ({ productId }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const cartItem = useSelector((store) => {
    if (store.cart.length !== 0) {
      const idx = store.cart.findIndex((item) => item.id === productId);
      if (idx !== -1) {
        return store.cart[idx];
      }
      return null;
    }
    return null;
  });

  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, []);

  const increaseHandler = () => {
    setQuantity((state) => state + 1);
  };

  const decreaseHandler = () => {
    if (quantity > 0) {
      setQuantity((state) => state - 1);
    }
  };

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart({ id: productId, quantity }));
  };

  return (
    <div className="product-details__cta">
      <div className="quantity-counter">
        <button
          type="button"
          className="quantity-counter__decrement"
          onClick={decreaseHandler}
        >
          <img src={images.iconMinus} alt="decrease quantity" />
        </button>
        <div className="quantity">{quantity}</div>
        <button
          type="button"
          className="quantity-counter__increment"
          onClick={increaseHandler}
        >
          <img src={images.iconPlus} alt="increase quantity" />
        </button>
      </div>
      <button onClick={addToCartHandler} className="product-details__add-to-cart">
        <CartLogo />
        <span>Add to cart</span>
      </button>
    </div>
  );
};

export default AddToCart;
