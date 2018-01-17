let currentId = 0;

const addTodo = text => {
  return dispatch =>
    dispatch({
      type: 'ADD_TODO',
      todo: { id: currentId++, text, completed: false },
    });
};

const toggleTodo = todo => {
  return dispatch =>
    dispatch({
      type: 'TOGGLE_TODO',
      todo,
    });
};

const removeTodo = todo => {
  return dispatch =>
    dispatch({
      type: 'REMOVE_TODO',
      todo,
    });
};

export { addTodo, toggleTodo, removeTodo };
