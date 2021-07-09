import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Navbar from './components/Navbar';
import TodoContextProvider from './contexts/TodoContext';
import TodoList from './components/TodoList';
import NewTodoForm from './components/NewTodoForm';

function App() {
  return (
    <ToastProvider>
      <div className="App">
        <TodoContextProvider>
          <Navbar />
          <div className="todo-container">
            <NewTodoForm />
            <TodoList />
          </div>
        </TodoContextProvider>
      </div>
    </ToastProvider>
  );
}

export default App;
