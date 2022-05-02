import React from 'react';
import propTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
	return (
		<ul className={s.contactsList}>
			<li contacts={contacts} onDeleteContact={onDeleteContact}></li> 
		</ul>
	);
};

ContactList.propTypes = {
    contacts: propTypes.array.isRequired,
    onDeleteContact: propTypes.func.isRequired,
};

export default ContactList;