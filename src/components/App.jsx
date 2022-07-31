import { nanoid } from 'nanoid';
import { Component } from 'react';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  hendleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  hendleSubmit = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
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
        }}
      >
        <Form
          state={this.state}
          hendleInputChange={this.hendleInputChange}
          hendleSubmit={this.hendleSubmit}
        />
        <Contacts state={this.state.contacts} />
      </div>
    );
  }
}
