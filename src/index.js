import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './reducers/index';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
