import React, { createContext, useReducer } from 'react';
import { todoReducer } from '../reducers/TodoReducer';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, dispatch] = useReducer(todoReducer);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
