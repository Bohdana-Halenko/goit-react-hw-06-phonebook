import { useState } from 'react';
import PropeTypes from 'prop-types';
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setItems } from 'redux/bookSlice';
import { nanoid } from 'nanoid';


const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(store => store.books.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageContacts = localStorage.getItem('contacts');

    if (localStorageContacts) {
      JSON.parse(localStorageContacts).forEach(el => dispatch(setItems(el)));
    }
  }, [dispatch]);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleContact = userData => {
    let inputName = userData.name;
    const isIncludesName = contacts.find(
      contact => contact?.name?.toLowerCase() === inputName.toLowerCase()
    );

    if (isIncludesName) {
      return alert(`${inputName} is already is contacts`);
    }

    const contact = { ...userData, id: nanoid() };
    dispatch(setItems(contact));
  };

  const handleInputGange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    handleContact({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmitHandler} className={s.formWrap}
      /*onSubmit={handleContact}*/ >
      <label className={s.inputWrap}>
        <span className={s.label}>Name</span>
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputGange}
          value={name}
        />
      </label>
      <label className={s.inputWrap}>
        <span className={s.label}>Phone</span>
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputGange}
          value={number}
        />
      </label>
      <button className={s.button} type="sabmit">Add Contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  props: PropeTypes.func,
};

export default ContactForm;
