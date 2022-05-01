import React from 'react';
import propTypes from 'prop-types';
import s from './ContactList.module.css';
import Contact from './ContactList';

function ContactList({ contacts, onDeleteContact }) {
	return (
		<ul className={s.contactsList}>
			<Contact contacts={contacts} onDeleteContact={onDeleteContact} />
		</ul>
	)
}

ContactList.propTypes = {
    contacts: propTypes.array.isRequired,
    // onDeleteContact: propTypes.func.isRequired,
};

export default ContactList;