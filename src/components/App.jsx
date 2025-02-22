import { Component } from 'react';
import { Container } from './App.styled';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = { contacts: [] };

  formSubmitHandler = ( {name, number} ) => {
    const newContact = { name ,number, id: nanoid() };
    this.setState({ contacts: [...this.state.contacts, newContact] });
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <PhonebookForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Contacts contacts={this.state.contacts} />
      </Container>
    );
  }
}
