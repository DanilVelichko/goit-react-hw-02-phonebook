import React from 'react';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import css from './ContactsList.module.css'

class ContactsList extends React.Component {
  state = {
    contacts: this.props.arrContacts,
  };

  render() {
    console.log(this.state.contacts)
    return (   

      <ul>
        {this.props.arrContacts.map(contact => {
          return (
            <ContactsItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
            />
          );
        })}
      </ul>
    );
  }
}

export default ContactsList;
