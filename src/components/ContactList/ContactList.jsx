import { useSelector } from 'react-redux';
import {
  selectLoading,
  selectError,
  selectErrorMsg,
} from '../../redux/selectors.js';
// import { useSelector } from 'react-redux';
import CSS from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { selectVisibleContacts } from '../../redux/selectors.js';

const ContactList = () => {
  // const { loading, error, errorMsg } = useSelector(state => state.contacts);
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const errorMsg = useSelector(selectErrorMsg);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red', fontSize: '24px' }}>{errorMsg}</p>}
      <ul className={CSS.contact}>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
