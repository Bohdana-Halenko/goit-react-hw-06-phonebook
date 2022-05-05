import s from './ContactList.module.css';
import PropeTypes from 'prop-types';
import { /*useDispatch,*/ useSelector } from 'react-redux';
// import { setItems } from 'redux/bookSlice';

import ContactItem from '../ContactItem';

const ContactList = () => {
  // const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  return (
    <>
      <h2 className={s.title}>Phonebook</h2>

      {contacts.map(contact => (
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

ContactList.propTypes = {
  children: PropeTypes.arrayOf(PropeTypes.element),
  title: PropeTypes.string,
};

export default ContactList;
