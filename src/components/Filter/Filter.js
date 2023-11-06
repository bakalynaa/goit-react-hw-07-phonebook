import React from 'react';
import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/filterSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

 const addFilterContact = (e) => {
   dispatch(addFilter(e.target.value))
 }

  return (
    <label className={styles.label}>
      Find contacts by name:
      <input
        type='text'
        name='filter'
        onChange={addFilterContact}
        className={styles.input}
      />
    </label>
  );
};


export default Filter;
