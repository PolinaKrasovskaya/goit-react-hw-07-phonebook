import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    filter: '',
  },
  reducers: {
    filterContacts (state, action) {
      state.filter = action.payload;
    }
  }
});

export const { filterContacts } = contactsSlice.actions;

//Selectors

export const getFilter =  state => state.contacts.filter;