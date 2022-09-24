import React from 'react';
import logo from './../../assets/images/common/logo.png';
import './Header.scss';
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <a className="header__logo" href="/">
            <img src={logo} alt="dkvina"></img>
          </a>
          <div className="header__buger">
            <span className="icon icon-hambuger"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
