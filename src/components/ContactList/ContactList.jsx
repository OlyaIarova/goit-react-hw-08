import { useSelector } from 'react-redux';
import CSS from './ContactList.module.css';
import Contact from '../Contact/Contact';

import { selectVisibleContacts } from '../../redux/filters/selectors';

const ContactList = () => {
  // Компонент ContactList відповідає за відображення списку контактів
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
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
