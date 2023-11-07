import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import styles from './ContactForm.module.css';
import { addContact } from '../../redux/operations';

const ContactForm = () => {

  const contact = useSelector(selectContacts);
  const dispatch = useDispatch();


  const addNewContact = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;

    if (contact.some(e => e.name === name)) {
      alert('this contact is already exist, please add a new one');
      return;
    }

    dispatch(addContact({ name, phone }));
    e.target.reset()
  };

  return (
    <form onSubmit={addNewContact} className={styles.form}>
      <label className={styles.contactFormLabel}>
        Name:
        <input
          type='text'
          name='name'
          required
          className={styles.input}
        />
      </label>
      <label className={styles.contactFormLabel}>
        Number:
        <input
          type='tel'
          name='phone'
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
