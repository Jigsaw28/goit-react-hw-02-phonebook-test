import { nanoid } from 'nanoid';
import { List, ListItem } from './Contacts.styled';


export const Contacts = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={nanoid()}>
          <li className='item'>
            {contact.name}: {contact.number}
          </li>
          <button className='btn-delete' type='button' onClick={()=>deleteContact(contact.id)} >Delete</button>
        </ListItem>
      ))}
    </List>
  );
};
