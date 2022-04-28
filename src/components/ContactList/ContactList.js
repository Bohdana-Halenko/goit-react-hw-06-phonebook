import React from 'react';
import propTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ children }) => (
	<>
		<ul className={s.contactsList}>
			{children}
		</ul>
	</>
);

ContactList.propTypes = {
    children: propTypes.node.isRequired,
};

export default ContactList;