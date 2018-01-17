import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todos from './components/Todos';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { todoReducer } from './components/Todos';
import { visibilityReducer } from './components/VisibilityFilter';
import { Provider } from 'react-redux';

const store = createStore(
  combineReducers({
    todoReducer,
    visibilityReducer,
  }),
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
