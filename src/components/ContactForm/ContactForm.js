import React from 'react';
import propTypes from 'prop-types';
import { useState } from 'react';
// import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

function ContactForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const reset = () => {
        setName('');
        setNumber('');
    };

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                break;
        }
    };

    return (
        <form onSubmit={e => {
            e.preventDefault();
            onSubmit({ name, number });
            reset();
        }}
            className={s.formWrap}>
            <div className={s.inputWrap}>
                <label className={s.label}>Name</label>
                <input
                    className={s.input}
                    onChange={handleChange}
                    value={name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </div>
            <div className={s.inputWrap}>
                <label className={s.label}>Number</label>
                <input
                    className={s.input}
                    value={number}
                    onChange={handleChange}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </div>
            <button className={s.button} type='submit'>
                Add contact
            </button>
        </form>
    );
}

ContactForm.propTypes = {
  name: propTypes.string,
  number: propTypes.number,
};

export default ContactForm;