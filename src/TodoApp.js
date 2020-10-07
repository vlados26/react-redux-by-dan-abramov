import React from 'react';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';
import Footer from './components/Footer';

const TodoApp = () => (
  <>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </>
);

export default TodoApp;
