import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBlMOUxyXLrNQBZJo1vBqehGxhEHq3-5DA',
      authDomain: 'manager-c33b2.firebaseapp.com',
      databaseURL: 'https://manager-c33b2.firebaseio.com',
      projectId: 'manager-c33b2',
      storageBucket: 'manager-c33b2.appspot.com',
      messagingSenderId: '367892327628'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
