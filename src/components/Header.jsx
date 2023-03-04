import React from 'react';


function Header({logoPath}) {
  return (
    <header className="header">
      <img className="header__logo" src={logoPath} alt="Логотип Место Россия"/>
    </header>
  );
}

export default Header;