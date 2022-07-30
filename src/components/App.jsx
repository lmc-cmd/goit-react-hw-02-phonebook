import { Component } from 'react';
import Form from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  hendleInputChange = event => {
    this.setState({ name: event.currentTarget.value });
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
        <Form state={this.state} hendleInputChange />
      </div>
    );
  }
}
