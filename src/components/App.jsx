import React from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const matchNameInput = this.state.contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (matchNameInput) {
      alert(data.name + ' is already in contacts.');
    } else {
      this.setState(prev => ({ contacts: [...prev.contacts, data] }));
    }
  };

  handleDataUpdate = input => {
    this.setState({ filter: input });
  };

  filterContacts() {
    if (this.state.filter !== '') {
      return this.state.contacts.filter(contact =>
        contact.name
          .toLowerCase()
          .includes(this.state.filter.toLowerCase().trim())
      );
    } else {
      return this.state.contacts;
    }
  }

  onDeleteBtn = onDeleteBtn => {
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== onDeleteBtn
    );
    this.setState({ contacts: updatedContacts });
  };

  render() {
    return (
      <>
        <Form clickSubmit={this.formSubmitHandler} />

        <Filter onDataUpdate={this.handleDataUpdate} />

        <ContactsList
          arrContacts={this.filterContacts()}
          onDeleteBtn={this.onDeleteBtn}
        />
      </>
    );
  }
}
