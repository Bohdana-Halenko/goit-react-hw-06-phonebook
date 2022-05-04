// import s from './ContactList.module.css';
import PropeTypes from 'prop-types';

const ContactList = ({ children }) => {
  return (
      <>
        <h2>Phonebook</h2>
        {children}
      </>
  );
};

ContactList.propTypes = {
  children: PropeTypes.arrayOf(PropeTypes.element),
  title: PropeTypes.string
}

export default ContactList;
