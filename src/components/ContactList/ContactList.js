import { useSelector } from 'react-redux';
import { getContacts, getNameFilter } from 'redux/selectors';
import Contact from 'components/Contact';
import { List } from './ContactList.styled';
import Notification from 'components/Notification';

const getVisibleContacts = (contacts, nameFilter) => {
  const normalizedFilter = nameFilter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const nameFilter = useSelector(getNameFilter);
  const visibleContacts = getVisibleContacts(contacts, nameFilter);
  const showMessage = visibleContacts.length === 0 && nameFilter;

  return (
    <>
      {showMessage && (
        <Notification message="Nothing was found on your query..." />
      )}

      {visibleContacts.length > 0 && (
        <List>
          {visibleContacts.map(contact => (
            <li key={contact.id}>
              <Contact {...contact} />
            </li>
          ))}
        </List>
      )}
    </>
  );
};

export default ContactList;
