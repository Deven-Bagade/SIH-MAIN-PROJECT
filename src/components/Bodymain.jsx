import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link only here

function Bodymain() {
  useEffect(() => {
    // Dynamically load chatbot scripts
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v2.1/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://mediafiles.botpress.cloud/a442f241-0695-4d18-95c4-73698ce2624c/webchat/v2.1/config.js';
    script2.async = true;
    document.body.appendChild(script2);

    // Clean up function to remove scripts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []); 

  return (
    <div>
      <main>
        <div className="container">
          <img
            src="https://goshfood.com/wp-content/uploads/2024/05/iStock-1253713039-1.jpeg"
            alt="Image"
            className="left-image"
          />
          <div className="right-text">
            <h1>Your Waste, Our Mission – Cleaner Streets, Greener Planet!</h1>
            <p>
              Our platform is dedicated to handling your waste responsibly, ensuring cleaner streets and contributing to a greener, healthier planet for everyone.
            </p>
          </div>
        </div>

        <div className="container2">
          <div className="sub-container21">
            <h2>Our Commitment</h2>
            <p>
              We offer a seamless and intuitive platform designed to transform how your community handles waste. With just a few clicks, you can schedule hassle-free garbage pickups, responsibly dispose of e-waste, or find buyers for second-hand items. Our mission is to simplify waste management, eliminate the need for road-side segregation, and promote environmental sustainability. By using our efficient solutions, you’re not only making waste management easier but also contributing to a cleaner, greener community. Partner with us to make a significant impact and foster a more sustainable future.
            </p>
          </div>
          <div className="sub-container22">
            <a href="https://deven-bagade.github.io/SIH-PROJECT/" target="_blank" rel="noopener noreferrer">
              <button>E-WASTE</button>
            </a>
            <button>Chatbot</button>
            <button>Button 2</button>
          </div>
        </div>
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Latest News</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Get in Touch</h3>
            <p>XYZ@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2024 <strong>Name of Our Site Pvt Ltd</strong>. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Bodymain;
