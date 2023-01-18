import React from 'react';

const ContactsItem = ({ id, name, number }) => {
  return (
    <li id={id}>
      <p>{name}</p>
      <p>{number}</p>
    </li>
  );
};

export default ContactsItem;
