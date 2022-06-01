import React from 'react';
import { useDeleteContactMutation } from 'redux/contactsSliceQ';
import {
  ItemList,
  ItemButton,
} from './ListItem.styles';
import propTypes from 'prop-types';

const ListItem = ({ name, phone, id }) => {
  const [deleteContact, {isLoading}] = useDeleteContactMutation();

  return (
    <ItemList>
      {name}: {phone}
      <ItemButton
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        Delete
      </ItemButton>
    </ItemList>
  )
};

// ListItem.propTypes = {
//   name: propTypes.string.isRequired,
//   number: propTypes.string.isRequired,
//   id: propTypes.string.isRequired,
//   onDeleteContact: propTypes.func.isRequired,
// };

export default ListItem;