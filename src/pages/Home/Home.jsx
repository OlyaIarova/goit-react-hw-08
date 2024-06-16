import { FcPhoneAndroid } from 'react-icons/fc';
import { FcAcceptDatabase } from 'react-icons/fc';
import CSS from './Home.module.css';
import TitlePage from '../../components/TitlePage/TitlePage';

// Компонент Home відповідає за відображення домашньої сторінки
export default function Home() {
  return (
    <>
      <TitlePage>Home</TitlePage>
      {/* Відображення заголовка на домашній сторінці */}
      <div className={CSS.container}>
        <h1 className={CSS.title}>Home page of the Phonebook</h1>
        <p>
          <FcPhoneAndroid size="65" />
          <FcAcceptDatabase size="65" />
        </p>
      </div>
    </>
  );
}
