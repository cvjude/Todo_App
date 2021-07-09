import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const Navbar = () => {
  const { todos } = useContext(TodoContext);

  const itemLength = todos?.reduce((acc, cur) => {
    if (!cur.completed) {
      return acc + 1;
    }

    return acc;
  }, 0);

  return (
    <div className="navbar">
      <h1>My Todo List</h1>
      <p>
        Currently you have {itemLength ? itemLength : 'no'} todo
        {itemLength < 1 ? 's' : ''} to get through...
      </p>
    </div>
  );
};

export default Navbar;
