import s from '../Form/Form.module.scss';
const Form = ({ state, hendleInputChange, hendleSubmit }) => {
  return (
    <form className={s.form} action="" onSubmit={hendleSubmit}>
      <label htmlFor="">
        <input
          className={s['name-input']}
          value={state.name}
          onChange={hendleInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="">
        <input
          className={s['name-input']}
          value={state.number}
          onChange={hendleInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit"> add contact</button>
    </form>
  );
};

export default Form;
