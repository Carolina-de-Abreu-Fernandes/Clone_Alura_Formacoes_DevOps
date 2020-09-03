import React from 'react';
import './style.css';
import Logo from '../../assets/img/Logo.jpg';
import Profile2 from '../../assets/img/Profile2.jpg';
import LinkedIn from '../../assets/img/linkedin.png';
function Header() {
  return (
    <div>
      <div className="header">
        <img src={Logo} alt="Logo" />
        <div className="linkedIn">
          <a href="https://www.linkedin.com/in/carolina-de-abreu-fernandes/">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="body">
        <h2>Seja Bem-Vindo(a)!</h2>
        <div className="profile">
          <img src={Profile2} alt="Profile" />
          <h3>Carol</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
