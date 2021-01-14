import React, { Component } from 'react';
import Message from '../containers/message';
import MessageForm from '../containers/message_form';


class MessageList extends Component {
  render() {
    return(
      <div>
        <h1>Channel #general</h1>
        <Message />
        <MessageForm />
      </div>
    );
  }
}

export default MessageList;
