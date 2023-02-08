import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { FilterContacts } from './Filter';

import {Container, ContactsTitle , Title} from './App.styled'
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const { contacts } = this.state;
    const isContactRecorded = contacts.find(contact =>contact.name.toLowerCase() === name.toLowerCase())
    isContactRecorded
      ? alert(`${name} is alreadi in contacts`)
      : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));    
  };

  visibleContacts = () => {
    const { contacts } = this.state;
    const { filter } = this.state;
    const normolizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizeFilter)
    );
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deliteContact = contactId => {
    this.setState(({contacts}) => ({
      contacts: contacts.filter(
      contact => contact.id !== contactId
    )}))
  }
  render() {
    const { filter } = this.state;
 
    return (
      <Container >
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />

        <ContactsTitle>Contacts</ContactsTitle>
        <FilterContacts value={filter} onChange={this.changeFilter} />
        <ContactList contacts={this.visibleContacts()} onDelete={ this.deliteContact} />
      </Container>
    );
  }
}
