import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import styles from './ContactList.module.css';
import { deleteContact, getAllContacts } from '../../redux/operations';
import { useEffect } from 'react';


const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts())
  }, [dispatch]);

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.list}>
      {contacts.map(el => {
        return (
          <li key={el.id} className={styles.item}>
            <p>{el.name}: {el.phone}</p>
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
