import React from 'react';


// components
import ChannelList from './channel_list';
import MessageList from './message_list';
import MessageForm from '../containers/message_form';

const App = () => {
  return (
    <div className="app">
      <ChannelList />
      <MessageList />
      <MessageForm />
    </div>
  );
};

export default App;
