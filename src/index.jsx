// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer';
import currentUserReducer from './reducers/current_user_reducer';
import channelSelectedReducer from './reducers/channel_selected_reducer';

// user initial state

const initialState = {
  messages: [],
  channelList: ['general', 'chat', 'quebec'],
  username: prompt("what is your username?") || `annonymous${Math.floor(10 +(Math.random() * 90))}`,
  selectedChannel: 'general'
};


// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  currentUser: currentUserReducer,
  channelSelected: channelSelectedReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
