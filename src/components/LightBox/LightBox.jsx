import { ReactComponent as IconClose } from '../../assets/images/icon-close.svg';
import { ReactComponent as IconNext } from '../../assets/images/icon-next.svg';
import { ReactComponent as IconPrev } from '../../assets/images/icon-previous.svg';
import { images } from '../../constants/images';
import './LightBox.scss';

const LightBox = ({ idx, changeIdx, imagesList, closeFn }) => {
  const length = imagesList.length;

  return (
    <>
      <div className="lightbox__overlay" />
      <div className="lightbox-container">
        <div className="lightbox-center">
          <div className="btn-container__close">
            <button type="button" className="btn-close" onClick={closeFn}>
              <IconClose />
            </button>
          </div>
          <div className="lightbox-selected-image-container">
            <div className="btn-container__gallery-lightbox">
              <button
                type="button"
                className="btn-prev"
                onClick={changeIdx(idx === 0 ? length - 1 : idx - 1)}
              >
                <IconPrev />
              </button>
              <button
                type="button"
                className="btn-next"
                onClick={changeIdx((idx + 1) % length)}
              >
                <IconNext />
              </button>
            </div>
            <div className="lightbox-selected-image">
              <img src={images[`prod${idx + 1}`]} alt="product" />
            </div>
          </div>
          <div className="product-details__images">
            {imagesList.map((_, mapIdx) => (
              <div
                key={`thumbnail-${mapIdx}`}
                className={`product-details__thumbnail${
                  idx === mapIdx ? ' active' : ''
                }`}
                onClick={changeIdx(mapIdx)}
              >
                <img
                  src={images[`prod${mapIdx + 1}Thumb`]}
                  alt="product thumbnail"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LightBox;
