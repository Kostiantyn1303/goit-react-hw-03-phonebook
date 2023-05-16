import { Component } from 'react';
import shortid from 'shortid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppContainer, Title, Subtitle } from './App.styled';
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
  componentDidUpdate(PrevProps, PrevState) {
    if (this.state.contacts !== PrevState.contact) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  componentDidMount() {
    const contactsStorage = localStorage.getItem('contacts');
    const ParsetContacts = JSON.parse(contactsStorage);
    if (ParsetContacts) {
      this.setState({ contacts: ParsetContacts });
    }
  }

  addContact = ({ name, number }) => {
    const isAdded = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isAdded) {
      return alert(`${name} is already in contacts.`);
    }
    const newContact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  changeFilter = evt => {
    const { value } = evt.currentTarget;
    this.setState({ filter: value });
  };

  deleteContact = todoId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== todoId),
    }));
  };
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <AppContainer>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />

        <Subtitle>Contacts</Subtitle>

        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </AppContainer>
    );
  }
}
