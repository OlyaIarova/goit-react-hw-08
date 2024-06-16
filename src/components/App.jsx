import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import Loader from './Loader/Loader';
import { useAuth } from '../hooks/useAuth.js';

const HomePage = lazy(() => import('../pages/Home/Home.jsx'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

const App = () => {
  const dispatch = useDispatch(); // Отримуємо функцію dispatch для відправки дій до Redux store
  const { isRefreshing } = useAuth(); // Отримуємо стан аутентифікації користувача

  useEffect(() => {
    dispatch(refreshUser()); // Викликаємо функцію оновлення користувача при монтажі компонента або зміні dispatch
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*Головна сторінка */}
        <Route index element={<HomePage />} />
        {/* Сторінка реєстрації користувача */}
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        {/* Сторінка входу користувача */}
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        {/* Сторінка контактів (доступна тільки для авторизованих користувачів) */}
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
      {/* Маршрут за замовчуванням (якщо ні один інший маршрут не співпадає) */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default App;
