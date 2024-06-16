import { FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import CSS from './Contact.module.css';
import Modal from 'react-modal';
import React from 'react';
import { deleteContact } from '../../redux/contacts/operations.js';

Modal.setAppElement('#root'); // визначає кореневу папку програми

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // посилання синхронізовано, і до них можна отримати доступ.
    subtitle.style.color = ' #27b8ad;';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <li className={CSS.listItem}>
      <h2 className={CSS.title}>
        <FaUser className={CSS.icon} />
        {name}
      </h2>
      <p className={CSS.title}>{number}</p>
      <button className={CSS.button} onClick={openModal}>
        Delete Contact
      </button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>
          Do you really want to delete this contact?
        </h2>
        <button className={CSS.btn} onClick={handleDelete}>
          Yes, delete!
        </button>
      </Modal>
    </li>
  );
};

export default Contact;
