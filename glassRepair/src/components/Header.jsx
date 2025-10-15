import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Titans Auto Glass</div>
      <nav className="nav-menu">
        <a href="#home" className="active">Inicio</a>
        <a href="#Servicios">Servicios</a>
        <a href="#Contacto">Contacto</a>
      </nav>
      <button className="login-button">LOGIN</button>
    </header>
  );
};

export default Header;