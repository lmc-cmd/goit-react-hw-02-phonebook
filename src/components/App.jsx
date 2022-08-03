import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactsList from './ContactsList/ContactsList';
import Form from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
  };

  // hendleInputChange = event => {
  //   const { name, value } = event.currentTarget;
  //   this.setState({ [name]: value });
  // };
  formSubmitHendler = formState => {
    const contact = {
      id: nanoid(),
      name: formState.name,
      number: formState.number,
    };
    this.state.contacts.push(contact);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: 'column',
        }}
      >
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHendler} />
        <h2>Contacts</h2>
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}
