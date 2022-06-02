import React from 'react';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import {
  ItemList,
  ItemButton,
} from './ListItem.styles';

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
        {isLoading ? 'Deleting...' : 'Delete'}
      </ItemButton>
    </ItemList>
  )
};

export default ListItem;