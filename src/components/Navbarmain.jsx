import React from 'react';
import './main.css'; // Make sure this CSS file is properly linked
import { Link } from 'react-router-dom'; // Import Link only here

function Navbarmain() {
  return (
    <div className='Navbarmain'>
      <header>
        <nav>
          <ul className="navbarul">
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
              <a href="#login">
                <img
                  src="https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600nw-2227567913.jpg"
                  alt="Login"
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbarmain;
