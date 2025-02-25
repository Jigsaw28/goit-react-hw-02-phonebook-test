import { nanoid } from 'nanoid';


export const Contacts = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <div key={nanoid()}>
          <li>
            {contact.name}: {contact.number}
          </li>
          <button type='button' onClick={()=>deleteContact(contact.id)} >Delete</button>
        </div>
      ))}
    </ul>
  );
};
