import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAddContactMutation } from 'redux/contactsSliceQ';
import { useGetContactsQuery } from 'redux/contactsSliceQ';
import { addNewContact, getContacts } from '../../redux/contactsSlice'
import {
  FormWrapper,
  InputLabel,
  FormInrut,
  SubmitButton,
} from './ContactForm.styles';
import { nanoid } from 'nanoid';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [addContact, {isLoading}] = useAddContactMutation();
  const { data } = useGetContactsQuery();
  console.log(data)

  // const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;
        
      default:
        return;
    }
  }

  const onSubmitForm = e => {
    e.preventDefault();

    const newContact = {
      // id: nanoid(),
      name,
      phone
    }
    onAddContact(newContact)
    reset();
  };

  const onAddContact = contact => {
    const nameToFind = data.find(contact => contact.name.toLowerCase() === name.toLowerCase());

    if(nameToFind) {
      alert(`${name} is already in contacts!`);
    } else {
      addContact(contact);
    };
  }

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <FormWrapper onSubmit={onSubmitForm}>
      <InputLabel>Name</InputLabel>
      <FormInrut
        type="text"
        name="name"
        placeholder='Annie Copeland'
        value={name}
        onChange= {handleChange}

        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <InputLabel>Number</InputLabel>
      <FormInrut
        type="tel"
        name="phone"
        placeholder='227-91-26'
        value={phone}
        onChange= {handleChange}

        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <SubmitButton type="submit">Add contact</SubmitButton>
    </FormWrapper>
  )
}