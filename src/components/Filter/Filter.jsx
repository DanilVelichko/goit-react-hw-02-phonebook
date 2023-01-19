import React from 'react';
import ContactsList from 'components/ContactsList/ContactsList';
import css from './Filter.module.css';

class Filter extends React.Component {
  state = {
    filter: '',
  };

  handleChange = event => {
    this.setState({ filter: event.target.value });
    // const startDataContacts = [...this.props.arrContacts]
    // console.log("Start filter", startDataContacts)
    let filteredContacts = [...this.props.arrContacts];

    if (this.state.filter) {
      filteredContacts = this.props.arrContacts.filter(contact =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
      this.props.onDataUpdate(filteredContacts);
    }
    // if (this.state.filter.length === 0) {
    //   filteredContacts = startDataContacts;

    // this.props.onDataUpdate(filteredContacts);
    // }
    console.log(filteredContacts);
  };

  render() {
    return (
      <>
        <h2 className={css.contacts_title}>Contacts</h2>
        <h3 className={css.filter_title}>Find contacts by name</h3>
        <div className={css.contacts_input}>
          <input type="text" name="filter" onChange={this.handleChange} />
        </div>
      </>
    );
  }
}

export default Filter;
