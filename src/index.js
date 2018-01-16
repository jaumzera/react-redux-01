import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { todoReducer } from './App';
import { visibilityReducer } from './components/VisibilityFilter';
import { Provider } from 'react-redux';

const combinedReducers = combineReducers({
  todos: todoReducer,
  filter: visibilityReducer,
});

console.log('combined-reducers: ', combinedReducers);
const store = createStore(combinedReducers);

store.subscribe(() => {
  console.log('store: ', store.getState());
});

console.log('Initialstore: ', store);
console.log('store.getState: ', store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
