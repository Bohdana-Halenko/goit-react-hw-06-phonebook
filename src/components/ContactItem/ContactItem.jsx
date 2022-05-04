import s from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItems } from 'redux/bookSlice';

const ContactItem = ({ contacts, onDelete }) => {

  const filter = useSelector(store => store.books.contacts.filter);
  const dispatch = useDispatch();

  const handlesFilterOfContacts = () => {
    const value = filter.toLowerCase();
    const searchContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(value),
    );
    return searchContact;
  };

  const deleteContact = contactId => {
    dispatch(deleteItems(contactId));
  };

  const contactsList = handlesFilterOfContacts();

  return (
    <div contacts={contactsList} onDelete={deleteContact}>
      <ul>
        {contacts?.map(({ name, number, id }) => (
          <li key={id} className={s.contactsItem}>
            <span className={s.contactText}>
              {name} : {number}
            </span>
            <button type="button" /*onClick={onDelete}*/
              onClick={() => {
                onDelete(id);
              }}
              className={s.button}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};

export default ContactItem;
