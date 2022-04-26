import { useSelector } from 'react-redux';

import AddToCart from './AddToCart';
import Gallery from './Gallery';
import './ProductDetails.scss';

const imagesList = [1, 2, 3, 4]; // images list to be taken from data in actual app

const ProductDetails = () => {
  const product = useSelector((store) => store.products.byId['product1']);

  return (
    <div className="product-details__container">
      <Gallery imagesList={imagesList} />
      <div className="product-details__details-container">
        <p className="company">sneaker company</p>
        <h1 className="product-title">{product.title}</h1>
        <p className="product-description">{product.description}</p>
        <div className="product-price">
          {product?.offerPrice && (
            <>
              <div className="product-price__offer">
                <div className="product-price__offer-price">
                  ${product.offerPrice.toFixed(2)}
                </div>
                <div className="product-price__offer-discount">
                  {Math.round((product.offerPrice / product.price) * 100)}%
                </div>
              </div>
              <div className="product-price__original-price">
                ${product.price.toFixed(2)}
              </div>
            </>
          )}
          {!product?.offerPrice && (
            <div className="product-price__price">${product.price.toFixed(2)}</div>
          )}
        </div>
        <AddToCart productId={product.id} />
      </div>
    </div>
  );
};

export default ProductDetails;
