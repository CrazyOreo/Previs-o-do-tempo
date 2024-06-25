import React from 'react';
import './Header.css'; // Certifique-se de que este arquivo existe

function Header(props) {
  return (
    <div className="Header">
      <div className="Header__logo">
        {/* Aqui pode ser adicionada a logo */}
      </div>
      <div className="Header__menu">
        <h3>teste</h3>
        <a href="">Home</a>
        <a href="">Sobre</a>
      </div>
    </div>
  );
}

export default Header;
