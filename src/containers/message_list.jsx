import React, { Component } from 'react';
import Message from './message';
import MessageForm from './message_form';


class MessageList extends Component {
  constructor(props) {
    super(props);
  }

  renderList = () => {
    return this.state.messages.map(message => <Message id={message} key={message} />);
  }


  render() {
    return (
      <div>
        <h1>Channel #general</h1>
        {this.renderList()}
        <MessageForm />
      </div>
    );
  }
}

export default MessageList;
