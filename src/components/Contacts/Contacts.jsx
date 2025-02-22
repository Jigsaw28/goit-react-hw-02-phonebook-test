import { nanoid } from "nanoid";

export const Contacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
          <li key={nanoid()}>{contact.name}: {contact.number}</li>
      ))}
    </ul>
  );
};
