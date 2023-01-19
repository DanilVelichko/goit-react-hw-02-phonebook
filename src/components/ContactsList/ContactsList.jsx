import React from 'react';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import css from './ContactsList.module.css';

class ContactsList extends React.Component {

  render() {
 
    return (
      <ul className={css.contacts_list}>
        {this.props.arrContacts.map(contact => {
          return (
            <ContactsItem
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDeleteBtn={this.props.onDeleteBtn}

            />
          );
        })}
      </ul>
    );
  }
}

export default ContactsList;
