import React, { Component } from 'react';
import './App.css';
import AddTodo from './containers/AddTodo';
import TodoList from './containers/TodoList';
import Filter from './containers/Filter';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AddTodo />
          <TodoList />
          <Filter />
        </div>
      </Provider>
    );
  }
}

export default App;
