import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact</h3>
          <p>contact@portfolio.com</p>
        </div>
        
        <div className="footer-section">
          <h3>Social</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/adrien-darriet/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Nexgenoffice" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        
        <div className="footer-section">
          <p className="copyright">© {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
