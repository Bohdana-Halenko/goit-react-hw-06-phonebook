import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItems, setFilter, setItems } from 'redux/bookSlice';
import ContactItem from './ContactItem';
import Filter from './Filter';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import s from './App.module.css';


const App = () => {
  const contacts = useSelector(store => store.books.contacts.items);
  const filter = useSelector(store => store.books.contacts.filter);
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

  const handleFilterChange = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  const handlesFilterOfContacts = () => {
    const value = filter.toLowerCase();
    const searchContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(value)
    );
    return searchContact;
  };

  const deleteContact = contactId => {
    dispatch(deleteItems(contactId));
  };

  const contactsList = handlesFilterOfContacts();

  return (
    <div className={s.container}>
      <ContactList>
      <ContactForm onSubmit={handleContact} />
      <h2>Contacts</h2>
      <Filter value={filter} filterChange={handleFilterChange} />
      <ContactItem contacts={contactsList} onDelete={deleteContact} />
    </ContactList>
    </div>
    
  );
};

export default App;
