import { Component } from 'react';
import { nanoid } from 'nanoid';

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
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>Name</label>
        <input
          type="text"
          name="name"
          id={this.nameId}
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <label htmlFor={this.numberId}>Number</label>
        <input
          type="tel"
          name="number"
          id={this.numberId}
          value={this.state.number}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
