import TitlePage from '../../components/TitlePage/TitlePage';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

// Компонент Register відповідає за відображення сторінки реєстрації
export default function Register() {
  return (
    <>
      <TitlePage>Registration</TitlePage>
      <RegisterForm />
      {/* Відображення форми для реєстрації */}
    </>
  );
}
