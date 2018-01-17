import React, { Component } from 'react';
import { connect } from 'react-redux';
import VisibilityFilter from '../VisibilityFilter/VisibilityFilter';
import { addTodo, toggleTodo, removeTodo } from './TodosActions';

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
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.todo.id),
      };
    default:
      return state;
  }
};

class Todos extends Component {
  addTodo = text => {
    this.props.addTodo(this.input.value);
    this.input.value = '';
    this.input.focus();
  };

  toggleTodo = todo => () => {
    console.log('Toggle todo: ', todo);
    this.props.toggleTodo(todo);
  };

  removeTodo = todo => () => {
    console.log('Remove todo: ', todo);
    this.props.removeTodo(todo);
  };

  getVisibleTodos() {
    switch (this.props.currentFilter) {
      case 'ALL':
        return this.props.todos;
      case 'NEW':
        return this.props.todos.filter(todo => !todo.completed);
      case 'COMPLETED':
        return this.props.todos.filter(todo => todo.completed);
      default:
        return this.props.todos;
    }
  }

  render() {
    console.log('current props: ', this.props);
    const todoList = this.getVisibleTodos().map((todo, key) => (
      <li
        style={todo.completed ? { textDecoration: 'line-through' } : {}}
        key={key}
      >
        <span onClick={this.toggleTodo(todo)}> {todo.text} </span>
        <button onClick={this.removeTodo(todo)}>x</button>
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

const mapStateToProps = store => {
  return {
    ...store.todoReducer,
    currentFilter: store.visibilityReducer.currentFilter,
  };
};

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  removeTodo,
};

export { todoReducer };
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
