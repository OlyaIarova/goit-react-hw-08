import CSS from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactsOps.js';

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(removeContact(id));

  return (
    <li className={CSS.listItem}>
      <h2 className={CSS.title}>
        {' '}
        <FaUser className={CSS.icon} />
        {name}{' '}
      </h2>
      <p className={CSS.title}>{number}</p>
      <button className={CSS.button} onClick={handleDelete}>
        Delete contact
      </button>
    </li>
  );
};

export default Contact;
