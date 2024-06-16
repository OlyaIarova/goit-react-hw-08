import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TitlePage from '../../components/TitlePage/TitlePage';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectLoading } from '../../redux/contacts/selectors';
import SearchBar from '../../components/SearchBar/SearchBar';
import { selectError } from '../../redux/contacts/selectors';
import Title from '../../components/Title/Title';

// Компонент Tasks відповідає за відображення списку контактів та їх форми
export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts()); // Виконуємо запит для отримання контактів з сервера
  }, [dispatch]);

  return (
    <>
      <TitlePage>Your contacts</TitlePage>
      <Title />
      <ContactForm />
      {/* Компонент форми для додавання контакту */}
      <SearchBar />
      {isLoading && !error && <ContactList />}
      {/* Компонент для відображення списку контактів */}
    </>
  );
}
