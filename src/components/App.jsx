import s from './App.module.css';
// import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
// import ContactList from './ContactList/ContactList';
import ContactItem from './ContactItem/ContactItem';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItems, setFilter, setItems } from 'redux/contacts-slice';


function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  useEffect(() => {
    const parsContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsContacts) {
      parsContacts.forEach(el => dispatch(setItems(el)));
    }
  }, [dispatch]);

  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  const addContacts = data => {
    contacts.find(
      contact => contact?.name?.toLowerCase() === data.name.toLowerCase()
    )
      ? alert(`${data.name} is already in contact`)
      : dispatch(setItems({ ...data, id: nanoid() }));
  };

  // const deleteContact = contactId => {
  //   dispatch(deleteItems(contactId));
  // };

  const deleteContact = e => {
    const contactId = e.currentTarget.parentNode.id;
    dispatch(deleteItems(contactId));
  };

  const getVisibleContact = () => {
    const normalizedfilter = filter.toLowerCase();

    const searchContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedfilter)
    );
    return searchContact;
  };

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  const visibleContact = getVisibleContact();

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={addContacts} />
      <h2 className={s.title}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactItem contacts={visibleContact}
          onDeleteContact={deleteContact}>
      </ContactItem>
    </div>
  );
}

export default App;