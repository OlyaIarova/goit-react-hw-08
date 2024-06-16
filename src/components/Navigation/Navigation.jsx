import { NavLink } from 'react-router-dom';
import CSS from './Navigation.module.css';
import clsx from 'clsx';
import { useAuth } from '../../hooks/useAuth.js';

const buildLinkClass = ({ isActive }) => {
  return clsx(CSS.link, isActive && CSS.active);
};

// Компонент Navigation відповідає за навігаційне меню
const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={buildLinkClass} to="/">
        {/* Посилання на головну сторінку */}
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          {/* Посилання на сторінку контактів, доступне тільки для авторизованих користувачів */}
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
