// @format
import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import shortid from 'shortid';

const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'COMMENT_ADDED':
      return [...state, {id: action.id, content: action.content}];
    case 'COMMENT_EDITED':
      return state.map(comment => {
        if (comment.id === action.id) {
          return {id: comment.id, content: action.content};
        } else {
          return comment;
        }
      });
    case 'COMMENT_REMOVED':
      return state.filter(comment => comment.id !== action.id);
    default:
      return state;
  }
}

const addComment = content => ({
  type: 'COMMENT_ADDED',
  id: shortid.generate(),
  content,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({name: 'Simple'}),
);

class Comments extends React.Component {
  newComment = e => {
    e.preventDefault();
    this.props.addComment(e.target.elements.content.value);
  };

  render() {
    const {comments} = this.props;
    return (
      <ul>
        {comments.map(c => (
          <li key={c.id}>{c.content}</li>
        ))}
        <li>
          <form key={comments.length} onSubmit={this.newComment}>
            <input type="text" name="content" />
            <input type="submit" value="New" />
          </form>
        </li>
      </ul>
    );
  }
}

const ConnectedComments = connect(
  state => ({comments: state}),
  dispatch => ({
    addComment: content => dispatch(addComment(content)),
  }),
)(Comments);

const Simple = () => (
  <Provider store={store}>
    <ConnectedComments />
  </Provider>
);

export default Simple;
