// import PropTypes from 'prop-types';
import s from './ContactsItem.module.scss';

const ContactListItem = ({ name, number, onDeleteContact }) => {
  return (
    <li className={s.item}>
      <p className={s.contact}>
        {name}
        &#58; &emsp;
        {number}
      </p>
      <button
        className={s.btnDeleteContact}
        type="submit"
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </li>
  );
};

// ContactListItem.propTypes = {
//   // id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

export default ContactListItem;
