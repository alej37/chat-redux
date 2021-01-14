import React, { Component } from 'react';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button>Send</button>
        </form>

      </div>
    )
  }
}


export default MessageForm;