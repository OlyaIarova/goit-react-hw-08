import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import CSS from './LoginForm.module.css';

import { logIn } from '../../redux/auth/operations';

// Компонент LoginForm відповідає за форму авторизації користувача
const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    // Викликаємо дію logIn з параметрами email та password, які отримуємо зі значень полів форми
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        toast.success('login success');
      })
      .catch(() => {
        toast.error('login error');
      });
    form.reset(); // Очищуємо значення полів форми після відправки
  };

  return (
    <form className={CSS.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={CSS.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={CSS.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button className={CSS.btn} type="submit">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
