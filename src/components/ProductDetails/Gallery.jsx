import { useCallback, useState } from 'react';

import { ReactComponent as IconNext } from '../../assets/images/icon-next.svg';
import { ReactComponent as IconPrev } from '../../assets/images/icon-previous.svg';
import { images } from '../../constants/images';
import LightBox from '../LightBox/LightBox';

const Gallery = ({ imagesList }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const imageHandler = useCallback((idx) => () => setSelectedIdx(idx), []);

  const openLightboxHandler = () => {
    setIsLightboxOpen(true);
  };

  const closeLightboxHandler = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className="product-details__images-container">
      {isLightboxOpen && (
        <LightBox
          idx={selectedIdx}
          changeIdx={imageHandler}
          closeFn={closeLightboxHandler}
          imagesList={imagesList}
        />
      )}
      <div className="product-details__selected-image-container">
        <div className="btn-container__gallery">
          <button
            type="button"
            className="btn-prev"
            onClick={imageHandler(
              selectedIdx === 0 ? imagesList.length - 1 : selectedIdx - 1
            )}
          >
            <IconPrev />
          </button>
          <button
            type="button"
            className="btn-next"
            onClick={imageHandler((selectedIdx + 1) % imagesList.length)}
          >
            <IconNext />
          </button>
        </div>
        <div
          className="product-details__selected-image"
          onClick={openLightboxHandler}
        >
          <img src={images[`prod${selectedIdx + 1}`]} alt="product" />
        </div>
      </div>
      <div className="product-details__images">
        {imagesList.map((_, idx) => (
          <div
            key={`thumbnail-${idx}`}
            className={`product-details__thumbnail${
              selectedIdx === idx ? ' active' : ''
            }`}
            onClick={imageHandler(idx)}
          >
            <img src={images[`prod${idx + 1}Thumb`]} alt="product thumbnail" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
