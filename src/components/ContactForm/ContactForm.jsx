import React from "react";
import PropTypes from 'prop-types';
//import { nanoid } from "nanoid";
import css from "../Phonebook/phonestyle.module.css";

const ContactForm = ({ name, number, onInputChange, onAddContact }) => {
  const handleSubmit = (event) => {
  event.preventDefault();
  onAddContact(event);
};

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.contact} htmlFor="nameInput">
        Name
        <input
          className={css.cont}
          id="nameInput"
          type="text"
          name="name"
          value={name}
          onChange={onInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.contact} htmlFor="numberInput">
        Number
        <input
          className={css.cont}
          id="numberInput"
          type="tel"
          name="number"
          value={number}
          onChange={onInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  name:PropTypes.string,
  number:PropTypes.string,
}