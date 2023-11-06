import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };


  return (
    <ul className={styles.list}>
      {getFilteredContacts().map(el => {
        return (
          <li key={el.id} className={styles.item}>
            <p>{el.name}: {el.number}</p>
            <button
              type="button"
              onClick={() => {onDeleteContact(el.id);}}
              className={styles.button}
            >Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
