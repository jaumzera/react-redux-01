import React, { Component } from 'react';
import { connect } from 'react-redux';
import VisibilityFilter from './components/VisibilityFilter';
let currentId = 0;

const INI_STATE = {
  todos: [],
};

const todoReducer = (state = INI_STATE, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: state.todos.concat(action.todo) };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.todo.id === todo.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

class App extends Component {
  addTodo = text => {
    this.props.addTodo(this.input.value);
    this.input.value = '';
    this.input.focus();
  };

  toggleTodo = todo => () => {
    console.log('Toggle todo: ', todo);
    this.props.toggleTodo(todo);
  };

  render() {
    console.log('current state: ', this.state);
    const { todos } = this.props;
    const todoList = todos.map((todo, key) => (
      <li
        style={todo.completed ? { textDecoration: 'line-through' } : {}}
        key={key}
        onClick={this.toggleTodo(todo)}
      >
        {todo.text}
      </li>
    ));
    return (
      <div>
        <input ref={input => (this.input = input)} />
        <button onClick={this.addTodo}>Add</button>
        <ul>{todoList}</ul>
        <VisibilityFilter />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('todo: ', state);
  return {
    todos: state.todos.todos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => {
      dispatch({
        type: 'ADD_TODO',
        todo: { id: currentId++, text, completed: false },
      });
    },
    toggleTodo: todo => {
      dispatch({
        type: 'TOGGLE_TODO',
        todo,
      });
    },
  };
};

export { todoReducer };
export default connect(mapStateToProps, mapDispatchToProps)(App);
