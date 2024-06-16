import { useDispatch } from 'react-redux';
import CSS from './UserMenu.module.css';

import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks';

// Компонент UserMenu відповідає за меню користувача, якщо користувач авторизований
const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={CSS.wrapper}>
      <p className={CSS.username}>Welcome, {user.name}</p>

      <button
        className={CSS.btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
