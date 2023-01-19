import React from 'react';
import css from './ContactsItem.module.css'

const ContactsItem = ({ id, name, number }) => {
  return (
    <li className={css.contacts_item} key={id}>
      
        <div className={css.contacts_user}>
          <p className={css.contacts_name}>{name}: </p>
          <p>{number}</p>
        </div>
        <button className={css.button_delete}>Delete</button>
      
    </li>
  );
};

export default ContactsItem;
