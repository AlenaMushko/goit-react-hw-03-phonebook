import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { FilterContacts } from './Filter';

import { Container, ContactsTitle, Title } from './App.styled';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const { contacts } = this.state;
    const isContactRecorded = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    isContactRecorded
      ? alert(`${name} is alreadi in contacts`)
      : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };
  componentDidMount() {
    const contactsSaved = JSON.parse(localStorage.getItem('contacts'));
    if (contactsSaved) {
      this.setState({ contacts: contactsSaved });
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
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
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    const { filter, contacts } = this.state;
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        {contacts.length > 0 && <ContactsTitle>Contacts</ContactsTitle>}
        {contacts.length > 0 && (
          <FilterContacts value={filter} onChange={this.changeFilter} />
        )}
        {contacts.length > 0 && (
          <ContactList
            contacts={this.visibleContacts()}
            onDelete={this.deliteContact}
          />
        )}
      </Container>
    );
  }
}
