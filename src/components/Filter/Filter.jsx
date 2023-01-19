import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

class Filter extends React.Component {
  state = {
    filter: '',
  };

  handleChange = event => {
    this.setState({ filter: event.target.value });
    let filteredContacts = [...this.props.arrContacts];
    let beforeFilterContacts = [...this.props.arrContacts];

    if (this.state.filter || this.state.filter.length > 0) {
      filteredContacts = this.props.arrContacts.filter(contact =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
      this.props.onDataUpdate(filteredContacts);
    } else {
      this.props.onDataUpdate(beforeFilterContacts);
    }
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
Filter.propTypes = {
  arrContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default Filter;
