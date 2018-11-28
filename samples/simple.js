// @format
import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider, connect} from 'react-redux';
import shortid from 'shortid';

const addTodo = text => ({
  type: 'TODO_ADDED',
  id: shortid.generate(),
  text: text,
});

function todoReducer(state = [], action) {
  switch (action.type) {
    case 'TODO_ADDED':
      return [...state, {id: action.id, text: action.text}];
    case 'TODO_EDITED':
      return state.map(t =>
        t.id === action.id ? {id: t.id, text: action.text} : t,
      );
    case 'TODO_REMOVED':
      return state.filter(t => t.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    todos: todoReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({name: 'Simple'}),
);

const App = ({todos, addTodo}) => (
  <div>
    <ul>
      {todos.map(t => (
        <li key={t.id}>{t.text}</li>
      ))}
    </ul>
    <form
      key={todos.length}
      onSubmit={e => addTodo(e.target.elements.content.value)}>
      <input type="text" name="content" />
      <input type="submit" value="New" />
    </form>
  </div>
);

const ConnectedApp = connect(
  state => ({todos: state.todos}),
  dispatch => ({
    addTodo: content => dispatch(addTodo(content)),
  }),
)(App);

const Simple = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);

export default Simple;
