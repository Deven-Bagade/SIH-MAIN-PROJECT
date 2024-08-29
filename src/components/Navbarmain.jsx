import React, { useState } from 'react';
import './main.css'; // Ensure this CSS file is properly linked
import { Link } from 'react-router-dom'; // Import Link for internal navigation

function Navbarmain() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false); // State for nav visibility

  // Function to handle login button click
  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to toggle navigation menu visibility
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className='Navbarmain'>
      <header>
        <nav>
          <button className="toggle-nav" onClick={toggleNav}>
            {isNavVisible ? 'Close Menu' : 'Open Menu'}
          </button>
          <ul className={`navbarul ${isNavVisible ? 'active' : ''}`}>
            <li className="logo">
              <a href="#home">
                <img
                  src="https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600nw-2227567913.jpg"
                  alt="Logo"
                />
              </a>
            </li>
            <li><Link to='/'>HOME</Link></li> {/* Use Link for internal navigation */}
            <li><a href="#community">COMMUNITY</a></li>
            <li><Link to="/guid">GUIDELINES</Link></li>
            <li><Link to="/news">NEWS</Link></li> {/* Use Link for internal navigation */}
            <li><a href="#contact">CONTACT US</a></li>
            <li><a href="#about">ABOUT US</a></li>
            <li className="login">
              <a href="#login" onClick={handleLoginClick}> {/* Handle login click */}
                <img
                  src="https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600nw-2227567913.jpg"
                  alt="Login"
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Render modal here if isModalOpen is true */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Login Form or Content Goes Here</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbarmain;
