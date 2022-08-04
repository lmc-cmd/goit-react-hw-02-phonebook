import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Form from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHendler = formState => {
    const normalizedName = formState.name.toLowerCase();
    const checkContact = this.state.contacts.some(
      el => el.name.toLowerCase() === normalizedName
    );

    if (checkContact) {
      alert(`${formState.name} is already in contacts`);
      return;
    }
    const contact = {
      id: nanoid(),
      name: formState.name,
      number: formState.number,
    };
    // this.state.contacts.push(contact); //state при пуше не  обновляется, рендер списка не проиходит, а если удалить элемент масива => ререндер?
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  filterhandler = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  filetedContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredContacts = this.filetedContacts();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: 'column',
        }}
      >
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHendler} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} filterhandler={this.filterhandler} />
        <ContactsList contacts={filteredContacts} />
      </div>
    );
  }
}
