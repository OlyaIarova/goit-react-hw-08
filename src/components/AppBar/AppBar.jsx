import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import CSS from './AppBar.module.css';
import { useAuth } from '../../hooks/useAuth.js';

const AppBar = () => {
  const { isLoggedIn } = useAuth(); // Отримуємо стан аутентифікації користувача
  // Компонент AppBar відповідає за верхню панель додатка, яка містить навігацію та відповідний контент для аутентифікованого та неаутентифікованого користувача.
  // Використовуємо useAuth з нашого власного хука useAuth, щоб отримати дані про аутентифікацію користувача.
  return (
    <header className={CSS.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
