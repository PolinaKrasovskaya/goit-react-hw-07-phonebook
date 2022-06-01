import * as contactsActions from './contactsActions';

export const fetchContacts = () => async dispatch => {
    dispatch(contactsActions.fetchContactsRequest())
}