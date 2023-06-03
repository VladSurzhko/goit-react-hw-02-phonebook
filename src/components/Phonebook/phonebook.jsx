import React, { Component } from "react";
import { nanoid } from "nanoid";

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
      <div >
        <h2>Phonebook</h2>
        <form onSubmit={this.handleAddContact}>
          <label htmlFor="nameInput">
            Name:
            <input
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
          <label htmlFor="numberInput">
            Number:
            <input
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
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <label htmlFor="filterInput">
            Find contacts by name:
            <input
              id="filterInput"
              type="text"
              name="filter"
              value={filter}
              onChange={this.handleInputChange}
            />
          </label>
          <ul>
            {filteredContacts.map(contact => (
              <li key={contact.id}>
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



