import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ButtonSubmit, Form, Input, Label } from './PhonebookForm.styled';

export class PhonebookForm extends Component {
  nameId = nanoid();
  numberId = nanoid();

  state = {
    name: '',
    number: '',
  };

  handleChange = ({target: {name, value, number}}) => {
    this.setState({
      [name]: value,
      [number]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const {name, number} = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameId}>Name</Label>
        <Input
          type="text"
          name="name"
          id={this.nameId}
          value={name}
          onChange={this.handleChange}
          required
        />
        <Label htmlFor={this.numberId}>Number</Label>
        <Input
          type="tel"
          name="number"
          id={this.numberId}
          value={number}
          onChange={this.handleChange}
          required
        />
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </Form>
    );
  }
}
