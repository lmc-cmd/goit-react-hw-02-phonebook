import { Component } from 'react';
import s from '../Form/Form.module.scss';
class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  hendleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  hendlerSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={s.form} action="" onSubmit={this.hendlerSubmit}>
        <label htmlFor="">
          {' '}
          name
          <input
            className={s['name-input']}
            value={this.state.name}
            onChange={this.hendleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="">
          {' '}
          number
          <input
            className={s['name-input']}
            value={this.state.number}
            onChange={this.hendleInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={s['submit-btn']}>
          {' '}
          add contact
        </button>
      </form>
    );
  }
}
export default Form;
