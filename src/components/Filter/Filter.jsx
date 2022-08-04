import s from '../Form/Form.module.scss';
const Filter = ({ filter, filterhandler }) => {
  return (
    <>
      <label htmlFor="">
        find contacts by name
        <input
          type="text"
          className={s['name-input']}
          name=""
          value={filter}
          onChange={filterhandler}
        />
      </label>
    </>
  );
};
export default Filter;
