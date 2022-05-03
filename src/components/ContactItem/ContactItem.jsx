import s from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ contacts, onDelete }) => {
  return (
    <>
      <ul>
        {contacts?.map(({ name, number, id }) => (
          <li key={id} id={id} className={s.contactsItem}>
            <span className={s.contactText}>
              {name} : {number}
            </span>
            <button type="button" onClick={onDelete} className={s.button}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};

export default ContactItem;
