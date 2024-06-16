import { useDispatch } from 'react-redux';
import CSS from './RegisterForm.module.css';

import { register } from '../../redux/auth/operations';

// Компонент RegisterForm відповідає за форму реєстрації нового користувача
const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // Викликаємо дію register з параметрами name, email та password, які отримуємо зі значень полів форми
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset(); // Очищуємо значення полів форми після відправки
  };

  return (
    <form className={CSS.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={CSS.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={CSS.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={CSS.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button className={CSS.btn} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
