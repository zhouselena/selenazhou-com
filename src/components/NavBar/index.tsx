import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/logo_sz.svg';
import { ROUTES } from '@/utils/constants';
import './styles.scss';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink to={ROUTES.HOME} className="nav-link" onClick={() => setIsOpen(false)}>
            home
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.PROJECTS} className="nav-link" onClick={() => setIsOpen(false)}>
            projects
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.EXPERIENCE} className="nav-link" onClick={() => setIsOpen(false)}>
            experience
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.CONTACT} className="nav-link" onClick={() => setIsOpen(false)}>
            contact
          </NavLink>
        </li>
      </div>

      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default NavBar;
