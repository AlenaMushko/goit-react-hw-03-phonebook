import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';
import {Form, FormInput, FormButton} from './ContactForm.styled'


export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state)
    this.setState({name: '', number: '',})
  }

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  render() {
    const { name, number } = this.state;
    const nameId = nanoid();
     const numberId = nanoid();
    return (
       <Form onSubmit={this.handleSubmit}>
            <label htmlFor={nameId}>
              Name
          <FormInput
            id={nameId}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
              />
            </label>
            <label  htmlFor={numberId}>
              Numbe
          <FormInput
            id={numberId}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
              />
            </label>
            <FormButton type="submit">Add contact</FormButton>
          </Form>
     )
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};