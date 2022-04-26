import { useState } from 'react';
import { useSelector } from 'react-redux';

import { images } from '../../constants/images';
import Cart from '../Cart/Cart';
import './Navbar.scss';

const links = [
  {
    title: 'collections',
    link: '/collections',
  },
  {
    title: 'men',
    link: '/men',
  },
  {
    title: 'women',
    link: '/women',
  },
  {
    title: 'about',
    link: '/about',
  },
  {
    title: 'contact',
    link: '/contact',
  },
];

const Navbar = () => {
  const [cartShown, setCartShown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const itemsLength = useSelector((store) => {
    let length = 0;
    const cartProducts = store.cart;
    if (cartProducts.length === 0) {
      return 0;
    }
    for (let item of cartProducts) {
      length += item.quantity;
    }

    return length;
  });

  const showCart = () => {
    setCartShown((state) => !state);
  };

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-links-container__small" onClick={openMenu}>
          <img src={images.iconMenu} alt="open menu" />
        </div>
        {menuOpen && (
          <>
          <div className='nav-menu__overlay' />
          <div className="nav-menu__container">
            <button className="btn-close" onClick={closeMenu}>
              <img src={images.iconClose} alt="close menu" />
            </button>
            <ul className="nav-links">
              {links.map((item, idx) => (
                <li key={`navlink-${idx}`}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          </>
        )}
        <div className="logo-container">
          <img src={images.logo} alt="logo" className="logo" />
        </div>
        <div className="nav-links-container">
          <ul className="nav-links">
            {links.map((item, idx) => (
              <li key={`navlink-${idx}`}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="profile-container">
        <div className="cart-container">
          <button className="cart" onClick={showCart}>
            <img src={images.iconCart} alt="cart" />
          </button>
          {itemsLength !== 0 && (
            <div className="badge__cart-items-count">{itemsLength}</div>
          )}
        </div>
        <div className="avatar-container">
          <img src={images.avatar} alt="avatar" />
        </div>
      </div>
      {cartShown && <Cart />}
    </nav>
  );
};

export default Navbar;
