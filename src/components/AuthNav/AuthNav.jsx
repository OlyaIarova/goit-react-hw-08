import { NavLink } from 'react-router-dom';
import CSS from './AuthNav.module.css';
import clsx from 'clsx';

// Компонент відповідає за навігаційну панель для неаутентифікованого користувача
const buildLinkClass = ({ isActive }) => {
  return clsx(CSS.link, isActive && CSS.active);
};

const AuthNav = () => {
  return (
    <div>
      <NavLink className={buildLinkClass} to="/register">
        {/* Посилання на сторінку реєстрації користувача */}
        Register
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        {/* Посилання на сторінку входу користувача */}
        Log In
      </NavLink>
    </div>
  );
};
export default AuthNav;
