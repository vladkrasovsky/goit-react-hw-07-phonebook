import { useSelector } from 'react-redux';
import { selectNameFilter, selectVisibleContacts } from 'redux/selectors';
import Contact from 'components/Contact';
import { List } from './ContactList.styled';
import Notification from 'components/Notification';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const nameFilter = useSelector(selectNameFilter);
  const showMessage = contacts.length === 0 && nameFilter;

  return (
    <>
      {showMessage && (
        <Notification message="Nothing was found on your query..." />
      )}

      {contacts.length > 0 && (
        <List>
          {contacts.map(contact => (
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
