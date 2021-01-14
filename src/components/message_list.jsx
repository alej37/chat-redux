import React, { Component } from 'react';
import Message from '../containers/message';


class MessageList extends Component {
  render() {
    return(
      <div>
        <h1>Channel #general</h1>
        <Message />
      </div>
    );
  }
}

export default MessageList;