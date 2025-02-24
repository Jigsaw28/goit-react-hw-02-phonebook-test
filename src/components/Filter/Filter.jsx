import { nanoid } from 'nanoid';

export const Filter = ({ filter, onChange }) => {
  const filterId = nanoid();

  
  return (
    <>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input type="text" id={filterId} onChange={onChange} value={filter} />
    </>
  );
};
