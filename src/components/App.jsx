import { Container, Title } from "./App.styled";
import { nanoid } from "nanoid";
import { Component } from "react";
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";
import { PhonebookForm } from "./PhonebookForm/PhonebookForm";


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

  formSubmitHandler = ({ name, number }) => {
    const newContact = { name, number, id: nanoid() };
    const doubleContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    doubleContact
      ? alert(`${doubleContact.name} is already in contacts`)
      : this.setState({ contacts: [...this.state.contacts, newContact] });
  };

  changeFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  getFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleFilter = this.getFilterContacts();

    return (
      <Container>
        <Title>Phonebook</Title>
        <PhonebookForm onSubmit={this.formSubmitHandler} />
        <Title>Contacts</Title>
        <Filter filter={filter} onChange={this.changeFilter} />
        <Contacts contacts={visibleFilter} deleteContact={this.deleteContact} />
      </Container>
    );
  }
}
