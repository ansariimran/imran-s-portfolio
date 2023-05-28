import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-for-footer">
        <p className="text-center">Imran Ansari &copy; {new Date().getFullYear()}</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
