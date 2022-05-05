import s from './ContactList.module.css';
// import PropeTypes from 'prop-types';
import { /*useDispatch,*/ useSelector } from 'react-redux';
// import { setItems } from 'redux/bookSlice';

import ContactItem from '../ContactItem';

const ContactList = () => {
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);


  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const filteredContactList = filteredContacts();


  return (
    <>
      <h2 className={s.title}>Phonebook</h2>

      {filteredContactList.map(contact => (
        <ContactItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      ))}
    </>
  );
};

// ContactList.propTypes = {
//   children: PropeTypes.arrayOf(PropeTypes.element),
//   title: PropeTypes.string,
// };

export default ContactList;
