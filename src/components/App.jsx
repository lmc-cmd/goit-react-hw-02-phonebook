import { Component } from 'react';
import Form from './Form/Form';

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
    console.log('state :>> ', this.state);
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
      </div>
    );
  }
}
