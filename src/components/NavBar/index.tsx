import { NavLink } from 'react-router-dom';
import logo from '@/assets/logo_sz.svg';
import { ROUTES } from '@/utils/constants';
import './styles.scss';

function NavBar() {
  return (
    <div className="navbar">
      <img src={logo}></img>
      <ul className="nav-menu">
        <li>
          <NavLink to={ROUTES.HOME} className="nav-link">
            home
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.PROJECTS} className="nav-link">
            projects
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.EXPERIENCE} className="nav-link">
            experience
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.CONTACT} className="nav-link">
            contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
