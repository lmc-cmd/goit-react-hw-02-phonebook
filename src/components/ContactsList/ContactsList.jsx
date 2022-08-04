// import PropTypes from 'prop-types';
import ContactsItem from '../ContactsItem/ContactsItem';
import s from './ContactsList.module.scss';

const ContactsList = ({ contacts, removeContact }) => {
  return (
    <div>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <ContactsItem
            key={id}
            name={name}
            number={number}
            onDeleteContact={() => removeContact(id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
