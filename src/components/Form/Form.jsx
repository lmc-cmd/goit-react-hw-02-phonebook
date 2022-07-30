import s from '../Form/Form.module.scss';
const Form = ({ state, hendleInputChange }) => {
  return (
    <form className={s.form} action="">
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
    </form>
  );
};

export default Form;
