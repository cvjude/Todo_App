import React, { useContext, useState, useEffect } from 'react';
import TodoDetails from './TodoDetails';
import { TodoContext } from '../contexts/TodoContext';
import { axiosInstance } from '../helpers';
import loader from '../assets/loader.gif';

const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const [loading, setloading] = useState(!todos);

  useEffect(() => {
    const getAllTodos = async () => {
      const todos = await axiosInstance.get('/todos/all');
      dispatch({ type: 'GET_ALL_TODOS', todos: todos.data.data });
      setloading(false);
    };

    if (loading) {
      getAllTodos();
    }
  }, [todos, dispatch, loading]);

  if (!todos) {
    return (
      <div className="todo-list">
        <div className="loading">
          <img src={loader} alt="loading" />
        </div>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.length ? (
        <ul>
          {todos.map((todo) => {
            return <TodoDetails todo={todo} key={todo.id} />;
          })}
        </ul>
      ) : (
        <div className="todo-list empty">
          No todos yet, use the form to create your first todo
        </div>
      )}
    </div>
  );
};

export default TodoList;
