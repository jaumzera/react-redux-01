import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Todos, { todoReducer } from './components/Todos/Todos';
import { visibilityReducer } from './components/VisibilityFilter/VisibilityFilter';
import { Provider } from 'react-redux';

const store = createStore(
  combineReducers({
    todoReducer,
    visibilityReducer,
  }),
  applyMiddleware(thunk),
);

store.subscribe(() => {
  console.log('store: ', store.getState());
});

console.log('Initialstore: ', store);
console.log('store.getState: ', store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Todos />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
