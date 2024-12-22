import React, { useState } from 'react';
import './Navbar.css';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About Me', id: 'about-me' },
    { name: 'Projects', id: 'projects' },
    { name: 'Roles and Responsibilities', id: 'roles' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Skills', id: 'skills' },
    { name: 'Share', id: 'share' },
  ];

  const handleScroll = (id) => {
    setIsMenuOpen(false); // Close menu on click
    if (id === 'share') {
      handleShare();
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Check out my portfolio!',
          text: 'Here is my personal portfolio showcasing my work and skills. Take a look!',
          url: window.location.href,
        })
        .then(() => console.log('Share successful'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Web Share API is not supported in your browser. Copy the link manually!');
    }
  };

  return (
    <nav id = 'header' className="navbar">
      {/* Ruban */}
      <a href="#home" className="Ruban" aria-label="Go to Home">
        Ruban
      </a>

      {/* Menu Icon */}
      <img
        src={isMenuOpen ? menu_close : menu_open}
        alt="Menu toggle"
        className="menu-icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      {/* Navbar Menu */}
      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="nav-item"
            onClick={() => handleScroll(item.id)}
            role="button"
            tabIndex={0}
          >
            {item.name}
          </li>
        ))}
        <li
          className="nav-connect"
          onClick={() => handleScroll('contact')}
          role="button"
          tabIndex={0}
        >
          Connect with me
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
