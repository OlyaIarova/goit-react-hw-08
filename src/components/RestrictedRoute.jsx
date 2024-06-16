import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

// Компонент RestrictedRoute відповідає за обмежений маршрут, який доступний тільки для неввійшовших користувачів
const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
  // Перенаправляємо на redirectTo, якщо користувач вже авторизований, інакше рендеримо компонент Component
};

export default RestrictedRoute;
