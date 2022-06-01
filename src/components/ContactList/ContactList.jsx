import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { deleteThisContact, getContacts, getFilter } from '../../redux/contactsSlice'
import ListItem from '../ListItem/ListItem';
import { ListContacts } from './ContactList.styles';
import { useGetContactsQuery } from 'redux/contactsSliceQ';
import { useSelector } from 'react-redux';
// import propTypes from 'prop-types';

const ContactList = () => {
  const { data, error, isLoading } = useGetContactsQuery();


  console.log('data:', data);
  console.log('error:', error);
  console.log('isLoading:', isLoading);
  // const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);

  // const visibleContacts = data.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase()),
  // )

  // const deleteContact = contactId => {
  //   dispatch(deleteThisContact(contactId))
  // };

  return (
    <ListContacts>
      {data &&
        data.map(({ name, id, phone }) => (
          <ListItem
            key={id}
            name={name}
            phone={phone}
            id={id}
          />
        ))
      }
    </ListContacts>
  );
};

// ContactList.propTypes = {
//   visibleContacts: propTypes.arrayOf(propTypes.object),
//   deleteContact: propTypes.func,
// };

export default ContactList;