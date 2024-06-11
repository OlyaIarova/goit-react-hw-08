import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

import CSS from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps.js';

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required name'),
  number: Yup.string()
    .min(7, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required number'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const nameID = useId();
  const numberID = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ id: crypto.randomUUID(), ...values }));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Form className={CSS.form} autoComplete="off">
        <label htmlFor={nameID}>Name</label>
        <Field
          className={CSS.input}
          type="text"
          name="name"
          id={nameID}
          placeholder="Ivanov Ivan"
        />
        <ErrorMessage
          className={CSS.errorNumber}
          name="name"
          component="span"
        />
        <label htmlFor={numberID}>Number</label>
        <Field
          className={CSS.input}
          type="tel"
          name="number"
          id={numberID}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="XXX-XXX-XXXX"
        />
        <ErrorMessage
          className={CSS.errorNumber}
          name="number"
          component="span"
        />

        <button className={CSS.btn} type="submit">
          Add contact 📌
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
