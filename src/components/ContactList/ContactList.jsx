import PropTypes from 'prop-types';
import { List, Items, BtnDelete } from './ContactList.styled';
export function ContactList({ contacts, deleteContact }) {
  const sortedContacts = [...contacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  return (
    <List>
      {sortedContacts.map(({ id, name, number }) => (
        <Items key={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <BtnDelete type="submit" onClick={() => deleteContact(id)}>
            Delete
          </BtnDelete>
        </Items>
      ))}
    </List>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
