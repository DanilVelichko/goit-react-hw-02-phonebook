import React from 'react';
import ContactsList from 'components/ContactsItem/ContactsItem';
// import css from './Filter.module.css'

class Filter extends React.Component {
  state = {
    contacts: this.props.arrContacts,
  }

 
  render() {
    return (
      <>
        <ContactsList arrContacts={this.props.arrContacts}/>
      </>
    );
  }
};

export default Filter;
