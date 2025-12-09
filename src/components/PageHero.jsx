import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './PageHero.css';

const PageHero = ({ title, subtitle, buttons, imageUrl, lightImage, darkImage }) => {
  const { theme } = useContext(ThemeContext);
  
  const backgroundImage = (lightImage && darkImage)
    ? (theme === 'dark' ? darkImage : lightImage)
    : imageUrl;
  
  return (
    <div className="page-hero">
      <div className="hero-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          {buttons && <div className="hero-buttons">{buttons}</div>}
        </div>
      </div>
    </div>
  );
};

export default PageHero;
