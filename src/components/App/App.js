import { useEffect } from 'react';
import ContactForm from 'components/ContactForm';
import { nanoid } from 'nanoid';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItems, setFilter, setItems } from 'redux/contactSlice';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.books.contacts.items);
  const filter = useSelector(store => store.books.contacts.filter);

  useEffect(() => {
    const parsContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsContacts) {
      // dispatch(setItems(parsContacts));
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

  const deleteContact = contactId => {
    dispatch(deleteItems(contactId));
  };

  const getVisibleContact = () => {
    const normalizedfilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedfilter)
    );
  };

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  const visibleContact = getVisibleContact();
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContacts} />

      <h2>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />
      <ContactList onDeleteContact={deleteContact} contacts={visibleContact} />
    </div>
  );
}

export default App;
