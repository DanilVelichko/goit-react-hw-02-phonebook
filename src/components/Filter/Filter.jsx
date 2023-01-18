import React from 'react';
import ContactsList from 'components/ContactsItem/ContactsItem';
import css from './Filter.module.css'

class Filter extends React.Component {
  state = {
    contacts: this.props.arrContacts,
  };

  render() {
    return (
      <>
        <h2>Contacts</h2>
        <div>
          <input
            type="text"
            name="filter"
          />
        </div>
        
        <ContactsList arrContacts={this.props.arrContacts} />
      </>
    );
  }
}

export default Filter;
