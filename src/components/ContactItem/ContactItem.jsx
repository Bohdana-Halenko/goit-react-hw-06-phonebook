import s from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteItems } from 'redux/contactsSlice';


const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const deleteContact = contactId => dispatch(deleteItems(contactId));

  return (
    <li key={id} className={s.contactsItem}>
      <span className={s.contactText}>
        {name} : {number}
      </span>
      <button
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
        className={s.button}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};

export default ContactItem;
