import s from './ContactList.module.css';
import {  useSelector } from 'react-redux';

import ContactItem from '../ContactItem';

const ContactList = () => {
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h2 className={s.title}>Phonebook</h2>

      {filteredContacts.map(contact => (
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
