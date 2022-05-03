import React from 'react';
import propTypes from 'prop-types';
import s from './ContactItem.module.css';

function ContactItem({ contacts, onDeleteContact }) {
	return contacts.map(({ id, name, number }) => (
		<li key={id} className={s.contactsItem}>
			<p className={s.contactText}>
				{name}: {number}
			</p>
			<button
				className={s.button}
				type="button"
				onClick={() => { onDeleteContact(id) }}>
				Delete
			</button>
		</li>
	));
};

ContactItem.propTypes = {
    contacts: propTypes.array,
    onDeleteContact: propTypes.func,
};

export default ContactItem;