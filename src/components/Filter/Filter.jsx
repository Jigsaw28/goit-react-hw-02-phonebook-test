import { Input, Label } from 'components/PhonebookForm/PhonebookForm.styled';
import { nanoid } from 'nanoid';
import { FilterBlock } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  const filterId = nanoid();

  
  return (
    <FilterBlock>
      <Label htmlFor={filterId}>Find contacts by name</Label>
      <Input type="text" id={filterId} onChange={onChange} value={filter} />
    </FilterBlock>
  );
};
