import React from 'react';
import css from './ContactsItem.module.css'

const ContactsItem = ({ id, name, number, onDeleteBtn }) => {
  return (
    <li className={css.contacts_item} id={id}>
      
        <div className={css.contacts_user}>
          <p className={css.contacts_name}>{name}: </p>
          <p>{number}</p>
        </div>
        <button className={css.button_delete} onClick={() => onDeleteBtn(id)}>Delete</button>
      
    </li>
  );
};

export default ContactsItem;
