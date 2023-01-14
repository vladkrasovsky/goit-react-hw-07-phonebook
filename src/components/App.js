import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getIsLoading, getError, getContacts } from 'redux/selectors';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import Section from './Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Notification from './Notification';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const showMessage = isLoading && !error;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      {showMessage && <Notification message="Request in progress..." />}

      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter />

          <ContactList />
        </Section>
      )}

      <GlobalStyle />
    </Layout>
  );
};

export default App;
