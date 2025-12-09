import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/engineering', label: 'Engineering Course' },
    { path: '/civic', label: 'Civic Engagement' },
    { path: '/mobility', label: 'International Mobility' },
    { path: '/career', label: 'Career & Projects' },
    { path: '/interests', label: 'Interests' }
  ];

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">Portfolio</Link>
        
        <nav className="nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
};

export default Header;
