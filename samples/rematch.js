// @format
import React from 'react';
import {init} from '@rematch/core';
import {Provider, connect} from 'react-redux';

import shortid from 'shortid';

const todos = {
  state: [],
  reducers: {
    added: (state, payload) => [...state, payload],
  },
  effects: {
    addTodo: function(payload, rootState) {
      console.log('before');
      return new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
        return this.added({id: shortid.generate(), text: payload});
      });
    },
  },
};

const store = init({
  models: {todos},
  redux: {
    devtoolOptions: {
      name: 'Rematch',
    },
  },
});

const App = ({todos, addTodo}) => (
  <div>
    <ul>
      {todos.map(t => (
        <li key={t.id}>{t.text}</li>
      ))}
    </ul>
    <form
      key={todos.length}
      onSubmit={e => {
        e.preventDefault();
        return addTodo(e.target.elements.content.value);
      }}>
      <input type="text" name="content" />
      <input type="submit" value="New" />
    </form>
  </div>
);

const ConnectedApp = connect(
  state => ({todos: state.todos}),
  dispatch => ({
    addTodo: dispatch.todos.addTodo,
  }),
)(App);

const Rematch = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);

export default Rematch;
