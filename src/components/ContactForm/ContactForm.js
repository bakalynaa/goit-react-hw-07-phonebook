import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const newContact = (e) => {
    'name' === e.target.name ? setName(e.target.value) : setNumber(e.target.value);
  };

  const addNewContact = (e) => {
    e.preventDefault();

    const isExist = contacts.find(
      (elem) => elem.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`"${name}" is already in contacts!`);
      return;
    }

    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={addNewContact} className={styles.form}>
      <label className={styles.contactFormLabel}>
        Name:
        <input
          type='text'
          name='name'
          value={name}
          onChange={newContact}
          required
          className={styles.input}
        />
      </label>
      <label className={styles.contactFormLabel}>
        Number:
        <input
          type='tel'
          name='number'
          value={number}
          onChange={newContact}
          required
          placeholder='000-00-00'
          className={styles.input}
        />
      </label>
      <button type='submit' className={styles.addContactBtn}>Add contact</button>
    </form>
  );
};

export default ContactForm;
