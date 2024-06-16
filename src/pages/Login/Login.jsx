import LoginForm from '../../components/LoginForm/LoginForm';
import TitlePage from '../../components/TitlePage/TitlePage';

// Компонент Login відповідає за відображення сторінки входу в систему
export default function Login() {
  return (
    <div>
      <TitlePage>Login</TitlePage>
      <LoginForm />
      {/* Відображення форми для входу в систему */}
    </div>
  );
}
