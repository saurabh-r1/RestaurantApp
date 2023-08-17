import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import HeaderImage from '../../assets/HeadImg.jpg';
import './Header.css';

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className="main-image">
        <img src={HeaderImage} alt='dinig room' />
      </div>
    </Fragment>
  );
};

export default Header;