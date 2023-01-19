import React from 'react';
import ContactsList from 'components/ContactsList/ContactsList';
import css from './Filter.module.css';


class Filter extends React.Component {
  state = {
    contacts: this.props.arrContacts,
  };

  render() {
    return (
      <>
        <h2 className={css.contacts_title}>Contacts</h2>
        <div className={css.contacts_input}>
          <input type="text" name="filter" />
        </div>

        <ContactsList
          arrContacts={this.props.arrContacts}/>
      </>
    );
  }
}

export default Filter;
