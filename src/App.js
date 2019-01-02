import React, { Component } from 'react';
import './App.css';
import Counter from './Counter'
import store from './store/'
import { Provider } from 'react-redux';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter/>
        </div>
      </Provider>
    );
  }
}

export default App;
