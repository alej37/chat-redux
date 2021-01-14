import React from 'react';


// components
import ChannelList from './channel_list';
import MessageList from './message_list';

const App = () => {
  return (
    <div className="app">
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
