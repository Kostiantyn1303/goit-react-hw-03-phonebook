import { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Form, Lable, Btn, Input } from './ContactForm.styled';
const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = { ...INITIAL_STATE };
  handleChange = evt => {
    this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
  };
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.resetForm();
  };
  resetForm = () => {
    this.setState({ ...INITIAL_STATE });
  };
  render() {
    return (
      <Form action="" onSubmit={this.handleSubmit}>
        <Lable htmlFor={this.nameInputId}>Name</Lable>
        <Input
          value={this.state.name}
          type="text"
          name="name"
          pattern="[\p{L} '-]+"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
          id={this.nameInputId}
        />
        <Lable htmlFor={this.numberInputId}>Number</Lable>
        <Input
          value={this.state.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
          id={this.numberInputId}
        />
        <Btn type="submit">Add contact</Btn>
      </Form>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
