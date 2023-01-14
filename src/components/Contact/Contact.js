import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Button } from './Contact.styled';
import { useState } from 'react';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    dispatch(deleteContact(id));
  };

  return (
    <>
      {name}: {number}
      <Button type="button" onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </Button>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
