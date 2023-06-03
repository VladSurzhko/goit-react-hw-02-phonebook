import React, { Component } from "react";
import { nanoid } from "nanoid";
import css from "../Phonebook/phonestyle.module.css"


class inputForm extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleAddContact = (event) => {
    event.preventDefault();
    const { name, number, contacts} = this.state;
    const errorContact = contacts.find(contact => contact.name === name);

    if (errorContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    
    const Contacts = {
      id: nanoid(),
      name,
      number
    };


    this.setState(prevState => ({
      contacts: [...prevState.contacts, Contacts],
      name: "",
      number: ""
    }));
  }

  render() {
    const { contacts, name, filter, number } = this.state;


    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    

    return (
      <div className={css.section}>
        <h2 className={css.contText}>Phonebook</h2>
        <form
        className={css.form}  
        onSubmit={this.handleAddContact}>
          <label
          className={css.contact} 
          htmlFor="nameInput">
            Name:
            <input
              className={css.cont}
              id="nameInput"
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label
          className={css.contact} 
          htmlFor="numberInput">
            Number:
            <input
              className={css.cont}
              id="numberInput"
              type="tel"
              name="number"
              value={number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button
          className={css.btn} 
          type="submit">Add contact</button>
        </form>
        <div className={css.formContact}>
          <h2 className={css.text}>Contacts</h2>
          <label 
          className={css.findContact}
          htmlFor="filterInput">
            Find contacts by name:
            <input
              className={css.lastInput}
              id="filterInput"
              type="text"
              name="filter"
              value={filter}
              onChange={this.handleInputChange}
            />
          </label>
          <ul className={css.lists}>
            {filteredContacts.map(contact => (
              <li className={css.items} key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default inputForm;



