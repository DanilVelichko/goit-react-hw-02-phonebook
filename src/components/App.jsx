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
    console.log(data);
    const matchNameInput = this.state.contacts.filter(
      contact => contact.name === data.name
    );
    console.log(matchNameInput);
    if (matchNameInput.length > 0) {
      alert(data.name + ' is already in contacts.');
    } else {
      this.setState(prev => ({ contacts: [...prev.contacts, data] }));
    }
  };

  handleDataUpdate = filteredContacts => {
    console.log('Data', filteredContacts);

    this.setState({ filter: filteredContacts });
  };

  onDeleteBtn = click => {
    console.log(click);
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== click
    );
    this.setState({ ...this.state, contacts: updatedContacts });
  };

  render() {
    return (
      <>
        <Form
          clickSubmit={this.formSubmitHandler}
          arrContacts={this.state.contacts}
        />

        <Filter
          arrContacts={this.state.contacts}
          onDataUpdate={this.handleDataUpdate}
        />

        {this.state.filter === '' ? (
          <ContactsList
            arrContacts={this.state.contacts}
            onDeleteBtn={this.onDeleteBtn}
          />
        ) : (
          <ContactsList
            arrContacts={this.state.filter}
            onDeleteBtn={this.onDeleteBtn}
          />
        )}
      </>
    );
  }
}
