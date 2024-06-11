import ContactForm from './ContactForm/ContactForm';
import SearchBar from './SearchBar/SearchBar';
import ContactList from './ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps.js';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={CSS.container}>
      <h1 className="header">Phonebook 📘 </h1>
      <ContactForm />
      <h2 className="header">Contacts 📝</h2>
      <SearchBar />
     <ContactList />
    </div>
  );
}

export default App;


