import React from 'react';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import ContactsItem from './ContactsItem/ContactsItem';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  ],
    filter: '',
    name: '',
    number: '',
  }

  formSubmitHandler = data => {
    const { name, number } = data
    
    const newUserData = {
      id: nanoid(),
      name: name,
      number: number,
    }
    this.state.contacts.push(newUserData)

}
  addToPhoneBook = data => {
  
}
  render() {
    return (
      <>
        
        <Form clickSubmit={this.formSubmitHandler} />
    

        <Filter
          arrContacts={this.state.contacts}
          
           />
      </>
    );
  }
}
