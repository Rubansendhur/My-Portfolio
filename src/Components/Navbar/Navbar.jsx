import React from 'react';
import './Navbar.css';

const Navbar = () => {
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
    if (id === 'share') {
      handleShare(); // Trigger sharing logic for the "Share" button
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Check out my portfolio!',
          text: 'Here is my personal portfolio showcasing my work and skills. Take a look!',
          url: window.location.href, // Dynamically gets the current URL
        })
        .then(() => console.log('Share successful'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Web Share API is not supported in your browser. Copy the link manually!');
    }
  };

  return (
    <nav className="navbar">
      {/* Ruban as a Button */}
      <a href="#home" className="Ruban" aria-label="Go to Home" onClick={() => handleScroll('home')}>
        Ruban
      </a>

      {/* Navigation Menu */}
      <ul className="nav-menu">
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
      </ul>

      {/* Connect Button */}
      <div
        className="nav-connect"
        aria-label="Connect with me"
        onClick={() => handleScroll('contact')}
        role="button"
        tabIndex={0}
      >
        Connect with me
      </div>  
    </nav>
  );
};

export default Navbar;
